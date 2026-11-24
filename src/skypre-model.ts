import * as tf from "@tensorflow/tfjs";

type Visor = ReturnType<(typeof import("@tensorflow/tfjs-vis"))["visor"]>;

interface TrainingOptions {
  weights: readonly number[];
  isActive: () => boolean;
  onEpoch: (epoch: number, loss: number) => void;
  showVisor?: (visor: Visor) => void;
}

export function loadPresetModel(): Promise<tf.LayersModel> {
  return tf.loadLayersModel(`${import.meta.env.BASE_URL}skypre-model.json`, {
    async fetchFunc(...[url, options]: Parameters<typeof fetch>) {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Model asset returned HTTP ${response.status}: ${url}`);
      }
      return response;
    },
  });
}

export async function predictScores(model: tf.LayersModel, features: number[][]) {
  const prediction = tf.tidy(() => {
    const result = model.predict(tf.tensor2d(features));
    if (Array.isArray(result)) throw new Error("Expected a single model output");
    return result;
  });
  try {
    return await prediction.data();
  } finally {
    prediction.dispose();
  }
}

export async function trainTemporaryModel({
  weights,
  isActive,
  onEpoch,
  showVisor,
}: TrainingOptions): Promise<tf.LayersModel | undefined> {
  const [{ default: history }, tfvis] = await Promise.all([
    import("./assets/data/legacy/history.json"),
    showVisor && import("@tensorflow/tfjs-vis"),
  ]);
  if (!isActive()) return;

  let visualization: ReturnType<(typeof import("@tensorflow/tfjs-vis"))["show"]["fitCallbacks"]> | undefined;
  if (tfvis) {
    const visor = tfvis.visor();
    showVisor?.(visor);
    visualization = tfvis.show.fitCallbacks(visor.surface({ name: "训练效果" }), ["loss"], {
      callbacks: ["onEpochEnd"],
    });
  }
  const model = tf.sequential({
    layers: [tf.layers.dense({ units: 1, inputShape: [8], activation: "sigmoid" })],
  });
  const optimizer = tf.train.adam(0.1);
  let trainingTensors: [tf.Tensor2D, tf.Tensor1D] | undefined;
  try {
    model.compile({ loss: tf.losses.logLoss, optimizer });
    trainingTensors = tf.tidy(() => [
      tf.tensor2d(history.map(({ f1, f2, f3, f4, f5, f6, f7, f8 }) =>
        [f1, f2, f3, f4, f5, f6, f7, f8].map((value, index) => value * weights[index]),
      )),
      tf.tensor1d(history.map(({ target }) => target)),
    ]);
    const [inputs, labels] = trainingTensors;
    await model.fit(inputs, labels, {
      batchSize: 50,
      epochs: 20,
      callbacks: {
        onBatchEnd() {
          if (!isActive()) model.stopTraining = true;
        },
        async onEpochEnd(epoch, logs) {
          if (!isActive() || !logs) return;
          onEpoch(epoch + 1, logs.loss);
          await visualization?.onEpochEnd?.(epoch, logs);
        },
      },
    });
    return model;
  } catch (error) {
    model.dispose();
    throw error;
  } finally {
    if (trainingTensors) tf.dispose(trainingTensors);
    optimizer.dispose();
  }
}

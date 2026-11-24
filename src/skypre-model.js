import * as tf from "@tensorflow/tfjs";

export function loadPresetModel() {
  return tf.loadLayersModel(`${process.env.BASE_URL}skypre-model.json`, {
    async fetchFunc(url, options) {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Model asset returned HTTP ${response.status}: ${url}`);
      return response;
    },
  });
}

export async function predictScores(model, features) {
  const prediction = tf.tidy(() => model.predict(tf.tensor2d(features)));
  try {
    return await prediction.data();
  } finally {
    prediction.dispose();
  }
}

export async function trainTemporaryModel(showVisor, isActive) {
  const [{ default: history }, tfvis] = await Promise.all([
    import(/* webpackChunkName: "skypre-training-data" */ "./assets/data/history.json"),
    import(/* webpackChunkName: "tensorflow-vis" */ "@tensorflow/tfjs-vis"),
  ]);
  if (!isActive()) return;

  const visor = tfvis.visor();
  showVisor(visor);
  const callbacks = tfvis.show.fitCallbacks(visor.surface({ name: "训练效果" }), ["loss"]);
  const model = tf.sequential({
    layers: [tf.layers.dense({ units: 1, inputShape: [8], activation: "sigmoid" })],
  });
  const optimizer = tf.train.adam(0.1);
  let trainingTensors;
  try {
    model.compile({ loss: tf.losses.logLoss, optimizer });
    trainingTensors = tf.tidy(() => [
      tf.tensor2d(history.map(({ f1, f2, f3, f4, f5, f6, f7, f8 }) => [
        f1, f2, f3, f4, f5, f6, f7, f8,
      ])),
      tf.tensor1d(history.map(({ target }) => target)),
    ]);
    const [inputs, labels] = trainingTensors;
    await model.fit(inputs, labels, {
      batchSize: 50,
      epochs: 20,
      callbacks: {
        onBatchEnd(batch, logs) {
          if (isActive()) return callbacks.onBatchEnd(batch, logs);
          model.stopTraining = true;
        },
        onEpochEnd(epoch, logs) {
          if (isActive()) return callbacks.onEpochEnd(epoch, logs);
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

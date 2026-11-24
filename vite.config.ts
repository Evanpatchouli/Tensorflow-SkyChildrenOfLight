import { fileURLToPath } from "node:url";
import vue from "@vitejs/plugin-vue";
import { defineConfig, type Plugin } from "vite";

const publishedRoutes = [
  "skypre",
  "skypre/prediction",
  "skypre/experiment",
  "about",
  "tensorflow",
];

function staticRouteEntries(): Plugin {
  return {
    name: "static-route-entries",
    apply: "build",
    generateBundle: {
      order: "post",
      handler(_options, bundle) {
        const entry = bundle["index.html"];
        if (entry?.type !== "asset") {
          this.error("Missing built index.html for static routes");
        }

        // Let static hosts serve Vue Router paths without rewrite rules.
        for (const route of publishedRoutes) {
          this.emitFile({
            type: "asset",
            fileName: `${route}/index.html`,
            source: entry.source,
          });
        }
      },
    },
  };
}

export default defineConfig(({ command, isPreview }) => ({
  base: command === "build" || isPreview ? "/TensorflowSkyPredict.github.io/" : "/",
  plugins: [vue(), staticRouteEntries()],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
}));

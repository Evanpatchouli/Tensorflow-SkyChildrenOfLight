module.exports = {
  lintOnSave: false,
  publicPath:
    process.env.NODE_ENV === "production" ? "/TensorflowSkyPredict.github.io/" : "/",
  chainWebpack(config) {
    config.plugins.delete("prefetch");

    const splitChunks = config.optimization.get("splitChunks") || {};
    config.optimization.splitChunks({
      ...splitChunks,
      cacheGroups: {
        ...splitChunks.cacheGroups,
        tensorflow: {
          name: "tensorflow",
          test: /[\\/]node_modules[\\/]@tensorflow[\\/]tfjs(?:-(?!vis[\\/])[^\\/]+)?[\\/]/,
          chunks: "async",
          enforce: true,
        },
      },
    });

    if (process.env.NODE_ENV === "production") {
      const html = config.plugin("html");
      const [options] = html.get("args");
      config.plugin("html-skypre").use(html.get("plugin"), [{
        ...options,
        filename: "skypre/index.html",
      }]);
    }
  },
};

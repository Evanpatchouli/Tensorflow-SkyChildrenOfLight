module.exports = {
  // devServer: {
  //   "/api": {
  //     target:
  //       "https://evan-oss-bucket1.oss-cn-hangzhou.aliyuncs.com/skypre/skypre-model.json",
  //     ws: true,
  //     changeOrigin: true,
  //     pathRewrite: {
  //       "^/api": "",
  //     },
  //   },
  // },
  lintOnSave: false,
  publicPath:
    process.env.NODE_ENV === "production" ? "/tensorflow-skypre/" : "/",
};

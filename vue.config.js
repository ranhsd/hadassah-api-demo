module.exports = {
  devServer: {
    proxy: "https://services.odata.org",
  },
  lintOnSave: false,

  transpileDependencies: ["vuetify"],
};

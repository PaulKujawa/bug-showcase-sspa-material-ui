const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "pkujawa",
    projectName: "demo-app",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    devServer: {
      https: true,
    },
    externals: [/^@material-ui\/core$/],
  });
};

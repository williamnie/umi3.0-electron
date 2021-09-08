const buildrc = require("../../../.buildrc.js");

export default {
  history: { type: 'hash' },
  outputPath: `../../dist/renderer`,
  publicPath: './',
  title: 'Electron',
  nodeModulesTransform: { type: 'none' },
  webpack5: {},
  mfsu: {},

  alias: buildrc.webpack.alias,
  ignoreMomentLocale: true,
  routes: [
    {
      path: '/',
      component: './index',
    },
  ],
};

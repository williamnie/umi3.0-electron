const buildrc = require("../../../.buildrc.js");

export default {
  history: { type: 'hash' },
  outputPath: `../../dist/renderer`,
  publicPath: './',
  nodeModulesTransform: { type: 'none' },

  alias: buildrc.webpack.alias,
  ignoreMomentLocale: true,


  model: {},
  antd: {},
  request: {},
  initialState: {},
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true,
  },

};

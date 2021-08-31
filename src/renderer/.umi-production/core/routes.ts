// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/xiaobei/Documents/private/toolbox/umi3.0-electron/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('/Users/xiaobei/Documents/private/toolbox/umi3.0-electron/src/renderer/pages/index').default,
    "exact": true
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}

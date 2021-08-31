// @ts-nocheck
import React from 'react';
import { _DvaContainer, getApp, _onCreate } from './dva';

export function rootContainer(container, opts) {
  return React.createElement(_DvaContainer, opts, container);
}


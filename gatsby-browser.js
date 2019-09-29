/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react';
import WindowDimensionsProvider from './src/components/WindowDimensionProvider';

export const wrapRootElement = ({ element }) =>
  <WindowDimensionsProvider>{element}</WindowDimensionsProvider>;
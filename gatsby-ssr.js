/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from 'react';
import WindowDimensionsProvider from './src/components/WindowDimensionProvider';

export const wrapRootElement = ({ element }) =>
  <WindowDimensionsProvider>{element}</WindowDimensionsProvider>;
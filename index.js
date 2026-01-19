/*!
 * docdown
 * Copyright 2011-2016 John-David Dalton
 * Copyright 2026 SignpostMarv
 * Available under MIT license
 */

import {
  readFileSync,
} from 'node:fs';

import {
  basename,
} from 'node:path';

import generator from './lib/generator.js';

/**
 * Generates Markdown documentation based on JSDoc comments.
 *
 * @param {Object} options The options object.
 * @param {string} options.path The input file path.
 * @param {string} options.url The source URL.
 * @param {string} [options.lang='js'] The language indicator for code blocks.
 * @param {boolean} [options.sort=true] Specify whether entries are sorted.
 * @param {string} [options.style='default'] The hash style for links ('default' or 'github').
 * @param {string} [options.title='<%= basename(options.path) %> API documentation'] The documentation title.
 * @param {string} [options.toc='properties'] The table of contents organization style ('categories' or 'properties').
 * @returns {string} The generated Markdown code.
 */
function docdown({
  lang = 'js',
  sort = true,
  style = 'default',
  title,
  toc = 'properties',
  ...options
} = {}) {
  if (!options.path || !options.url) {
    throw new Error('Path and URL must be specified');
  }

  return generator(readFileSync(options.path, 'utf8'), {
    ...options,
    lang,
    sort,
    style,
    title: title == undefined ? basename(options.path) + ' API documentation' : title,
    toc,
  });
}

export default docdown;

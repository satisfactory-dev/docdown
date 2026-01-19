/*!
 * docdown
 * Copyright 2011-2016 John-David Dalton
 * Copyright 2026 SignpostMarv
 * Available under MIT license
 */
'use strict';

var
    doctrine = require('doctrine');

var reCode = /`.*?`/g,
    reToken = /@@token@@/g,
    token = '@@token@@';

/*----------------------------------------------------------------------------*/

/**
 * The `Array#sort` comparator to produce a
 * [natural sort order](https://en.wikipedia.org/wiki/Natural_sort_order).
 *
 * @memberOf util
 * @param {string} value The value to compare.
 * @param {string} other The other value to compare.
 * @returns {-1|0|1} Returns the sort order indicator for `value`.
 */
function compareNatural(value, other) {
  var index = -1,
      valParts = value.split('.'),
      valLength = valParts.length,
      othParts = other.split('.'),
      othLength = othParts.length,
      length = Math.min(valLength, othLength);

  while (++index < length) {
    var valPart = valParts[index],
        othPart = othParts[index];

    if (valPart > othPart && othPart != 'prototype') {
      return 1;
    } else if (valPart < othPart && valPart != 'prototype') {
      return -1;
    }
  }
  return valLength > othLength ? 1 : (valLength < othLength ? -1 : 0);
}

/**
 * Performs common string formatting operations.
 *
 * @memberOf util
 * @param {string|undefined} string The string to format.
 * @returns {string} Returns the formatted string.
 */
function format(string) {
  string = `${string || ''}`;

  // Replace all code snippets with a token.
  var snippets = [];
  string = string.replace(reCode, function(match) {
    snippets.push(match);
    return token;
  });

  return string
    // Add line breaks.
    .replace(/:\n(?=[\t ]*\S)/g, ':<br>\n')
    .replace(/\n( *)[-*](?=[\t ]+\S)/g, '\n<br>\n$1*')
    .replace(/^[\t ]*\n/gm, '<br>\n<br>\n')
    // Normalize whitespace.
    .replace(/\n +/g, ' ')
    // Italicize parentheses.
    .replace(/(^|\s)(\(.+\))/g, '$1*$2*')
    // Mark numbers as inline code.
    .replace(/[\t ](-?\d+(?:.\d+)?)(?!\.[^\n])/g, ' `$1`')
    // Replace all tokens with code snippets.
    .replace(reToken, function(match) {
      return snippets.shift();
    })
    .trim();
}

/**
 * Parses the JSDoc `comment` into an object.
 *
 * @memberOf util
 * @param {string} comment The comment to parse.
 * @returns {Object} Returns the parsed object.
 */
function parse(comment) {
  return doctrine.parse(comment, {
    lineNumbers: true,
    recoverable: true,
    sloppy: true,
    unwrap: true
  })
}

/**
 * Trims leading and trailing parentheses from a string
 *
 * @param {string} str
 *
 * @returns {string}
 */
function deparenthesize(str) {
  return str.replace(/^[()]*([^()].*[^()])[()]*$/, '$1')
}

module.exports = {
  'compareNatural': compareNatural,
  'format': format,
  'parse': parse,
  deparenthesize,
};

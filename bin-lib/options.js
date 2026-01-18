'use strict';

/*----------------------------------------------------------------------------*/

/** @typedef {'lang'|'sort'|'style'|'title'|'toc'|'url'} OptionName */

/**
 * Gets the value for the given option name. If no value is available the
 * `defaultValue` is returned.
 *
 * @param {OptionName} name The name of the option.
 * @param {*} defaultValue The default option value.
 * @returns {*} Returns the option value.
 */
function getOption(name, defaultValue) {
  return process.argv.reduce(function(result, value) {
    value = optionToValue(name, value);

    return value == null ? result : value;
  }, defaultValue);
}

/**
 * Extracts the option value from an option string.
 *
 * @param {OptionName} name The name of the option to inspect.
 * @param {string} string The options string.
 * @returns {string|undefined} Returns the option value, else `undefined`.
 */
function optionToValue(name, string) {
  /** @type {string|undefined} */
  let result;
  const match = string.match(RegExp('^' + name + '(?:=([\\s\\S]+))?$'));
  if (match) {
    [, result] = match;
    result = result ? result.trim() : true;
  }
  if (result === 'false') {
    return false;
  }
  return result || undefined;
}

module.exports = {
  getOption,
  optionToValue,
};

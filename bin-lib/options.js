/*!
 * docdown
 * Copyright 2011-2016 John-David Dalton
 * Copyright 2026 SignpostMarv
 * Available under MIT license
 */

/*----------------------------------------------------------------------------*/

/** @typedef {'lang'|'sort'|'style'|'title'|'toc'|'url'|'--force'} OptionName */

/**
 * Wraps functions in a context provider to enable testing without relying on process.argv
 *
 * @param {string[]} context
 */
function fromContext(context) {
  /**
   * Gets the value for the given option name. If no value is available the
   * `defaultValue` is returned.
   *
   * @param {OptionName} name The name of the option.
   * @param {string|boolean|undefined} defaultValue The default option value.
   * @returns {string|boolean|undefined} Returns the option value.
   */
  function getOption(name, defaultValue) {
    return context.reduce(function(result, value) {
      value = optionToValue(name, value);

      return value == null ? result : value;
    }, defaultValue);
  }

  return getOption;
}

/**
 * Extracts the option value from an option string.
 *
 * @param {OptionName} name The name of the option to inspect.
 * @param {string} string The options string.
 * @returns {string|boolean|undefined} Returns the option value, else `undefined`.
 */
function optionToValue(name, string) {
  /** @type {string|undefined} */
  let result = undefined;
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

export default fromContext;

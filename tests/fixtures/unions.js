/** @typedef {'zab'|'rab'|'oof'} Reverse */

/**
 * @constructor
 */
function baz() {}

/**
 * @memberOf baz
 * 
 * @param {string|(string[])} option the option
 * @returns {string|(string[])} the result
 */
function foo(option) {
  return option;
}

/**
 * @memberOf baz
 * 
 * @param {string|(string[])} option the option
 * @returns {string} the result
 */
function bat(option) {
  return option.toString();
}

/**
 * @memberOf baz
 * 
 * @param {string|(string[])} option the option
 * @returns {string[]|string} the result
 */
function bag(option) {
  return option;
}

/**
 * @memberOf baz
 * 
 * @param {'foo'|'bar'|'baz'} option
 * 
 * @returns {string|Reverse} reverse string
 * 
 * @todo this needs to be fixed to support string literals
 */
function bar(option) {
  return option.reverse();
}
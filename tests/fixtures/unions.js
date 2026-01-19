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
 * @param {string|((string|number)[])} option the option
 * @returns {string[]|string} the result
 */
function bag(option) {
  return option;
}

/**
 * @memberOf baz
 * 
 * @param {string|[string, string, string]} option the option
 * @returns {[string, string, string]|string} the result
 */
function bagge(option) {
  return option;
}

/**
 * @memberOf baz
 * 
 * @param {'foo'|'bar'|'baz'} option
 * 
 * @returns {string|Reverse} reverse string
 */
function bar(option) {
  return option.reverse();
}

/**
 * @param {1|2} foo 
 * @param {3|4} bar 
 * @param {...number[]} baz 
 * 
 * @returns {number}
 */
function variadic(foo, bar, ...baz) {
}
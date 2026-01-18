/**
 * @constructor
 * 
 * @see fooStatic
 * @since 1970-01-01
 */
function Bar() {}

/**
 * @memberOf Bar
 */
function foo() {}

/**
 * @memberOf Bar
 * @private
 */
function baz() {}

/**
 * @alias foobarbaz
 */
function baz() {}

/**
 * @memberOf Bar
 * 
 * @static
 */
function fooStatic() {}

/**
 * @memberOf Bar
 * @type {Object}
 */
const testConst = {};

class Es6 {
  constructor() {

  }

  foo () {}

  get bar() {}

  static baz () {}

  static get bat() {}

  /**
   * @returns {Bar}
   */
  static get Bar() {
    return new Bar();
  }
}

/**
 * @category Manual Category
 */
function manual_category() {}
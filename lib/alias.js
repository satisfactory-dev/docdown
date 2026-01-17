'use strict';

/*----------------------------------------------------------------------------*/

/**
 * @memberof docdown
 * @property {string} _name
 * @property {string} _owner
 */
class Alias {
/**
 * The Alias constructor.
 *
 * @param {string} name The alias name.
 * @param {Object} owner The alias owner.
 */
  constructor(name, owner) {
  this._owner = owner;
  this._name = name;
}

/**
 * Extracts the entry's `alias` objects.
 *
 * @param {number} [index] The index of the array value to return.
 * @returns {Array|string} Returns the entry's `alias` objects.
 */
  getAliases(index) {
  return index == null ? [] : undefined;
}

/**
 * Extracts the function call from the owner entry.
 *
 * @returns {string} Returns the function call.
 */
  getCall() {
  return this._owner.getCall();
}

/**
 * Extracts the owner entry's `category` data.
 *
 * @returns {string} Returns the owner entry's `category` data.
 */
  getCategory() {
  return this._owner.getCategory();
}

/**
 * Extracts the owner entry's description.
 *
 * @returns {string} Returns the owner entry's description.
 */
  getDesc() {
  return this._owner.getDesc();
}

/**
 * Extracts the owner entry's `example` data.
 *
 * @returns {string} Returns the owner entry's `example` data.
 */
  getExample() {
  return this._owner.getExample();
}

/**
 * Extracts the entry's hash value for permalinking.
 *
 * @param {string} [style] The hash style.
 * @returns {string} Returns the entry's hash value (without a hash itself).
 */
  getHash(style) {
  return this._owner.getHash(style);
}

/**
 * Resolves the owner entry's line number.
 *
 * @returns {number} Returns the owner entry's line number.
 */
  getLineNumber() {
  return this._owner.getLineNumber();
}

/**
 * Extracts the owner entry's `member` data.
 *
 * @param {number} [index] The index of the array value to return.
 * @returns {Array|string} Returns the owner entry's `member` data.
 */
  getMembers(index) {
  return this._owner.getMembers(index);
}

/**
 * Extracts the owner entry's `name` data.
 *
 * @returns {string} Returns the owner entry's `name` data.
 */
  getName() {
  return this._name;
}

/**
 * Gets the owner entry object.
 *
 * @returns {Object} Returns the owner entry.
 */
  getOwner() {
  return this._owner;
}

/**
 * Extracts the owner entry's `param` data.
 *
 * @param {number} [index] The index of the array value to return.
 * @returns {Array} Returns the owner entry's `param` data.
 */
  getParams(index) {
  return this._owner.getParams(index);
}

/**
 * Extracts the owner entry's `returns` data.
 *
 * @returns {string} Returns the owner entry's `returns` data.
 */
  getReturns() {
  return this._owner.getReturns();
}

/**
 * Extracts the owner entry's `since` data.
 *
 * @returns {string} Returns the owner entry's `since` data.
 */
  getSince() {
  return this._owner.getSince();
}

/**
 * Extracts the owner entry's `type` data.
 *
 * @returns {string} Returns the owner entry's `type` data.
 */
  getType() {
  return this._owner.getType();
}

/**
 * Checks if the entry is an alias.
 *
 * @returns {boolean} Returns `true`.
 */
  isAlias() {
  return true;
}

/**
 * Checks if the owner entry is a constructor.
 *
 * @returns {boolean} Returns `true` if a constructor, else `false`.
 */
  isCtor() {
  return this._owner.isCtor();
}

/**
 * Checks if the entry is a function reference.
 *
 * @returns {boolean} Returns `true` if the entry is a function reference, else `false`.
 */
  isFunction() {
  return this._owner.isFunction();
}

/**
 * Checks if the owner entry is a license.
 *
 * @returns {boolean} Returns `true` if a license, else `false`.
 */
  isLicense() {
  return this._owner.isLicense();
}

/**
 * Checks if the owner entry *is* assigned to a prototype.
 *
 * @returns {boolean} Returns `true` if assigned to a prototype, else `false`.
 */
  isPlugin() {
  return this._owner.isPlugin();
}

/**
 * Checks if the owner entry is private.
 *
 * @returns {boolean} Returns `true` if private, else `false`.
 */
  isPrivate() {
  return this._owner.isPrivate();
}

/**
 * Checks if the owner entry is *not* assigned to a prototype.
 *
 * @returns {boolean} Returns `true` if not assigned to a prototype, else `false`.
 */
  isStatic() {
  return this._owner.isStatic();
}
}

module.exports = Alias;

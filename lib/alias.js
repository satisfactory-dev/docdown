/*!
 * docdown
 * Copyright 2011-2016 John-David Dalton
 * Copyright 2026 SignpostMarv
 * Available under MIT license
 */

class Alias {
  /** @type {Object} */
  #owner;

  /** @type {string} */
  #name;

  /**
   * The Alias constructor.
   *
   * @param {string} name The alias name.
   * @param {Object} owner The alias owner.
   */
  constructor(name, owner) {
    this.#owner = owner;
    this.#name = name;
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
    return this.#owner.getCall();
  }

  /**
   * Extracts the owner entry's `category` data.
   *
   * @returns {string} Returns the owner entry's `category` data.
   */
  getCategory() {
    return this.#owner.getCategory();
  }

  /**
   * Extracts the owner entry's description.
   *
   * @returns {string} Returns the owner entry's description.
   */
  getDesc() {
    return this.#owner.getDesc();
  }

  /**
   * Extracts the owner entry's `example` data.
   *
   * @returns {string} Returns the owner entry's `example` data.
   */
  getExample() {
    return this.#owner.getExample();
  }

  /**
   * Extracts the entry's hash value for permalinking.
   *
   * @param {string} [style] The hash style.
   * @returns {string} Returns the entry's hash value (without a hash itself).
   */
  getHash(style) {
    return this.#owner.getHash(style);
  }

  /**
   * Resolves the owner entry's line number.
   *
   * @returns {number} Returns the owner entry's line number.
   */
  getLineNumber() {
    return this.#owner.getLineNumber();
  }

  /**
   * Extracts the owner entry's `member` data.
   *
   * @param {number} [index] The index of the array value to return.
   * @returns {Array|string} Returns the owner entry's `member` data.
   */
  getMembers(index) {
    return this.#owner.getMembers(index);
  }

  /**
   * Extracts the owner entry's `name` data.
   *
   * @returns {string} Returns the owner entry's `name` data.
   */
  getName() {
    return this.#name;
  }

  /**
   * Gets the owner entry object.
   *
   * @returns {Object} Returns the owner entry.
   */
  getOwner() {
    return this.#owner;
  }

  /**
   * Extracts the owner entry's `param` data.
   *
   * @param {number} [index] The index of the array value to return.
   * @returns {Array} Returns the owner entry's `param` data.
   */
  getParams(index) {
    return this.#owner.getParams(index);
  }

  /**
   * Extracts the owner entry's `returns` data.
   *
   * @returns {string} Returns the owner entry's `returns` data.
   */
  getReturns() {
    return this.#owner.getReturns();
  }

  /**
   * Extracts the owner entry's `since` data.
   *
   * @returns {string} Returns the owner entry's `since` data.
   */
  getSince() {
    return this.#owner.getSince();
  }

  /**
   * Extracts the owner entry's `type` data.
   *
   * @returns {string} Returns the owner entry's `type` data.
   */
  getType() {
    return this.#owner.getType();
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
    return this.#owner.isCtor();
  }

  /**
   * Checks if the entry is a function reference.
   *
   * @returns {boolean} Returns `true` if the entry is a function reference, else `false`.
   */
  isFunction() {
    return this.#owner.isFunction();
  }

  /**
   * Checks if the owner entry is a license.
   *
   * @returns {boolean} Returns `true` if a license, else `false`.
   */
  isLicense() {
    return this.#owner.isLicense();
  }

  /**
   * Checks if the owner entry *is* assigned to a prototype.
   *
   * @returns {boolean} Returns `true` if assigned to a prototype, else `false`.
   */
  isPlugin() {
    return this.#owner.isPlugin();
  }

  /**
   * Checks if the owner entry is private.
   *
   * @returns {boolean} Returns `true` if private, else `false`.
   */
  isPrivate() {
    return this.#owner.isPrivate();
  }

  /**
   * Checks if the owner entry is *not* assigned to a prototype.
   *
   * @returns {boolean} Returns `true` if not assigned to a prototype, else `false`.
   */
  isStatic() {
    return this.#owner.isStatic();
  }
}

export default Alias;

/*!
 * docdown
 * Copyright 2011-2016 John-David Dalton
 * Copyright 2026 SignpostMarv
 * Available under MIT license
 */
'use strict';

var
    Alias = require('./alias.js'),
    util = require('./util.js');

/*----------------------------------------------------------------------------*/

/**
 * @typedef {Object} TagExpression
 * @property {string} type
 * @property {string} name
 */

/**
 * @typedef {Object} Tag
 * @property {TagExpression} [expression]
 * @property {string} type
 * @property {string} name
 */

/**
 * Gets the param type of `tag`.
 *
 * @private
 * @param {Tag} tag The param tag to inspect.
 * @returns {string} Returns the param type.
 */
function getParamType(tag) {
  var expression = tag.expression,
      result = '',
      type = tag.type;

  switch (type) {
    case 'AllLiteral':
      result = '*';
      break;

    case 'NameExpression':
      result = `${tag.name}`;
      break;

    case 'RestType':
      result = '...' + result;
      break;

    case 'TypeApplication':
      expression = undefined;
      result = tag.applications
        .map((tag) => `${getParamType(tag)}[]`)
        .sort(util.compareNatural)
        .join('|')
      ;
      break;

    case 'UnionType':
      result = tag.elements
        .map(getParamType)
        .sort(util.compareNatural)
        .join('|')
      ;
  }
  if (expression) {
    result += getParamType(expression);
  }
  return type == 'UnionType'
    ? ('(' + result + ')')
    : result;
}

/**
 * Gets an `entry` tag by `tagName`.
 *
 * @private
 * @param {Entry} entry The entry to inspect.
 * @param {string} tagName The name of the tag.
 * @returns {null|Tag} Returns the tag.
 */
function getTag(entry, tagName) {
  return entry.parsed.tags.find(({title}) => title == tagName) || null;
}

/**
 * Gets an `entry` tag value by `tagName`.
 *
 * @private
 * @param {Entry} entry The entry to inspect.
 * @param {string} tagName The name of the tag.
 * @returns {string} Returns the tag value.
 */
function getValue(entry, tagName) {
  var parsed = entry.parsed,
      /** @type {string|undefined} */
      result = parsed.description,
      tag = getTag(entry, tagName);

  if (tagName == 'alias') {
    result = tag ? tag.name : '';

    // Doctrine can't parse alias tags containing multiple values so extract
    // them from the error message.
    var error = ((tag ? tag.errors : undefined) || [])[0] || undefined;
    if (error) {
      result += error.replace(/^[^']*'|'[^']*$/g, '');
    }
  }
  else if (tagName == 'type') {
    result = (tag && tag.type) ? tag.type.name : '';
  }
  else if (tagName != 'description') {
    result = tag ? (tag.name || tag.description) : '';
  }
  return tagName == 'example'
    ? `${result || ''}`
    : util.format(result);
}

/**
 * Checks if `entry` has a tag of `tagName`.
 *
 * @private
 * @param {Entry} entry The entry to inspect.
 * @param {string} tagName The name of the tag.
 * @returns {boolean} Returns `true` if the tag is found, else `false`.
 */
function hasTag(entry, tagName) {
  return getTag(entry, tagName) !== null;
}

/**
 * Converts CR+LF line endings to LF.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {string} Returns the converted string.
 */
function normalizeEOL(string) {
  return string.replace(/\r\n/g, '\n');
}

/*----------------------------------------------------------------------------*/

class Entry {
  /**
   * @readonly
   * @type {string}
   */
  entry;

  /**
   * @readonly
   * @type {string}
   */
  lang;

  /**
   * @readonly
   * @type {import('doctrine').Annotation}
   */
  parsed;

  /**
   * The Entry constructor.
   *
   * @param {string} entry The documentation entry to analyse.
   * @param {string} source The source code.
   * @param {string} [lang='js'] The language highlighter used for code examples.
   */
  constructor(entry, source, lang) {
    entry = normalizeEOL(entry);

    this.entry = entry;
    this.lang = lang == null ? 'js' : lang;
    this.parsed = util.parse(entry.replace(/(?:(?:\*)\/\s*.+)$/, '*/'));
    this.source = normalizeEOL(source);
  }

  /**
   * Extracts the documentation entries from source code.
   *
   * @param {string} source The source code.
   * @returns {string[]} Returns the array of entries.
   */
  static getEntries(source) {
    return `${source}`.match(/\/\*\*(?![-!])[\s\S]*?\*\/\s*.+/g) || [];
  }

  /** @type {Array|undefined} */
  _aliases;

  /**
   * Extracts the entry's `alias` objects.
   *
   * @param {number} index The index of the array value to return.
   * @returns {Array|string} Returns the entry's `alias` objects.
   */
  getAliases(index) {
    if (this._aliases === undefined) {
      var owner = this;
      this._aliases = getValue(this, 'alias')
        .split(/,\s*/)
        .filter((maybe) => !!maybe)
        .sort(util.compareNatural)
        .map(function(value) { return new Alias(value, owner); })
      ;
    }
    var result = this._aliases;
    return index === undefined ? result : result[index];
  }

  /**
   * @type {string|undefined}
   */
  #getCall = undefined;

  /**
   * Extracts the function call from the entry.
   *
   * @returns {string} Returns the function call.
   */
  getCall() {
    if (this.#getCall == undefined) {
      var result = util.regexExecIndex(/\*\/\s*(?:function\s+)?([^\s(]+)\s*\(/, this.entry).trim();
      if (!result) {
        result = util.regexExecIndex(/\*\/\s*(.*?)[:=,]/, this.entry).trim();
        result = /['"]$/.test(result)
          ? result.replace(/^['"]*([^'"].*[^'"])['"]*$/, '$1')
          : result.split('.').pop().split(/^(?:const|let|var) /).pop();
      }
      var name = getValue(this, 'name') || result;
      if (!this.isFunction()) {
        return this.#getCall = name;
      }
      var params = this.getParams();
      result = [result];

      // Compile the function call syntax.
      params.forEach(function(param) {
        var paramValue = param[1],
            parentParam = util.regexExecIndex(/\w+(?=\.[\w.]+)/, paramValue, 0);

        var parentIndex = params.findIndex(function(param) {
          return param[1].replace(/^[[\]]*([^[\]].*[^[\]])[[\]]*$/, '$1').split(/\s*=/)[0] == parentParam;
        });

        // Skip params that are properties of other params (e.g. `options.leading`).
        if (((params[parentIndex] || [])[0] || undefined) != 'Object') {
          result.push(paramValue);
        }
      });

      // Format the function call.
      this.#getCall = name + '(' + result.slice(1).join(', ') + ')';
    }

    return this.#getCall;
  }

  /** @type {string|undefined} */
  #getCategory;

  /**
   * Extracts the entry's `category` data.
   *
   * @returns {string} Returns the entry's `category` data.
   */
  getCategory() {
    if (this.#getCategory == undefined) {
      var result = getValue(this, 'category');
      this.#getCategory = result || (this.getType() == 'Function' ? 'Methods' : 'Properties');
    }

    return this.#getCategory;
  }

  /** @type {string|undefined} */
  #getDesc;

  /**
   * Extracts the entry's description.
   *
   * @returns {string} Returns the entry's description.
   */
  getDesc() {
    if (this.#getDesc == undefined) {
      var type = this.getType(),
          result = getValue(this, 'description');

      this.#getDesc = (!result || type == 'Function' || type == 'unknown')
        ? result
        : ('(' + util.deparenthesize(type.replace(/\|/g, ', ')) + '): ' + result);
    }

    return this.#getDesc;
  }

  /** @type {string|undefined} */
  #getExample;

  /**
   * Extracts the entry's `example` data.
   *
   * @returns {string} Returns the entry's `example` data.
   */
  getExample() {
    if (this.#getExample == undefined) {
      var result = getValue(this, 'example');
      this.#getExample = result && ('```' + this.lang + '\n' + result + '\n```');
    }

    return this.#getExample;
  }

  /** @type {string|undefined} */
  #getHash;

  /**
   * Extracts the entry's hash value for permalinking.
   *
   * @param {string} [style] The hash style.
   * @returns {string} Returns the entry's hash value (without a hash itself).
   */
  getHash(style) {
    if (this.#getHash == undefined) {
      var result = `${this.getMembers(0) || ''}`;
      if (style == 'github') {
        if (result) {
          result += this.isPlugin() ? 'prototype' : '';
        }
        result += this.getCall();

        return this.#getHash = result
          .replace(/[\\.=|'"(){}\[\]\t ]/g, '')
          .replace(/[#,]+/g, '-')
          .toLowerCase();
      }
      if (result) {
        result += '-' + (this.isPlugin() ? 'prototype-' : '');
      }
      result += this.isAlias() ? this.getOwner().getName() : this.getName();

      return this.#getHash = result
        .replace(/\./g, '-')
        .replace(/^_-/, '');
    }

    return this.#getHash;
  }

  /** @type {number|undefined} */
  #getLineNumber;

  /**
   * Resolves the entry's line number.
   *
   * @returns {number} Returns the entry's line number.
   */
  getLineNumber() {
    if (this.#getLineNumber == undefined) {
      var lines = this.source
        .slice(0, this.source.indexOf(this.entry) + this.entry.length)
        .match(/\n/g)
        .slice(1);

      // Offset by 2 because the first line number is before a line break and the
      // last line doesn't include a line break.
      this.#getLineNumber = lines.length + 2;
    }

    return this.#getLineNumber;
  }

  /** @type {Array|undefined} */
  _members;

  /**
   * Extracts the entry's `member` data.
   *
   * @param {number} [index] The index of the array value to return.
   * @returns {Array|string|undefined} Returns the entry's `member` data.
   */
  getMembers(index) {
    if (this._members === undefined) {
      this._members = (getValue(this, 'member') || getValue(this, 'memberOf'))
        .split(/,\s*/)
        .filter((maybe) => !!maybe)
        .sort(util.compareNatural)
      ;
    }
    var result = this._members;
    return index === undefined ? result : result[index];
  }

  /** @type {string|undefined} */
  #getName;

  /**
   * Extracts the entry's `name` data.
   *
   * @returns {string} Returns the entry's `name` data.
   */
  getName() {
    if (this.#getName == undefined) {
      this.#getName = hasTag(this, 'name')
        ? getValue(this, 'name')
        : `${this.getCall().split('(')[0]}`;
    }

    return this.#getName;
  }

  /** @type {Array|undefined} */
  _params;

  /**
   * Extracts the entry's `param` data.
   *
   * @param {number} [index] The index of the array value to return.
   * @returns {Array} Returns the entry's `param` data.
   */
  getParams(index) {
    if (this._params === undefined) {
      this._params = this.parsed.tags
        .filter(({title, name}) => title == 'param' && name)
        .map(function(tag) {
          var defaultValue = tag['default'],
              desc = util.format(tag.description),
              name = `${tag.name}`,
              type = getParamType(tag.type);

          if (defaultValue != null) {
            name += '=' + defaultValue;
          }
          if (tag.type.type == 'OptionalType') {
            name = '[' + name + ']';
          }
          return [type, name,  desc];
        });
    }

    var result = this._params;

    return index === undefined ? result : result[index];
  }

  /** @type {Array|undefined} */
  #getRelated;

  /**
   * Extracts the entry's `see` data.
   *
   * @returns {array} Returns the entry's `see` data as links.
   */
  getRelated() {
    if (this.#getRelated == undefined) {
      var relatedValues = getValue(this, 'see');
      if (relatedValues && relatedValues.trim().length > 0) {
        var relatedItems = relatedValues.split(',').map((relatedItem) => relatedItem.trim());
        this.#getRelated = relatedItems.map((relatedItem) => '[' + relatedItem + '](#' + relatedItem + ')');
      } else {
        this.#getRelated = [];
      }
    }

    return this.#getRelated;
  }

  /** @type {Array|undefined} */
  #getReturns;

  /**
   * Extracts the entry's `returns` data.
   *
   * @returns {array} Returns the entry's `returns` data.
   */
  getReturns() {
    if (this.#getReturns == undefined) {
      var tag = getTag(this, 'returns');
      var unionReturn = (tag && 'type' in tag) ? getParamType(tag.type) : undefined;
      var
        desc = `${(tag ? tag.description : undefined) || ''}`,
        type = `${((tag && tag.type) ? tag.type.name : undefined) || ''}` || unionReturn || '*';

      this.#getReturns = tag ? [type, desc] : [];
    }

    return this.#getReturns;
  }

  /** @type {string|undefined} */
  #getSince;

  /**
   * Extracts the entry's `since` data.
   *
   * @returns {string} Returns the entry's `since` data.
   */
  getSince() {
    if (this.#getSince == undefined) {
      this.#getSince = getValue(this, 'since');
    }

    return this.#getSince;
  }

  /** @type {string|undefined} */
  #getType;

  /**
   * Extracts the entry's `type` data.
   *
   * @returns {string} Returns the entry's `type` data.
   */
  getType() {
    if (this.#getType == undefined) {
      var result = getValue(this, 'type');
      if (!result) {
        return this.#getType = this.isFunction() ? 'Function' : 'unknown';
      }

      this.#getType = /^(?:array|function|object|regexp)$/.test(result)
        ? `${result[0].toUpperCase()}${result.substring(1)}`
        : result;
    }

    return this.#getType;
  }

  /**
   * Checks if the entry is an alias.
   *
   * @type {Function}
   * @returns {boolean} Returns `false`.
   */
  isAlias() {
    return false;
  }

  /** @type {boolean|undefined} */
  #isCtor;

  /**
   * Checks if the entry is a constructor.
   *
   * @returns {boolean} Returns `true` if a constructor, else `false`.
   */
  isCtor() {
    if (this.#isCtor == undefined) {
      this.#isCtor = hasTag(this, 'constructor');

    }

    return this.#isCtor;
  }

  /** @type {boolean|undefined} */
  #isFunction;

  /**
   * Checks if the entry is a function reference.
   *
   * @returns {boolean} Returns `true` if the entry is a function reference, else `false`.
   */
  isFunction() {
    if (this.#isFunction == undefined) {
      this.#isFunction = !!(
        this.isCtor() ||
        this.getParams().length ||
        this.getReturns().length ||
        hasTag(this, 'function') ||
        /\*\/\s*(?:function\s+)?[^\s(]+\s*\(/.test(this.entry)
      );
    }

    return this.#isFunction;
  }

  /** @type {boolean|undefined} */
  #isLicense;

  /**
   * Checks if the entry is a license.
   *
   * @returns {boolean} Returns `true` if a license, else `false`.
   */
  isLicense() {
    if (this.#isLicense == undefined) {
      this.#isLicense = hasTag(this, 'license');
    }

    return this.#isLicense;
  }

  /** @type {boolean|undefined} */
  #isPlugin;

  /**
   * Checks if the entry *is* assigned to a prototype.
   *
   * @returns {boolean} Returns `true` if assigned to a prototype, else `false`.
   */
  isPlugin() {
    if (this.#isPlugin == undefined) {
      this.#isPlugin = (
        !this.isCtor() &&
        !this.isPrivate() &&
        !this.isStatic()
      );
    }

    return this.#isPlugin;
  }

  /** @type {boolean|undefined} */
  #isPrivate;

  /**
   * Checks if the entry is private.
   *
   * @returns {boolean} Returns `true` if private, else `false`.
   */
  isPrivate() {
    if (this.#isPrivate == undefined) {
      this.#isPrivate = (
        this.isLicense() ||
        hasTag(this, 'private') ||
        this.parsed.tags.length < 1
      );
    }

    return this.#isPrivate;
  }

  /** @type {boolean|undefined} */
  #isStatic;

  /**
   * Checks if the entry is *not* assigned to a prototype.
   *
   * @returns {boolean} Returns `true` if not assigned to a prototype, else `false`.
   */
  isStatic() {
    if (this.#isStatic == undefined) {
      var isPublic = !this.isPrivate(),
          result = isPublic && hasTag(this, 'static');

      // Get the result in cases where it isn't explicitly stated.
      if (isPublic && !result) {
        const parts = `${this.getMembers(0) || ''}`.split(/[#.]/);
        var parent = parts[parts.length - 1];
        if (!parent) {
          return this.#isStatic = true;
        }
        var source = this.source;
        Entry.getEntries(source).forEach(function(entry) {
          entry = new Entry(entry, source);
          if (entry.getName() == parent) {
            result = !entry.isCtor();
            return false;
          }
        });
      }

      return this.#isStatic = result;
    }

    return this.#isStatic;
  }
}

module.exports = Entry;

# docdown <sup>f96c83273a56587be10ea7a03caea4d3d6e6e7f2</sup>

<!-- div class="toc-container" -->

<!-- div -->

## `deparenthesize`
* <a href="#deparenthesizestr">`deparenthesize`</a>

<!-- /div -->

<!-- div -->

## `regexExecIndex`
* <a href="#regexexecindexregex-string-index">`regexExecIndex`</a>

<!-- /div -->

<!-- div -->

## `util.prototype`
* <a href="#utilprototypecomparenaturalvalue-other">`util.prototype.compareNatural`</a>
* <a href="#utilprototypeformatstring">`util.prototype.format`</a>
* <a href="#utilprototypeparsecomment">`util.prototype.parse`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `deparenthesize`

<!-- div -->

<h3 id="deparenthesizestr"><code>deparenthesize(str)</code></h3>
https://github.com/satisfactory-dev/docdown/blob/f96c83273a56587be10ea7a03caea4d3d6e6e7f2/lib/util.js#L105

Trims leading and trailing parentheses from a string

#### Arguments
1. `str` *(string)*: <br>
<br>

#### Returns
*(string)*:

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `regexExecIndex`

<!-- div -->

<h3 id="regexexecindexregex-string-index"><code>regexExecIndex(regex, string, [index])</code></h3>
https://github.com/satisfactory-dev/docdown/blob/f96c83273a56587be10ea7a03caea4d3d6e6e7f2/lib/util.js#L116

Get the specified index of RegExpExecArray or an empty string

#### Arguments
1. `regex` *(RegExp)*: regex to exec against
2. `string` *(string)*: string to exec against
3. `[index]` *(number)*: defaults to `1`

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `util.prototype`

<!-- div -->

<h3 id="utilprototypecomparenaturalvalue-other"><code>util.prototype.compareNatural(value, other)</code></h3>
https://github.com/satisfactory-dev/docdown/blob/f96c83273a56587be10ea7a03caea4d3d6e6e7f2/lib/util.js#L27

The `Array#sort` comparator to produce a [natural sort order](https://en.wikipedia.org/wiki/Natural_sort_order).

#### Arguments
1. `value` *(string)*: The value to compare.
2. `other` *(string)*: The other value to compare.

#### Returns
*(-1|0|1)*: Returns the sort order indicator for `value`.

---

<!-- /div -->

<!-- div -->

<h3 id="utilprototypeformatstring"><code>util.prototype.format(string)</code></h3>
https://github.com/satisfactory-dev/docdown/blob/f96c83273a56587be10ea7a03caea4d3d6e6e7f2/lib/util.js#L55

Performs common string formatting operations.

#### Arguments
1. `string` *(string|undefined)*: The string to format.

#### Returns
*(string)*: Returns the formatted string.

---

<!-- /div -->

<!-- div -->

<h3 id="utilprototypeparsecomment"><code>util.prototype.parse(comment)</code></h3>
https://github.com/satisfactory-dev/docdown/blob/f96c83273a56587be10ea7a03caea4d3d6e6e7f2/lib/util.js#L90

Parses the JSDoc `comment` into an object.

#### Arguments
1. `comment` *(string)*: The comment to parse.

#### Returns
*(Object)*: Returns the parsed object.

---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #deparenthesize "Jump back to the TOC."

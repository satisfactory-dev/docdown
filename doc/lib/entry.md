# docdown <sup>e99d1f1d18470874651f75c515a5840975baad41</sup>

<!-- div class="toc-container" -->

<!-- div -->

## `#getCall`
* <a href="#-getcall">`#getCall`</a>

<!-- /div -->

<!-- div -->

## `constructor`
* <a href="#constructorentry-source-langjs">`constructor`</a>

<!-- /div -->

<!-- div -->

## `getAliases`
* <a href="#getaliasesindex">`getAliases`</a>

<!-- /div -->

<!-- div -->

## `getCall`
* <a href="#getcall">`getCall`</a>

<!-- /div -->

<!-- div -->

## `getCategory`
* <a href="#getcategory">`getCategory`</a>

<!-- /div -->

<!-- div -->

## `getDesc`
* <a href="#getdesc">`getDesc`</a>

<!-- /div -->

<!-- div -->

## `getExample`
* <a href="#getexample">`getExample`</a>

<!-- /div -->

<!-- div -->

## `getHash`
* <a href="#gethashstyle">`getHash`</a>

<!-- /div -->

<!-- div -->

## `getLineNumber`
* <a href="#getlinenumber">`getLineNumber`</a>

<!-- /div -->

<!-- div -->

## `getMembers`
* <a href="#getmembersindex">`getMembers`</a>

<!-- /div -->

<!-- div -->

## `getName`
* <a href="#getname">`getName`</a>

<!-- /div -->

<!-- div -->

## `getParams`
* <a href="#getparamsindex">`getParams`</a>

<!-- /div -->

<!-- div -->

## `getRelated`
* <a href="#getrelated">`getRelated`</a>

<!-- /div -->

<!-- div -->

## `getReturns`
* <a href="#getreturns">`getReturns`</a>

<!-- /div -->

<!-- div -->

## `getSince`
* <a href="#getsince">`getSince`</a>

<!-- /div -->

<!-- div -->

## `getType`
* <a href="#gettype">`getType`</a>

<!-- /div -->

<!-- div -->

## `isAlias`
* <a href="#isalias">`isAlias`</a>

<!-- /div -->

<!-- div -->

## `isCtor`
* <a href="#isctor">`isCtor`</a>

<!-- /div -->

<!-- div -->

## `isFunction`
* <a href="#isfunction">`isFunction`</a>

<!-- /div -->

<!-- div -->

## `isLicense`
* <a href="#islicense">`isLicense`</a>

<!-- /div -->

<!-- div -->

## `isPlugin`
* <a href="#isplugin">`isPlugin`</a>

<!-- /div -->

<!-- div -->

## `isPrivate`
* <a href="#isprivate">`isPrivate`</a>

<!-- /div -->

<!-- div -->

## `isStatic`
* <a href="#isstatic">`isStatic`</a>

<!-- /div -->

<!-- div -->

## `result`
* <a href="#result">`result`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `#getCall`

<!-- div -->

<h3 id="-getcall"><code>#getCall</code></h3>
https://github.com/satisfactory-dev/docdown/blob/e99d1f1d18470874651f75c515a5840975baad41/lib/entry.js#L218



---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `constructor`

<!-- div -->

<h3 id="constructorentry-source-langjs"><code>constructor(entry, source, [lang='js'])</code></h3>
https://github.com/satisfactory-dev/docdown/blob/e99d1f1d18470874651f75c515a5840975baad41/lib/entry.js#L173

The Entry constructor.

#### Arguments
1. `entry` *(string)*: The documentation entry to analyse.
2. `source` *(string)*: The source code.
3. `[lang='js']` *(string)*: The language highlighter used for code examples.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `getAliases`

<!-- div -->

<h3 id="getaliasesindex"><code>getAliases(index)</code></h3>
https://github.com/satisfactory-dev/docdown/blob/e99d1f1d18470874651f75c515a5840975baad41/lib/entry.js#L201

Extracts the entry's `alias` objects.

#### Arguments
1. `index` *(number)*: The index of the array value to return.

#### Returns
*(Array|string)*: Returns the entry's `alias` objects.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `getCall`

<!-- div -->

<h3 id="getcall"><code>getCall()</code></h3>
https://github.com/satisfactory-dev/docdown/blob/e99d1f1d18470874651f75c515a5840975baad41/lib/entry.js#L225

Extracts the function call from the entry.

#### Returns
*(string)*: Returns the function call.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `getCategory`

<!-- div -->

<h3 id="getcategory"><code>getCategory()</code></h3>
https://github.com/satisfactory-dev/docdown/blob/e99d1f1d18470874651f75c515a5840975baad41/lib/entry.js#L271

Extracts the entry's `category` data.

#### Returns
*(string)*: Returns the entry's `category` data.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `getDesc`

<!-- div -->

<h3 id="getdesc"><code>getDesc()</code></h3>
https://github.com/satisfactory-dev/docdown/blob/e99d1f1d18470874651f75c515a5840975baad41/lib/entry.js#L288

Extracts the entry's description.

#### Returns
*(string)*: Returns the entry's description.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `getExample`

<!-- div -->

<h3 id="getexample"><code>getExample()</code></h3>
https://github.com/satisfactory-dev/docdown/blob/e99d1f1d18470874651f75c515a5840975baad41/lib/entry.js#L309

Extracts the entry's `example` data.

#### Returns
*(string)*: Returns the entry's `example` data.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `getHash`

<!-- div -->

<h3 id="gethashstyle"><code>getHash([style])</code></h3>
https://github.com/satisfactory-dev/docdown/blob/e99d1f1d18470874651f75c515a5840975baad41/lib/entry.js#L327

Extracts the entry's hash value for permalinking.

#### Arguments
1. `[style]` *(string)*: The hash style.

#### Returns
*(string): Returns the entry's hash value (without a hash itself)*.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `getLineNumber`

<!-- div -->

<h3 id="getlinenumber"><code>getLineNumber()</code></h3>
https://github.com/satisfactory-dev/docdown/blob/e99d1f1d18470874651f75c515a5840975baad41/lib/entry.js#L362

Resolves the entry's line number.

#### Returns
*(number)*: Returns the entry's line number.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `getMembers`

<!-- div -->

<h3 id="getmembersindex"><code>getMembers([index])</code></h3>
https://github.com/satisfactory-dev/docdown/blob/e99d1f1d18470874651f75c515a5840975baad41/lib/entry.js#L386

Extracts the entry's `member` data.

#### Arguments
1. `[index]` *(number)*: The index of the array value to return.

#### Returns
*(Array|string|undefined)*: Returns the entry's `member` data.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `getName`

<!-- div -->

<h3 id="getname"><code>getName()</code></h3>
https://github.com/satisfactory-dev/docdown/blob/e99d1f1d18470874651f75c515a5840975baad41/lib/entry.js#L406

Extracts the entry's `name` data.

#### Returns
*(string)*: Returns the entry's `name` data.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `getParams`

<!-- div -->

<h3 id="getparamsindex"><code>getParams([index])</code></h3>
https://github.com/satisfactory-dev/docdown/blob/e99d1f1d18470874651f75c515a5840975baad41/lib/entry.js#L425

Extracts the entry's `param` data.

#### Arguments
1. `[index]` *(number)*: The index of the array value to return.

#### Returns
*(Array)*: Returns the entry's `param` data.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `getRelated`

<!-- div -->

<h3 id="getrelated"><code>getRelated()</code></h3>
https://github.com/satisfactory-dev/docdown/blob/e99d1f1d18470874651f75c515a5840975baad41/lib/entry.js#L458

Extracts the entry's `see` data.

#### Returns
*(array)*: Returns the entry's `see` data as links.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `getReturns`

<!-- div -->

<h3 id="getreturns"><code>getReturns()</code></h3>
https://github.com/satisfactory-dev/docdown/blob/e99d1f1d18470874651f75c515a5840975baad41/lib/entry.js#L480

Extracts the entry's `returns` data.

#### Returns
*(array)*: Returns the entry's `returns` data.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `getSince`

<!-- div -->

<h3 id="getsince"><code>getSince()</code></h3>
https://github.com/satisfactory-dev/docdown/blob/e99d1f1d18470874651f75c515a5840975baad41/lib/entry.js#L502

Extracts the entry's `since` data.

#### Returns
*(string)*: Returns the entry's `since` data.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `getType`

<!-- div -->

<h3 id="gettype"><code>getType()</code></h3>
https://github.com/satisfactory-dev/docdown/blob/e99d1f1d18470874651f75c515a5840975baad41/lib/entry.js#L518

Extracts the entry's `type` data.

#### Returns
*(string)*: Returns the entry's `type` data.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `isAlias`

<!-- div -->

<h3 id="isalias"><code>isAlias()</code></h3>
https://github.com/satisfactory-dev/docdown/blob/e99d1f1d18470874651f75c515a5840975baad41/lib/entry.js#L539

Checks if the entry is an alias.

#### Returns
*(boolean)*: Returns `false`.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `isCtor`

<!-- div -->

<h3 id="isctor"><code>isCtor()</code></h3>
https://github.com/satisfactory-dev/docdown/blob/e99d1f1d18470874651f75c515a5840975baad41/lib/entry.js#L551

Checks if the entry is a constructor.

#### Returns
*(boolean)*: Returns `true` if a constructor, else `false`.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `isFunction`

<!-- div -->

<h3 id="isfunction"><code>isFunction()</code></h3>
https://github.com/satisfactory-dev/docdown/blob/e99d1f1d18470874651f75c515a5840975baad41/lib/entry.js#L568

Checks if the entry is a function reference.

#### Returns
*(boolean)*: Returns `true` if the entry is a function reference, else `false`.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `isLicense`

<!-- div -->

<h3 id="islicense"><code>isLicense()</code></h3>
https://github.com/satisfactory-dev/docdown/blob/e99d1f1d18470874651f75c515a5840975baad41/lib/entry.js#L590

Checks if the entry is a license.

#### Returns
*(boolean)*: Returns `true` if a license, else `false`.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `isPlugin`

<!-- div -->

<h3 id="isplugin"><code>isPlugin()</code></h3>
https://github.com/satisfactory-dev/docdown/blob/e99d1f1d18470874651f75c515a5840975baad41/lib/entry.js#L606

Checks if the entry *is* assigned to a prototype.

#### Returns
*(boolean)*: Returns `true` if assigned to a prototype, else `false`.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `isPrivate`

<!-- div -->

<h3 id="isprivate"><code>isPrivate()</code></h3>
https://github.com/satisfactory-dev/docdown/blob/e99d1f1d18470874651f75c515a5840975baad41/lib/entry.js#L626

Checks if the entry is private.

#### Returns
*(boolean)*: Returns `true` if private, else `false`.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `isStatic`

<!-- div -->

<h3 id="isstatic"><code>isStatic()</code></h3>
https://github.com/satisfactory-dev/docdown/blob/e99d1f1d18470874651f75c515a5840975baad41/lib/entry.js#L646

Checks if the entry is *not* assigned to a prototype.

#### Returns
*(boolean)*: Returns `true` if not assigned to a prototype, else `false`.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `result`

<!-- div -->

<h3 id="result"><code>result</code></h3>
https://github.com/satisfactory-dev/docdown/blob/e99d1f1d18470874651f75c515a5840975baad41/lib/entry.js#L105



---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: ##getcall "Jump back to the TOC."

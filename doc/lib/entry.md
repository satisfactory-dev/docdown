# docdown <sup>feef7467de079667731d6beab0c2d02ed5613e34</sup>

<!-- div class="toc-container" -->

<!-- div -->

## `Entry`
* <a href="#entryentry-source-langjs">`Entry`</a>
* <a href="#entrygetentriessource">`Entry.getEntries`</a>

<!-- /div -->

<!-- div -->

## `Entry.prototype`
* <a href="#entryprototypegetaliasesindex">`Entry.prototype.getAliases`</a>
* <a href="#entryprototypegetcall">`Entry.prototype.getCall`</a>
* <a href="#entryprototypegetcategory">`Entry.prototype.getCategory`</a>
* <a href="#entryprototypegetdesc">`Entry.prototype.getDesc`</a>
* <a href="#entryprototypegetexample">`Entry.prototype.getExample`</a>
* <a href="#entryprototypegethashstyle">`Entry.prototype.getHash`</a>
* <a href="#entryprototypegetlinenumber">`Entry.prototype.getLineNumber`</a>
* <a href="#entryprototypegetmembersindex">`Entry.prototype.getMembers`</a>
* <a href="#entryprototypegetname">`Entry.prototype.getName`</a>
* <a href="#entryprototypegetparamsindex">`Entry.prototype.getParams`</a>
* <a href="#entryprototypegetrelated">`Entry.prototype.getRelated`</a>
* <a href="#entryprototypegetreturns">`Entry.prototype.getReturns`</a>
* <a href="#entryprototypegetsince">`Entry.prototype.getSince`</a>
* <a href="#entryprototypegettype">`Entry.prototype.getType`</a>
* <a href="#entryprototypeisalias">`Entry.prototype.isAlias`</a>
* <a href="#entryprototypeisctor">`Entry.prototype.isCtor`</a>
* <a href="#entryprototypeisfunction">`Entry.prototype.isFunction`</a>
* <a href="#entryprototypeislicense">`Entry.prototype.isLicense`</a>
* <a href="#entryprototypeisplugin">`Entry.prototype.isPlugin`</a>
* <a href="#entryprototypeisprivate">`Entry.prototype.isPrivate`</a>
* <a href="#entryprototypeisstatic">`Entry.prototype.isStatic`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `Entry`

<!-- div -->

<h3 id="entryentry-source-langjs"><code>Entry(entry, source, [lang='js'])</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/entry.js#L144 "View in source") [&#x24C9;][1]

The Entry constructor.

#### Arguments
1. `entry` *(string)*: The documentation entry to analyse.
2. `source` *(string)*: The source code.
3. `[lang='js']` *(string)*: The language highlighter used for code examples.

---

<!-- /div -->

<!-- div -->

<h3 id="entrygetentriessource"><code>Entry.getEntries(source)</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/entry.js#L180 "View in source") [&#x24C9;][1]

Extracts the documentation entries from source code.

#### Arguments
1. `source` *(string)*: The source code.

#### Returns
*(Array)*: Returns the array of entries.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Entry.prototype`

<!-- div -->

<h3 id="entryprototypegetaliasesindex"><code>Entry.prototype.getAliases(index)</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/entry.js#L191 "View in source") [&#x24C9;][1]

Extracts the entry's `alias` objects.

#### Arguments
1. `index` *(number)*: The index of the array value to return.

#### Returns
*(&#42;)*: Returns the entry's `alias` objects.

---

<!-- /div -->

<!-- div -->

<h3 id="entryprototypegetcall"><code>Entry.prototype.getCall()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/entry.js#L211 "View in source") [&#x24C9;][1]

Extracts the function call from the entry.

#### Returns
*(string)*: Returns the function call.

---

<!-- /div -->

<!-- div -->

<h3 id="entryprototypegetcategory"><code>Entry.prototype.getCategory()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/entry.js#L251 "View in source") [&#x24C9;][1]

Extracts the entry's `category` data.

#### Returns
*(string)*: Returns the entry's `category` data.

---

<!-- /div -->

<!-- div -->

<h3 id="entryprototypegetdesc"><code>Entry.prototype.getDesc()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/entry.js#L262 "View in source") [&#x24C9;][1]

Extracts the entry's description.

#### Returns
*(string)*: Returns the entry's description.

---

<!-- /div -->

<!-- div -->

<h3 id="entryprototypegetexample"><code>Entry.prototype.getExample()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/entry.js#L277 "View in source") [&#x24C9;][1]

Extracts the entry's `example` data.

#### Returns
*(string)*: Returns the entry's `example` data.

---

<!-- /div -->

<!-- div -->

<h3 id="entryprototypegethashstyle"><code>Entry.prototype.getHash([style])</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/entry.js#L289 "View in source") [&#x24C9;][1]

Extracts the entry's hash value for permalinking.

#### Arguments
1. `[style]` *(string)*: The hash style.

#### Returns
*(string): Returns the entry's hash value (without a hash itself)*.

---

<!-- /div -->

<!-- div -->

<h3 id="entryprototypegetlinenumber"><code>Entry.prototype.getLineNumber()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/entry.js#L316 "View in source") [&#x24C9;][1]

Resolves the entry's line number.

#### Returns
*(number)*: Returns the entry's line number.

---

<!-- /div -->

<!-- div -->

<h3 id="entryprototypegetmembersindex"><code>Entry.prototype.getMembers([index])</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/entry.js#L334 "View in source") [&#x24C9;][1]

Extracts the entry's `member` data.

#### Arguments
1. `[index]` *(number)*: The index of the array value to return.

#### Returns
*(&#42;)*: Returns the entry's `member` data.

---

<!-- /div -->

<!-- div -->

<h3 id="entryprototypegetname"><code>Entry.prototype.getName()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/entry.js#L352 "View in source") [&#x24C9;][1]

Extracts the entry's `name` data.

#### Returns
*(string)*: Returns the entry's `name` data.

---

<!-- /div -->

<!-- div -->

<h3 id="entryprototypegetparamsindex"><code>Entry.prototype.getParams([index])</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/entry.js#L365 "View in source") [&#x24C9;][1]

Extracts the entry's `param` data.

#### Arguments
1. `[index]` *(number)*: The index of the array value to return.

#### Returns
*(Array)*: Returns the entry's `param` data.

---

<!-- /div -->

<!-- div -->

<h3 id="entryprototypegetrelated"><code>Entry.prototype.getRelated()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/entry.js#L396 "View in source") [&#x24C9;][1]

Extracts the entry's `see` data.

#### Returns
*(array)*: Returns the entry's `see` data as links.

---

<!-- /div -->

<!-- div -->

<h3 id="entryprototypegetreturns"><code>Entry.prototype.getReturns()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/entry.js#L412 "View in source") [&#x24C9;][1]

Extracts the entry's `returns` data.

#### Returns
*(array)*: Returns the entry's `returns` data.

---

<!-- /div -->

<!-- div -->

<h3 id="entryprototypegetsince"><code>Entry.prototype.getSince()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/entry.js#L426 "View in source") [&#x24C9;][1]

Extracts the entry's `since` data.

#### Returns
*(string)*: Returns the entry's `since` data.

---

<!-- /div -->

<!-- div -->

<h3 id="entryprototypegettype"><code>Entry.prototype.getType()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/entry.js#L436 "View in source") [&#x24C9;][1]

Extracts the entry's `type` data.

#### Returns
*(string)*: Returns the entry's `type` data.

---

<!-- /div -->

<!-- div -->

<h3 id="entryprototypeisalias"><code>Entry.prototype.isAlias()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/entry.js#L453 "View in source") [&#x24C9;][1]

Checks if the entry is an alias.

#### Returns
*(boolean)*: Returns `false`.

---

<!-- /div -->

<!-- div -->

<h3 id="entryprototypeisctor"><code>Entry.prototype.isCtor()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/entry.js#L461 "View in source") [&#x24C9;][1]

Checks if the entry is a constructor.

#### Returns
*(boolean)*: Returns `true` if a constructor, else `false`.

---

<!-- /div -->

<!-- div -->

<h3 id="entryprototypeisfunction"><code>Entry.prototype.isFunction()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/entry.js#L471 "View in source") [&#x24C9;][1]

Checks if the entry is a function reference.

#### Returns
*(boolean)*: Returns `true` if the entry is a function reference, else `false`.

---

<!-- /div -->

<!-- div -->

<h3 id="entryprototypeislicense"><code>Entry.prototype.isLicense()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/entry.js#L487 "View in source") [&#x24C9;][1]

Checks if the entry is a license.

#### Returns
*(boolean)*: Returns `true` if a license, else `false`.

---

<!-- /div -->

<!-- div -->

<h3 id="entryprototypeisplugin"><code>Entry.prototype.isPlugin()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/entry.js#L497 "View in source") [&#x24C9;][1]

Checks if the entry *is* assigned to a prototype.

#### Returns
*(boolean)*: Returns `true` if assigned to a prototype, else `false`.

---

<!-- /div -->

<!-- div -->

<h3 id="entryprototypeisprivate"><code>Entry.prototype.isPrivate()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/entry.js#L511 "View in source") [&#x24C9;][1]

Checks if the entry is private.

#### Returns
*(boolean)*: Returns `true` if private, else `false`.

---

<!-- /div -->

<!-- div -->

<h3 id="entryprototypeisstatic"><code>Entry.prototype.isStatic()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/entry.js#L525 "View in source") [&#x24C9;][1]

Checks if the entry is *not* assigned to a prototype.

#### Returns
*(boolean)*: Returns `true` if not assigned to a prototype, else `false`.

---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #entry "Jump back to the TOC."

# docdown <sup>feef7467de079667731d6beab0c2d02ed5613e34</sup>

<!-- div class="toc-container" -->

<!-- div -->

## `Alias`
* <a href="#aliasname-owner">`Alias`</a>

<!-- /div -->

<!-- div -->

## `Alias.prototype`
* <a href="#aliasprototypegetaliasesindex">`Alias.prototype.getAliases`</a>
* <a href="#aliasprototypegetcall">`Alias.prototype.getCall`</a>
* <a href="#aliasprototypegetcategory">`Alias.prototype.getCategory`</a>
* <a href="#aliasprototypegetdesc">`Alias.prototype.getDesc`</a>
* <a href="#aliasprototypegetexample">`Alias.prototype.getExample`</a>
* <a href="#aliasprototypegethashstyle">`Alias.prototype.getHash`</a>
* <a href="#aliasprototypegetlinenumber">`Alias.prototype.getLineNumber`</a>
* <a href="#aliasprototypegetmembersindex">`Alias.prototype.getMembers`</a>
* <a href="#aliasprototypegetname">`Alias.prototype.getName`</a>
* <a href="#aliasprototypegetowner">`Alias.prototype.getOwner`</a>
* <a href="#aliasprototypegetparamsindex">`Alias.prototype.getParams`</a>
* <a href="#aliasprototypegetreturns">`Alias.prototype.getReturns`</a>
* <a href="#aliasprototypegetsince">`Alias.prototype.getSince`</a>
* <a href="#aliasprototypegettype">`Alias.prototype.getType`</a>
* <a href="#aliasprototypeisalias">`Alias.prototype.isAlias`</a>
* <a href="#aliasprototypeisctor">`Alias.prototype.isCtor`</a>
* <a href="#aliasprototypeisfunction">`Alias.prototype.isFunction`</a>
* <a href="#aliasprototypeislicense">`Alias.prototype.isLicense`</a>
* <a href="#aliasprototypeisplugin">`Alias.prototype.isPlugin`</a>
* <a href="#aliasprototypeisprivate">`Alias.prototype.isPrivate`</a>
* <a href="#aliasprototypeisstatic">`Alias.prototype.isStatic`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `Alias`

<!-- div -->

<h3 id="aliasname-owner"><code>Alias(name, owner)</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/alias.js#L14 "View in source") [&#x24C9;][1]

The Alias constructor.

#### Arguments
1. `name` *(string)*: The alias name.
2. `owner` *(Object)*: The alias owner.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Alias.prototype`

<!-- div -->

<h3 id="aliasprototypegetaliasesindex"><code>Alias.prototype.getAliases([index])</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/alias.js#L26 "View in source") [&#x24C9;][1]

Extracts the entry's `alias` objects.

#### Arguments
1. `[index]` *(number)*: The index of the array value to return.

#### Returns
*(&#42;)*: Returns the entry's `alias` objects.

---

<!-- /div -->

<!-- div -->

<h3 id="aliasprototypegetcall"><code>Alias.prototype.getCall()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/alias.js#L36 "View in source") [&#x24C9;][1]

Extracts the function call from the owner entry.

#### Returns
*(string)*: Returns the function call.

---

<!-- /div -->

<!-- div -->

<h3 id="aliasprototypegetcategory"><code>Alias.prototype.getCategory()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/alias.js#L46 "View in source") [&#x24C9;][1]

Extracts the owner entry's `category` data.

#### Returns
*(string)*: Returns the owner entry's `category` data.

---

<!-- /div -->

<!-- div -->

<h3 id="aliasprototypegetdesc"><code>Alias.prototype.getDesc()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/alias.js#L56 "View in source") [&#x24C9;][1]

Extracts the owner entry's description.

#### Returns
*(string)*: Returns the owner entry's description.

---

<!-- /div -->

<!-- div -->

<h3 id="aliasprototypegetexample"><code>Alias.prototype.getExample()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/alias.js#L66 "View in source") [&#x24C9;][1]

Extracts the owner entry's `example` data.

#### Returns
*(string)*: Returns the owner entry's `example` data.

---

<!-- /div -->

<!-- div -->

<h3 id="aliasprototypegethashstyle"><code>Alias.prototype.getHash([style])</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/alias.js#L77 "View in source") [&#x24C9;][1]

Extracts the entry's hash value for permalinking.

#### Arguments
1. `[style]` *(string)*: The hash style.

#### Returns
*(string): Returns the entry's hash value (without a hash itself)*.

---

<!-- /div -->

<!-- div -->

<h3 id="aliasprototypegetlinenumber"><code>Alias.prototype.getLineNumber()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/alias.js#L87 "View in source") [&#x24C9;][1]

Resolves the owner entry's line number.

#### Returns
*(number)*: Returns the owner entry's line number.

---

<!-- /div -->

<!-- div -->

<h3 id="aliasprototypegetmembersindex"><code>Alias.prototype.getMembers([index])</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/alias.js#L98 "View in source") [&#x24C9;][1]

Extracts the owner entry's `member` data.

#### Arguments
1. `[index]` *(number)*: The index of the array value to return.

#### Returns
*(&#42;)*: Returns the owner entry's `member` data.

---

<!-- /div -->

<!-- div -->

<h3 id="aliasprototypegetname"><code>Alias.prototype.getName()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/alias.js#L108 "View in source") [&#x24C9;][1]

Extracts the owner entry's `name` data.

#### Returns
*(string)*: Returns the owner entry's `name` data.

---

<!-- /div -->

<!-- div -->

<h3 id="aliasprototypegetowner"><code>Alias.prototype.getOwner()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/alias.js#L118 "View in source") [&#x24C9;][1]

Gets the owner entry object.

#### Returns
*(Object)*: Returns the owner entry.

---

<!-- /div -->

<!-- div -->

<h3 id="aliasprototypegetparamsindex"><code>Alias.prototype.getParams([index])</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/alias.js#L129 "View in source") [&#x24C9;][1]

Extracts the owner entry's `param` data.

#### Arguments
1. `[index]` *(number)*: The index of the array value to return.

#### Returns
*(Array)*: Returns the owner entry's `param` data.

---

<!-- /div -->

<!-- div -->

<h3 id="aliasprototypegetreturns"><code>Alias.prototype.getReturns()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/alias.js#L139 "View in source") [&#x24C9;][1]

Extracts the owner entry's `returns` data.

#### Returns
*(string)*: Returns the owner entry's `returns` data.

---

<!-- /div -->

<!-- div -->

<h3 id="aliasprototypegetsince"><code>Alias.prototype.getSince()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/alias.js#L149 "View in source") [&#x24C9;][1]

Extracts the owner entry's `since` data.

#### Returns
*(string)*: Returns the owner entry's `since` data.

---

<!-- /div -->

<!-- div -->

<h3 id="aliasprototypegettype"><code>Alias.prototype.getType()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/alias.js#L159 "View in source") [&#x24C9;][1]

Extracts the owner entry's `type` data.

#### Returns
*(string)*: Returns the owner entry's `type` data.

---

<!-- /div -->

<!-- div -->

<h3 id="aliasprototypeisalias"><code>Alias.prototype.isAlias()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/alias.js#L169 "View in source") [&#x24C9;][1]

Checks if the entry is an alias.

#### Returns
*(boolean)*: Returns `true`.

---

<!-- /div -->

<!-- div -->

<h3 id="aliasprototypeisctor"><code>Alias.prototype.isCtor()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/alias.js#L179 "View in source") [&#x24C9;][1]

Checks if the owner entry is a constructor.

#### Returns
*(boolean)*: Returns `true` if a constructor, else `false`.

---

<!-- /div -->

<!-- div -->

<h3 id="aliasprototypeisfunction"><code>Alias.prototype.isFunction()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/alias.js#L189 "View in source") [&#x24C9;][1]

Checks if the entry is a function reference.

#### Returns
*(boolean)*: Returns `true` if the entry is a function reference, else `false`.

---

<!-- /div -->

<!-- div -->

<h3 id="aliasprototypeislicense"><code>Alias.prototype.isLicense()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/alias.js#L199 "View in source") [&#x24C9;][1]

Checks if the owner entry is a license.

#### Returns
*(boolean)*: Returns `true` if a license, else `false`.

---

<!-- /div -->

<!-- div -->

<h3 id="aliasprototypeisplugin"><code>Alias.prototype.isPlugin()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/alias.js#L209 "View in source") [&#x24C9;][1]

Checks if the owner entry *is* assigned to a prototype.

#### Returns
*(boolean)*: Returns `true` if assigned to a prototype, else `false`.

---

<!-- /div -->

<!-- div -->

<h3 id="aliasprototypeisprivate"><code>Alias.prototype.isPrivate()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/alias.js#L219 "View in source") [&#x24C9;][1]

Checks if the owner entry is private.

#### Returns
*(boolean)*: Returns `true` if private, else `false`.

---

<!-- /div -->

<!-- div -->

<h3 id="aliasprototypeisstatic"><code>Alias.prototype.isStatic()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/feef7467de079667731d6beab0c2d02ed5613e34/lib/alias.js#L229 "View in source") [&#x24C9;][1]

Checks if the owner entry is *not* assigned to a prototype.

#### Returns
*(boolean)*: Returns `true` if not assigned to a prototype, else `false`.

---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #alias "Jump back to the TOC."

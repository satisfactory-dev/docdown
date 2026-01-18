# docdown <sup>87b47c1d134d64bc4d17398eacf82862ced1090b</sup>

<!-- div class="toc-container" -->

<!-- div -->

## `constructor`
* <a href="#constructorname-owner">`constructor`</a>

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

## `getOwner`
* <a href="#getowner">`getOwner`</a>

<!-- /div -->

<!-- div -->

## `getParams`
* <a href="#getparamsindex">`getParams`</a>

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

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `constructor`

<!-- div -->

<h3 id="constructorname-owner"><code>constructor(name, owner)</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/87b47c1d134d64bc4d17398eacf82862ced1090b/lib/alias.js#L17 "View in source") [&#x24C9;][1]

The Alias constructor.

#### Arguments
1. `name` *(string)*: The alias name.
2. `owner` *(Object)*: The alias owner.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `getAliases`

<!-- div -->

<h3 id="getaliasesindex"><code>getAliases([index])</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/87b47c1d134d64bc4d17398eacf82862ced1090b/lib/alias.js#L28 "View in source") [&#x24C9;][1]

Extracts the entry's `alias` objects.

#### Arguments
1. `[index]` *(number)*: The index of the array value to return.

#### Returns
*(&#42;)*: Returns the entry's `alias` objects.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `getCall`

<!-- div -->

<h3 id="getcall"><code>getCall()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/87b47c1d134d64bc4d17398eacf82862ced1090b/lib/alias.js#L37 "View in source") [&#x24C9;][1]

Extracts the function call from the owner entry.

#### Returns
*(string)*: Returns the function call.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `getCategory`

<!-- div -->

<h3 id="getcategory"><code>getCategory()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/87b47c1d134d64bc4d17398eacf82862ced1090b/lib/alias.js#L46 "View in source") [&#x24C9;][1]

Extracts the owner entry's `category` data.

#### Returns
*(string)*: Returns the owner entry's `category` data.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `getDesc`

<!-- div -->

<h3 id="getdesc"><code>getDesc()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/87b47c1d134d64bc4d17398eacf82862ced1090b/lib/alias.js#L55 "View in source") [&#x24C9;][1]

Extracts the owner entry's description.

#### Returns
*(string)*: Returns the owner entry's description.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `getExample`

<!-- div -->

<h3 id="getexample"><code>getExample()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/87b47c1d134d64bc4d17398eacf82862ced1090b/lib/alias.js#L64 "View in source") [&#x24C9;][1]

Extracts the owner entry's `example` data.

#### Returns
*(string)*: Returns the owner entry's `example` data.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `getHash`

<!-- div -->

<h3 id="gethashstyle"><code>getHash([style])</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/87b47c1d134d64bc4d17398eacf82862ced1090b/lib/alias.js#L74 "View in source") [&#x24C9;][1]

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
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/87b47c1d134d64bc4d17398eacf82862ced1090b/lib/alias.js#L83 "View in source") [&#x24C9;][1]

Resolves the owner entry's line number.

#### Returns
*(number)*: Returns the owner entry's line number.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `getMembers`

<!-- div -->

<h3 id="getmembersindex"><code>getMembers([index])</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/87b47c1d134d64bc4d17398eacf82862ced1090b/lib/alias.js#L93 "View in source") [&#x24C9;][1]

Extracts the owner entry's `member` data.

#### Arguments
1. `[index]` *(number)*: The index of the array value to return.

#### Returns
*(&#42;)*: Returns the owner entry's `member` data.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `getName`

<!-- div -->

<h3 id="getname"><code>getName()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/87b47c1d134d64bc4d17398eacf82862ced1090b/lib/alias.js#L102 "View in source") [&#x24C9;][1]

Extracts the owner entry's `name` data.

#### Returns
*(string)*: Returns the owner entry's `name` data.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `getOwner`

<!-- div -->

<h3 id="getowner"><code>getOwner()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/87b47c1d134d64bc4d17398eacf82862ced1090b/lib/alias.js#L111 "View in source") [&#x24C9;][1]

Gets the owner entry object.

#### Returns
*(Object)*: Returns the owner entry.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `getParams`

<!-- div -->

<h3 id="getparamsindex"><code>getParams([index])</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/87b47c1d134d64bc4d17398eacf82862ced1090b/lib/alias.js#L121 "View in source") [&#x24C9;][1]

Extracts the owner entry's `param` data.

#### Arguments
1. `[index]` *(number)*: The index of the array value to return.

#### Returns
*(Array)*: Returns the owner entry's `param` data.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `getReturns`

<!-- div -->

<h3 id="getreturns"><code>getReturns()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/87b47c1d134d64bc4d17398eacf82862ced1090b/lib/alias.js#L130 "View in source") [&#x24C9;][1]

Extracts the owner entry's `returns` data.

#### Returns
*(string)*: Returns the owner entry's `returns` data.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `getSince`

<!-- div -->

<h3 id="getsince"><code>getSince()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/87b47c1d134d64bc4d17398eacf82862ced1090b/lib/alias.js#L139 "View in source") [&#x24C9;][1]

Extracts the owner entry's `since` data.

#### Returns
*(string)*: Returns the owner entry's `since` data.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `getType`

<!-- div -->

<h3 id="gettype"><code>getType()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/87b47c1d134d64bc4d17398eacf82862ced1090b/lib/alias.js#L148 "View in source") [&#x24C9;][1]

Extracts the owner entry's `type` data.

#### Returns
*(string)*: Returns the owner entry's `type` data.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `isAlias`

<!-- div -->

<h3 id="isalias"><code>isAlias()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/87b47c1d134d64bc4d17398eacf82862ced1090b/lib/alias.js#L157 "View in source") [&#x24C9;][1]

Checks if the entry is an alias.

#### Returns
*(boolean)*: Returns `true`.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `isCtor`

<!-- div -->

<h3 id="isctor"><code>isCtor()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/87b47c1d134d64bc4d17398eacf82862ced1090b/lib/alias.js#L166 "View in source") [&#x24C9;][1]

Checks if the owner entry is a constructor.

#### Returns
*(boolean)*: Returns `true` if a constructor, else `false`.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `isFunction`

<!-- div -->

<h3 id="isfunction"><code>isFunction()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/87b47c1d134d64bc4d17398eacf82862ced1090b/lib/alias.js#L175 "View in source") [&#x24C9;][1]

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
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/87b47c1d134d64bc4d17398eacf82862ced1090b/lib/alias.js#L184 "View in source") [&#x24C9;][1]

Checks if the owner entry is a license.

#### Returns
*(boolean)*: Returns `true` if a license, else `false`.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `isPlugin`

<!-- div -->

<h3 id="isplugin"><code>isPlugin()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/87b47c1d134d64bc4d17398eacf82862ced1090b/lib/alias.js#L193 "View in source") [&#x24C9;][1]

Checks if the owner entry *is* assigned to a prototype.

#### Returns
*(boolean)*: Returns `true` if assigned to a prototype, else `false`.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `isPrivate`

<!-- div -->

<h3 id="isprivate"><code>isPrivate()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/87b47c1d134d64bc4d17398eacf82862ced1090b/lib/alias.js#L202 "View in source") [&#x24C9;][1]

Checks if the owner entry is private.

#### Returns
*(boolean)*: Returns `true` if private, else `false`.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `isStatic`

<!-- div -->

<h3 id="isstatic"><code>isStatic()</code></h3>
[&#x24C8;](https://github.com/satisfactory-dev/docdown/blob/87b47c1d134d64bc4d17398eacf82862ced1090b/lib/alias.js#L211 "View in source") [&#x24C9;][1]

Checks if the owner entry is *not* assigned to a prototype.

#### Returns
*(boolean)*: Returns `true` if not assigned to a prototype, else `false`.

---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #constructor "Jump back to the TOC."

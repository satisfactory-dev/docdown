# Satisfactory.dev docdown Fork

[![Coverage Status](https://coveralls.io/repos/github/satisfactory-dev/docdown/badge.svg?branch=main)](https://coveralls.io/github/satisfactory-dev/docdown?branch=main)
[![Workflow Status](https://github.com/satisfactory-dev/docdown/actions/workflows/nodejs.yml/badge.svg?branch=main)](https://github.com/satisfactory-dev/docdown/actions/workflows/nodejs.yml?query=branch%3Amain)

A simple JSDoc to Markdown documentation generator.

Forked from [docdown](https://github.com/jdalton/docdown)

## Usage

```js
var docdown = require('@satisfactory-dev/docdown');

var markdown = docdown({
  'path': filepath,
  'url': 'https://github.com/username/project/blob/master/my.js'
});
```

```Makefile
docs:
  node bin/docdown index.js doc/README.md style=github title="docdown <sup>$(shell git rev-parse HEAD)$</sup>" url=https://github.com/username/project/blob/$(shell git rev-parse HEAD)$/my.js
```

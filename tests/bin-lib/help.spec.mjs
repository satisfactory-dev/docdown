/*!
 * Copyright 2026 SignpostMarv
 * Available under MIT license
 */

import {
  describe,
  it,
} from 'node:test';

import {
  readFile,
} from 'node:fs/promises';

import assert from 'assert/strict';

import help from '../../bin-lib/help.js';

describe('docdown', () => {
  it('--help', async () => {
    assert.equal(
		help(),
		(await readFile(
			`${import.meta.dirname}/../fixtures/help.txt`,
		)).toString()
	)
  })
})

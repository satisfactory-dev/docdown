/*!
 * Copyright 2026 SignpostMarv
 * Available under MIT license
 */

import {
	describe,
	it,
} from 'node:test';

import assert from 'node:assert/strict';

import docdown from '../index.js';

describe('docdown', () => {
	it('throws when no options specified', () => {
		assert.throws(() => {
			docdown();
		});
	})
	it('throws when no path specified', () => {
		assert.throws(() => {
			docdown({
				url: './',
			});
		});
	})
	it('throws when no url specified', () => {
		assert.throws(() => {
			docdown({
				path: `${import.meta.dirname}/fixtures/aliases.js`,
			});
		});
	})
})

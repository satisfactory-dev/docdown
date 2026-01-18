import {
	describe,
	it,
} from 'node:test';

import assert from 'node:assert/strict';

import {
	compareNatural,
} from '../../lib/util.js';

describe('utils', () => {
	describe('compareNatural', () => {
		/** @type {[unknown, unknown, number][]} */
		const datasets = [
			['a', 'a', 0],
			['1', '10', -1],
			['10', '1', 1],
			['foo.protype.a', 'foo.protype.a', 0],
			['foo.protype.a', 'foo.a', 1],
			['foo.a', 'foo.protype.a', -1],
			['foo.bar.baz', 'foo.bar', 1],
			['foo.bar', 'foo.bar.baz', -1],
		];

		for (let i = 0; i < datasets.length; ++i) {
			const [a, b, expectation] = datasets[i];

			it(`behaves as expected with datasets[${i}]`, () => {
				assert.equal(compareNatural(a, b), expectation);
			})
		}
	})
})

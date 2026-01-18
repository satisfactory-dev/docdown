import {
  describe,
  it,
} from 'node:test';

import assert from 'node:assert/strict';

import fromContext from '../../bin-lib/options.js';

describe('docdown/bin-lib', () => {
	describe('getOption()', () => {
		/**
		 * @type {Object<string, [string[], [string, string|false|undefined, string|false|undefined][][]]}
		 */
		const dataset = {
			'converts "false" to boolean false': [
				[
					['foo=false'],
					[
						['foo', undefined, false],
						['foo', 'bar', false],
					],
				],
				[
					['bar=false'],
					[
						['foo', undefined, undefined],
						['foo', 'bar', 'bar'],
					],
				],
			],
			'converts empty to boolean true': [
				[
					['foo'],
					[
						['foo', undefined, true],
						['foo', false, true],
						['foo', 'false', true],
					],
				],
				[
					['bar'],
					[
						['foo', undefined, undefined],
					],
				],
			],
		};

		for (const [name, contexts] of Object.entries(dataset)) {
			for (let i = 0; i < contexts.length; ++i) {
				const [context, tests] = contexts[i];

				const getOption = fromContext(context);

				for (let j = 0; j < tests.length; ++j) {
					const [nameParam, defaultValue, expectation] = tests[j];

					it(`${name} [${i}][${j}]`, () => {
						const test_name = `${name} [${i}][${j}]`;
						assert.equal(getOption(nameParam, defaultValue), expectation);
					})
				}
			}
		}
	})
})

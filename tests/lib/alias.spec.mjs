/*!
 * Copyright 2026 SignpostMarv
 * Available under MIT license
 */

import {
	describe,
	it,
} from 'node:test';

import assert from 'node:assert/strict';

import Alias from '../../lib/alias.js';
import Entry from '../../lib/entry.js';

import {
	strip_test_spacing,
} from './utilities.mjs';

describe('Alias', () => {
	describe('::getAliases()', () => {
		it('returns an empty array', () => {
			const result = (new Alias('foo', 'bar')).getAliases();

			assert.ok(Array.isArray(result));
			assert.equal(result.length, 0);
		})

		it('returns undefined', () => {
			const result = (new Alias('foo', 'bar')).getAliases(0);

			assert.equal(result, undefined);
		})
	})

	describe('::getCall()', () => {
		it('returns the owner call', () => {
			const alias = new Alias('foo', new Entry(
				strip_test_spacing(
					`/**
					 * @alias bar
					 */
					function foo() {}`,
				),
				'',
			));

			assert.equal(alias.getCall(), 'foo()')
		})
	})

	describe('::getCategory()', () => {
		it('returns the owner call', () => {
			const alias = new Alias('foo', new Entry(
				strip_test_spacing(
					`/**
					 * @alias bar
					 */
					function foo() {}`,
				),
				'',
			));

			assert.equal(alias.getCategory(), 'Methods')
		})
	})

	describe('::getDesc()', () => {
		it('returns the owner call', () => {
			const alias = new Alias('foo', new Entry(
				strip_test_spacing(
					`/**
					 * some description
					 */
					function foo() {}`,
				),
				'',
			));

			assert.equal(alias.getDesc(), 'some description')
		})
	})

	describe('::getExample()', () => {
		void it('extracts js example', () => {
			const entry = new Entry(
				strip_test_spacing(
					`/**
					 * foo bar
					 *
					 * @example
					 *
					 * console.log(foo);
					 */
					let foo = ["bar"];`,
				),
				'',
			);

			assert.equal((new Alias('foo', entry)).getExample(), '```js\nconsole.log(foo);\n```');
		})

		void it('extracts ts example', () => {
			const entry = new Entry(
				strip_test_spacing(
					`/**
					 * foo bar
					 *
					 * @example
					 *
					 * console.log(foo);
					 */
					let foo = ["bar"];`,
				),
				'',
				'ts',
			);

			assert.equal((new Alias('foo', entry)).getExample(), '```ts\nconsole.log(foo);\n```');
		})
	});

	describe('::getHash()', () => {
		it('default style decorated as alias', () => {
			const entry = new Entry(
				strip_test_spacing(
					`/**
					 * foo bar
					 *
					 * @alias bar
					 */
					function foo() {}`,
				),
				'',
			);

			assert.equal((new Alias('baz', entry)).getHash('default'), 'foo')
		})
	})


	describe('::getLineNumber()', () => {
		it('behaves', () => {
			const entry = new Entry(
				strip_test_spacing(
					`/**
					 * foo bar
					 *
					 * @alias bar
					 */
					function foo() {}`,
				),
				strip_test_spacing(
					`/**
					 * foo bar
					 *
					 * @alias bar
					 */
					function foo() {}`,
				),
			);

			assert.equal((new Alias('foo', entry)).getLineNumber(), 6)
		})
	})

	describe('::getMembers()', () => {
		it('returns array', () => {
			const entry = new Entry(
				strip_test_spacing(
					`/**
					 * foo bar
					 *
					 * @memberOf Foo,Bar
					 */
					function foo() {}`,
				),
				'',
			);

			assert.deepEqual((new Alias('bar', entry)).getMembers(), ['Bar', 'Foo'])
		})
	})

	describe('::getName()', () => {
		const alias = new Alias('baz', new Entry(
			strip_test_spacing(
				`/**
				 * foo bar
				 *
				 * @name bar
				 */
				function foo() {}`,
			),
			'',
		));

		it('from self', () => {
			assert.equal(alias.getName(), 'baz');
		});
		it('from owner', () => {
			assert.equal(alias.getOwner().getName(), 'bar')
		})
	})

	describe('::getParams() via owner', () => {
		/** @type {Object<string, [string, string, string|undefined][]} */
		const dataset = {
			AllLiteral: [
				['*', '*'],
				['*', '*', 'test description'],
			],
			NameExpression: [
				['Object', 'Object'],
				['Object', 'Object', 'test description'],
			],
			RestType: [
				['...string[]', '...string[]'],
			],
			UnionType: [
				['foo|bar|baz', '(bar|baz|foo)'],
			],
		};

		for (const [type, datasets] of Object.entries(dataset)) {
			for (let i = 0; i < datasets.length; ++i) {
				const [
					expression,
					expectation,
					description,
				] = datasets[i];

				it(`${type} [${i}]`, () => {
					const entry = new Entry(
						strip_test_spacing(`/**
							* Some function
							*
							* @param${
							expression !== undefined ? ` {${expression}}` : ''
						} foo${
							description !== undefined ? ` ${description}` : ''
						}
							*/
						function foo(foo) {}`),
						'',
					);

					assert.deepEqual((new Alias('baz', entry)).getParams(0), [expectation, 'foo', description || '']);
				})
			}
		}
	})

	describe('::getReturns()', () => {
		const alias = new Alias('baz', new Entry(
			strip_test_spacing(
				`/**
				 * foo bar
				 *
				 * @returns {void} nothing
				 */
				function foo() {}`,
			),
			'',
		));

		it('from owner', () => {
			assert.deepEqual(alias.getReturns(), ['void', 'nothing']);
		});
	})

	describe('::getSince()', () => {
		const alias = new Alias('baz', new Entry(
			strip_test_spacing(
				`/**
				 * foo bar
				 *
				 * @since 1970-01-01
				 */
				function foo() {}`,
			),
			'',
		));

		it('from owner', () => {
			assert.deepEqual(alias.getSince(), '1970-01-01');
		});
	})

	describe('::getType()', () => {
		it('capitalises array', () => {
			const entry = new Entry(
				strip_test_spacing(
					`/**
					 * @type {array}
					 */
					const foo = ['bar'];`,
				),
				'',
			);

			assert.equal((new Alias('baz', entry)).getType(), 'Array');
		})
	})

	describe('::isAlias()', () => {
		it('always returns true', () => {
			assert.ok((new Alias()).isAlias())
		})
	})

	describe('::isCtor()', () => {
		it('returns false', () => {
			const entry = new Entry(
				strip_test_spacing(
					`/**
					 * @type {array}
					 */
					const foo = ['bar'];`,
				),
				'',
			);

			assert.ok(!(new Alias('baz', entry)).isCtor());
			assert.ok(!(new Alias('baz', entry)).isFunction());
			assert.ok(!(new Alias('baz', entry)).isPlugin());
		})
		it('returns true when it shouldn\'t', () => {
			const entry = new Entry(
				strip_test_spacing(
					`/**
					 * @constructor
					 */
					const foo = ['bar'];`,
				),
				'',
			);

			assert.ok((new Alias('baz', entry)).isCtor());
			assert.ok((new Alias('baz', entry)).isFunction());
		})
		it('returns true when it should', () => {
			const entry = new Entry(
				strip_test_spacing(
					`/**
					 * @constructor
					 */
					function foo() {}`,
				),
				'',
			);

			assert.ok((new Alias('baz', entry)).isCtor());
			assert.ok((new Alias('baz', entry)).isFunction());
		})
	})

	describe('::isLicense()', () => {
		it('returns false', () => {
			const entry = new Entry(
				strip_test_spacing(
					`/**
					 * @type {array}
					 */
					const foo = ['bar'];`,
				),
				'',
			);

			assert.ok(!(new Alias('baz', entry)).isLicense());
		})
		it('returns true', () => {
			const entry = new Entry(
				strip_test_spacing(
					`/**
					 * @license MIT
					 *
					 * @type {array}
					 */
					const foo = ['bar'];`,
				),
				'',
			);

			assert.ok((new Alias('baz', entry)).isLicense());
		})
	})

	describe('::isPlugin()', () => {
		it('returns false', () => {
			const entry = new Entry(
				strip_test_spacing(
					`/**
					 * @type {array}
					 */
					const foo = ['bar'];`,
				),
				'',
			);

			assert.ok(!(new Alias('baz', entry)).isPlugin());
		})
		it('returns false on a constructor', () => {
			const entry = new Entry(
				strip_test_spacing(
					`/**
					 * @constructor
					 */
					function foo() {}`,
				),
				'',
			);

			assert.ok(!(new Alias('baz', entry)).isPlugin());
		})
		it('returns true when it should', () => {
			const entry = new Entry(
				strip_test_spacing(
					`/**
					 * some description
					 *
					 * @memberOf Foo
					 *
					 * @returns {void}
					 */
					function bar() {}`,
				),
				'',
			);

			assert.ok((new Alias('baz', entry)).isPlugin());
		})
		it('returns false on a private method', () => {
			const entry = new Entry(
				strip_test_spacing(
					`/**
					 * some description
					 *
					 * @private
					 * @memberOf Foo
					 *
					 * @returns {void}
					 */
					function bar() {}`,
				),
				'',
			);

			assert.ok((new Alias('baz', entry)).isPrivate());
			assert.ok(!(new Alias('baz', entry)).isPlugin());
		})
		it('returns false on a static method', () => {
			const entry = new Entry(
				strip_test_spacing(
					`/**
					 * some description
					 *
					 * @static
					 * @memberOf Foo
					 *
					 * @returns {void}
					 */
					function bar() {}`,
				),
				'',
			);

			assert.ok((new Alias('baz', entry)).isStatic());
			assert.ok(!(new Alias('baz', entry)).isPlugin());
		})
	})
})

import {
	describe,
	it,
} from 'node:test';

import assert from 'node:assert/strict';

import Entry from '../../lib/entry.js';

import {
	strip_test_spacing,
} from './utilities.mjs';

describe('docdown', () => {
	describe('Entry', () => {
		describe('::constructor()', () => {
			it('defaults lang to js', () => {
				assert.equal((new Entry('', '')).lang, 'js');
				assert.equal((new Entry('', '', 'ts')).lang, 'ts');
				assert.equal(
					(new Entry(
						'',
						'',
						'some completely imaginary lang',
					)).lang,
					'some completely imaginary lang',
				);
			})
		})

		describe('::getAliases()', () => {
			/** @type {Object<string, [string[], string[]][]} */
			const dataset = {
				'no aliases': [
					[[], []],
				],
				'one alias': [
					[['bat'], ['bat']],
				],
				'two aliases': [
					[['bar', 'bat'], ['bar']],
					[['bat', 'bar'], ['bat']],
				],
				'three aliases': [
					[['bar', 'bat', 'baz'], ['bar']],
					[['bat', 'bar', 'baz'], ['bat']],
				],
			};

			for (const [test, datasets] of Object.entries(dataset)) {
				for (let i = 0; i < datasets.length; ++i) {
					const [aliases, expectation] = datasets[i];

					void it(`${test} [${i}]`, () => {
						const entry = new Entry(
							strip_test_spacing(
								`/**
								 * Some function
								 *
								 * ${
									aliases.length > 0
										? `@alias ${aliases.join('\n\t\t\t\t\t\t\t\t * @alias ')}`
										: ''
								}
								 */
								function foo(foo) {}`
							),
							'',
						);

						assert.deepEqual(entry.getAliases().map((e) => e.getName()), expectation);
						assert.equal(entry.getAliases(0)?.getName(), expectation[0] || undefined);
					})
				}
			}
		})

		describe('::getCall()', () => {
			it('parses strings', () => {
				const entry = new Entry(
					strip_test_spacing(`/**
					 * Some header
					 */
					foo"bar" = "if someone knows of a valid example of this syntax, please PR.";`),
					'',
				);

				assert.equal(entry.getCall(), 'foo"bar');
			})
		})

		describe('::getDesc()', () => {
			it('parses from unknown', () => {
				const entry = new Entry(
					strip_test_spacing(
						`/**
						 * Some unrecognised thing
						 *
						 * @return {void}
						 */
						asdf asdf asdf asdf
						`,
					),
					'',
				);

				assert.equal(entry.getDesc(), 'Some unrecognised thing');
			})

			it('prepends type to description', () => {
				const entry = new Entry(
					strip_test_spacing(
						`/**
						 * foo bar
						 *
						 * @type {Array}
						 */
						let foo = ["bar"];`,
					),
					'',
				);

				assert.equal(entry.getDesc(), '(Array): foo bar');
			})
		})

		describe('::getEntries()', () => {
			it('defaults to an empty array', () => {
				assert.deepEqual(Entry.getEntries(''), [])
			})
			it('has one entry', () => {
				assert.equal(
					Entry.getEntries(
						strip_test_spacing(`/**
						 * Some description
						 * @return void
						 */
						function foo() {}`),
						'',
					).length,
					1,
				);
			})
			it('has two entries', () => {
				assert.equal(
					Entry.getEntries(
						strip_test_spacing(`/**
						 * Some description
						 * @return void
						 */
						function foo() {}

						/**
						 * Some description
						 * @return void
						 */
						function bar() {}`),
						'',
					).length,
					2,
				);
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

				assert.equal(entry.getExample(), '```js\nconsole.log(foo);\n```');
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

				assert.equal(entry.getExample(), '```ts\nconsole.log(foo);\n```');
			})
		})

		describe('::getHash()', () => {
			it('default style decorated as prototype', () => {
				const entryMultipleTags = new Entry(
					strip_test_spacing(
						`/**
						 * foo bar
						 *
						 * @memberOf Foo
						 * @memberOf Bar
						 */
						function foo() {}`,
					),
					'',
				);
				const entrySpacedValue = new Entry(
					strip_test_spacing(
						`/**
						 * foo bar
						 *
						 * @memberOf Foo Bar
						 */
						function foo() {}`,
					),
					'',
				);
				const entryCommaValue = new Entry(
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

				assert.equal(entryMultipleTags.getHash('default'), 'Foo-prototype-foo')
				assert.equal(entrySpacedValue.getHash('default'), 'Foo Bar-prototype-foo')
				assert.equal(entryCommaValue.getHash('default'), 'Bar-prototype-foo')
			})
			it('default style decorated as static', () => {
				const entry = new Entry(
					strip_test_spacing(
						`/**
						 * foo bar
						 *
						 * @static
						 * @memberOf Foo
						 * @memberOf Bar
						 */
						function foo() {}`,
					),
					'',
				);

				assert.equal(entry.getHash('default'), 'Foo-foo')
			})
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
				entry.isAlias = () => true;
				entry.getOwner = () => ({getName: () => 'baz'});

				assert.equal(entry.getHash('default'), 'baz')
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

				assert.deepEqual(entry.getMembers(), ['Bar', 'Foo'])
			})
		})

		describe('::getName()', () => {
			it('from tag', () => {
				const entry = new Entry(
					strip_test_spacing(
						`/**
						 * foo bar
						 *
						 * @name bar
						 */
						function foo() {}`,
					),
					'',
				);

				assert.deepEqual(entry.getName(), 'bar')
			})
		})

		describe('::getParamType()', () => {
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

						assert.deepEqual(entry.getParams(0), [expectation, 'foo', description || '']);
					})
				}
			}
		})

		describe('::getRelated()', () => {
			it('has @see tags', () => {
				const entry = new Entry(
					strip_test_spacing(
						`/**
						 * foo bar
						 *
						 * @see foobar
						 * @see bar
						 */
						function foo() {}`,
					),
					'',
				);

				assert.deepEqual(entry.getRelated(), ['[foobar](#foobar)'])
			})
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

				assert.equal(entry.getType(), 'Array');
			})
		})
	})
})

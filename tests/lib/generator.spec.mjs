/*!
 * Copyright 2026 SignpostMarv
 * Available under MIT license
 */

import {
	describe,
	it,
} from 'node:test';

import assert from 'node:assert/strict';

import {
	glob,
	readFile,
} from 'node:fs/promises';

import {
	basename,
	dirname,
} from 'node:path';

import {
	existsSync,
} from 'node:fs';

import generateDoc from '../../lib/generator.js';

describe('generateDoc()', async () => {
	for await (const filepath of glob(`${import.meta.dirname}/../fixtures/*.js`)) {
		const filepathMarkdown = filepath.replace(/\.js$/, '.md');

		it(`parses ../fixtures/${basename(filepath)} as expected`, async () => {
			assert.ok(existsSync(filepathMarkdown));

			const [
				input,
				expectation,
			] = await Promise.all([
				readFile(filepath, 'utf8'),
				readFile(filepathMarkdown, 'utf8'),
			]);

			assert.equal(
				generateDoc(
					input.toString(),
					{
						path: filepathMarkdown,
						url: './',
						lang: 'js',
						sort: true,
						style: 'default',
						title: `${basename(filepath)} API documentation`,
						toc: 'properties',
					},
				),
				expectation.toString(),
			);
		});
	}
})

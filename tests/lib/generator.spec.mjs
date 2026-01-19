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
} from 'node:path';

import {
	existsSync,
} from 'node:fs';

import generateDoc from '../../lib/generator.js';

describe('generateDoc()', async () => {
	for await (const filepath of glob(`${import.meta.dirname}/../fixtures/*.js`)) {
		const filepathMarkdown = filepath.replace(/\.js$/, '.md');
		const filepathMarkdownGitHub = filepath.replace(/\.js$/, '.github.md');
		const filepathMarkdownWithCatgegoriesToc = filepath.replace(/\.js$/, '.toc.md');

		it(`parses ../fixtures/${basename(filepath)} as expected`, async () => {
			assert.ok(existsSync(filepathMarkdown));

			const [
				input,
				expectation,
				expectationGitHub,
				expectationToc,
			] = await Promise.all([
				readFile(filepath, 'utf8'),
				readFile(filepathMarkdown, 'utf8'),
				readFile(filepathMarkdownGitHub, 'utf8'),
				readFile(filepathMarkdownWithCatgegoriesToc, 'utf8'),
			]);

			const options = {
				path: filepathMarkdown,
				url: './',
				lang: 'js',
				sort: true,
				style: 'default',
				title: `${basename(filepath)} API documentation`,
				toc: 'properties',
			};

			assert.equal(
				generateDoc(
					input.toString(),
					options,
				),
				expectation.toString(),
			);

			assert.equal(
				generateDoc(
					input.toString(),
					{
						...options,
						style: 'github',
						path: filepathMarkdownGitHub,
					},
				),
				expectationGitHub.toString(),
			);

			assert.equal(
				generateDoc(
					input.toString(),
					{
						...options,
						path: filepathMarkdownWithCatgegoriesToc,
						toc: 'categories',
					},
				),
				expectationToc.toString(),
			);
		});
	}
})

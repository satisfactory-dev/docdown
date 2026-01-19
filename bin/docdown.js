#!/usr/bin/env node
/*!
 * docdown
 * Copyright 2011-2016 John-David Dalton
 * Copyright 2026 SignpostMarv
 * Available under MIT license
 */

/** Load Node.js modules */
import {
  existsSync,
  readFileSync,
  writeFileSync,
} from 'node:fs';
import {
  join,
} from 'node:path';

/** Load other modules */
import fromContext from '../bin-lib/options.js';
import help from '../bin-lib/help.js';
import docdown from '../index.js';

const getOption = fromContext(process.argv);

/** The list of arguments provided */
var argv = process.argv;

/*----------------------------------------------------------------------------*/

var cwd = process.cwd(),
    fileName = argv[2],
    outputFile = argv[3];

if (
  !fileName ||
  !outputFile ||
  argv.includes('-h') ||
  argv.includes('--help')
) {
  console.log(help());
  process.exit(1);
}

fileName = join(cwd, fileName);
outputFile = join(cwd, outputFile);

var options = {
  'lang': getOption('lang'),
  'path': fileName,
  'sort': getOption('sort'),
  'style': getOption('style'),
  'title': getOption('title'),
  'toc': getOption('toc'),
  'url': getOption('url'),
  tocLink: getOption('tocLink'),
};

var output = docdown(options);

const previous = existsSync(outputFile) ? readFileSync(outputFile).toString() : '';

if (
  !getOption('--force', false) &&
  options.style == 'github' &&
  'string' === typeof options.url &&
  previous != '' &&
  /\/blob\/[0-9a-f]{40}\//.test(options.url)
) {
  const previousWithoutGitCommitHash = previous.replace(/\b[0-9a-f]{40}\b/g, '');
  const currentWithoutGitCommitHash = output.replace(/\b[0-9a-f]{40}\b/g, '');

  if (previousWithoutGitCommitHash == currentWithoutGitCommitHash) {
    console.log(
      `skipping write to ${
        fileName
      }, as contents have not changed. pass force argument to force update.`
    );

    process.exit(0)
  }
}

writeFileSync(outputFile, output, 'utf8');

process.exit(0);

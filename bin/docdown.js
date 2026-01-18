#!/usr/bin/env node
'use strict';

/** Load Node.js modules */
var fs = require('fs'),
    path = require('path');

/** Load other modules */
var
    getOption = require('../bin-lib/options.js')(process.argv),
    help = require('../bin-lib/help.js'),
    docdown = require('../index.js');

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

fileName = path.join(cwd, fileName);
outputFile = path.join(cwd, outputFile);

var options = {
  'lang': getOption('lang'),
  'path': fileName,
  'sort': getOption('sort'),
  'style': getOption('style'),
  'title': getOption('title'),
  'toc': getOption('toc'),
  'url': getOption('url')
};

var output = docdown(options);

fs.writeFileSync(outputFile, output, 'utf8');

process.exit(0);

/**
 * Generates the help text for the docdown cli tool
 *
 * @return {string} The help text for the docdown cli tool
 */
function help() {
  return [
    'Usage:',
    '  docdown inputFile.js outputFile.md [options]',
    'Options:',
    '  lang="js"                   The language indicator for code blocks.',
    '  sort=true|false             Specify whether entries are sorted.',
    '  style="default|github"      The hash style for links.',
    '  title="title"               The documentation title.',
    '  toc="categories|properties" The table of contents organization style.',
    '  url="url"                   The source URL.',
    '  --force                     Force the docs to be written to if writing would only leave commit hash-related changes',
  ].join('\n');
}

export default help;

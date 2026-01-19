/*!
 * docdown
 * Copyright 2011-2016 John-David Dalton
 * Available under MIT license
 */
'use strict';

var
    Entry = require('./entry.js'),
    getEntries = Entry.getEntries,
    util = require('./util.js');

var
    specialCategories = ['Methods', 'Properties'],
    token = '@@token@@';

var reCode = /`.*?`/g,
    reToken = /@@token@@/g;

var htmlEscapes = {
  '*': '&#42;',
  '[': '&#91;',
  ']': '&#93;'
};

/*----------------------------------------------------------------------------*/

/**
 * Escape special Markdown characters in a string.
 *
 * @private
 * @param {string} string The string to escape.
 * @returns {string} Returns the escaped string.
 */
function escape(string) {
  var snippets = [];

  // Replace all code snippets with a token.
  string = string.replace(reCode, function(match) {
    snippets.push(match);
    return token;
  });

  for (const [chr, replacement] of Object.entries(htmlEscapes)) {
    string = string.replace(RegExp('(\\\\?)\\' + chr, 'g'), function(match, backslash) {
      return backslash ? match : replacement;
    });
  }

  // Replace all tokens with code snippets.
  return string.replace(reToken, function(match) {
    return snippets.shift();
  });
}

/**
 * Get the seperator (`.` or `.prototype.`)
 *
 * @private
 * @param {Entry} Entry object to get selector for.
 * @returns {string} Returns the member seperator.
 */
function getSeparator(entry) {
  return entry.isPlugin() ? '.prototype.' : '.';
}

/**
 * Modify a string by replacing named tokens with matching associated object values.
 *
 * @private
 * @param {string} string The string to modify.
 * @param {Object} data The template data object.
 * @returns {string} Returns the modified string.
 */
function interpolate(string, data) {
  function tagged(_, string) {
    let result = string;

    for (const [key, value] of Object.entries(data)) {
      result = result.replaceAll(`\${${key}}`, value);
    }

    return result;
  }

  return util.format(tagged`${string}`);
}

/**
 * Make an anchor link.
 *
 * @private
 * @param {string} href The anchor href.
 * @param {string} text The anchor text.
 * @returns {string} Returns the anchor HTML.
 */
function makeAnchor(href, text) {
  return `<a href="${href}">${text}</a>`;
}

/*----------------------------------------------------------------------------*/

/**
 * Generates the documentation from JS source.
 *
 * @param {string} The source code to generate the documentation for.
 * @param {object} The options object.
 * @returns {string} Returns the documentation markdown.
 *
 * @todo look into why tocLink doesn't seem to work on GitHub
 */
function generateDoc(source, options) {
  /** @type {Entry[]} */
  const api = [];
  var
      byCategories = options.toc == 'categories',
      entries = getEntries(source),
      /** @type {Object<string, Entry[]>} */
      organized = Object.create(null),
      sortEntries = options.sort,
      style = options.style,
      url = options.url;

  // Add entries and aliases to the API list.
  entries.forEach(function(entryStr) {
    const entry = new Entry(entryStr, source);
    api.push(entry);
    api.push(...entry.getAliases())
  });

  // Build the list of categories for the TOC and generate content for each entry.
  api.forEach(function(entry) {
    // Exit early if the entry is private or has no name.
    var name = entry.getName();
    if (!name || entry.isPrivate()) {
      return;
    }
    var tocGroup,
        member = entry.getMembers(0) || '',
        separator = member ? getSeparator(entry) : '';

    // Add the entry to the TOC.
    if (byCategories) {
      var category = entry.getCategory();
      tocGroup = organized[category] || (organized[category] = []);
    }
    else {
      var memberGroup;
      if (!member ||
          entry.isCtor() ||
          (entry.getType() == 'Object' &&
            !/[=:]\s*(?:null|undefined)\s*[,;]?$/gi.test(entry.entry))
      ) {
        memberGroup = (member ? member + getSeparator(entry) : '') + name;
      } else if (entry.isStatic()) {
        memberGroup = member;
      } else if (!entry.isCtor()) {
        memberGroup = member + getSeparator(entry).slice(0, -1);
      }

      if (!(memberGroup in organized)) {
        organized[memberGroup] = [];
      }

      tocGroup = organized[memberGroup];
    }
    tocGroup.push(entry);

    // Skip aliases.
    if (entry.isAlias()) {
      return;
    }
    // Start markdown for the entry.
    var entryMarkdown = ['\n<!-- div -->\n'];

    var entryData = {
      'call': entry.getCall(),
      'category': entry.getCategory(),
      'entryHref': '#${hash}',
      'entryLink': options.entryLink || (style == 'github' ? '' : '<a href="${entryHref}">#</a>&nbsp;'),
      'hash': entry.getHash(style),
      'member': member,
      'name': name,
      'separator': separator,
      'sourceHref': url + '#L' + entry.getLineNumber(),
      'sourceLink': (
        options.sourceLink || (
        options.style === 'github'
          ? '${sourceHref}'
          : '[&#x24C8;](${sourceHref} "View in source")'
        )
      ),
      'tocHref': '1',
      'tocLink': (
        (
          'tocLink' in options &&
          false === options.tocLink
        )
          ? ''
          : (options.tocLink || '[&#x24C9;][${tocHref}]')
        )
    };

    [
      'entryHref', 'sourceHref', 'tocHref',
      'entryLink', 'sourceLink', 'tocLink'
    ].forEach(function(option) {
      entryData[option] = interpolate(entryData[option], entryData);
    });

    const {
      hash,
      entryLink,
      call,
    } = entryData;

    // Add the heading.
    entryMarkdown.push(
      util.format(`<h3 id="${hash}">${entryLink}<code>${member}${separator}${call}</code></h3>`) +
      '\n' +
      interpolate(
        [
          '${sourceLink}',
          options.sublinks || [],
          '${tocLink}'
        ]
        .flatMap((e) => e)
        .filter((maybe) => !!maybe)
        .join(' '),
        entryData
      )
      .replace(/ {2,}/g, ' '),
    );

    // Add the description.
    entryMarkdown.push('\n' + entry.getDesc() + '\n');

    // Add optional related.
    var relatedItems = entry.getRelated();
    if (relatedItems.length) {
      entryMarkdown.push(
        '#### Related',
        relatedItems.join(', '),
        ''
      );
    }
    // Add optional since version.
    var since = entry.getSince();
    if (since.length) {
      entryMarkdown.push(
        '#### Since',
        since,
        ''
      );
    }
    // Add optional aliases.
    var aliases = entry.getAliases();
    if (aliases.length) {
      entryMarkdown.push(
        '#### Aliases',
        '*' +
        aliases.map(function(alias) {
          return util.format(`${member}${separator}${alias.getName()}`);
        }).join(', ') +
        '*',
        ''
      );
    }
    // Add optional function parameters.
    var params = entry.getParams();
    if (params.length) {
      entryMarkdown.push('#### Arguments');
      params.forEach(function(param, index) {
        var paramType = param[0];
        if (paramType.startsWith('(')) {
          paramType = util.deparenthesize(paramType);
        }
        entryMarkdown.push(
          util.format(`${index + 1}. \`${param[1]}\` (${escape(paramType)}): ${escape(param[2])}`),
        );
      });
      entryMarkdown.push('');
    }
    // Add optional functions returns.
    var returns = entry.getReturns();
    if (returns.length) {
      var returnType = returns[0];
      if (returnType.startsWith('(')) {
        returnType = util.deparenthesize(returnType);
      }
      entryMarkdown.push(
        '#### Returns',
        util.format(`(${escape(returnType)}): ${escape(returns[1])}`),
        ''
      );
    }
    // Add optional function example.
    var example = entry.getExample();
    if (example) {
      entryMarkdown.push('#### Example', example);
    }
    // End markdown for the entry.
    entryMarkdown.push('---\n\n<!-- /div -->');

    entry.markdown = entryMarkdown.join('\n');
  });

  // Add TOC headers.
  var tocGroups = Object.keys(organized);
  if (byCategories) {
    // Remove special categories before sorting.
    var catogoriesUsed = tocGroups.filter((maybe) => specialCategories.includes(maybe));
    tocGroups = tocGroups.filter((maybe) => !catogoriesUsed.includes(maybe))

    // Sort categories and add special categories back.
    if (sortEntries) {
      tocGroups.sort(util.compareNatural);
    }
    tocGroups.push(...catogoriesUsed);
  }
  else {
    tocGroups.sort(util.compareNatural);
  }
  // Start markdown for TOC categories.
  var tocMarkdown = ['<!-- div class="toc-container" -->\n'];
  tocGroups.forEach(function(group) {
    tocMarkdown.push(
      '<!-- div -->\n',
      '## `' + group + '`'
    );

    if (sortEntries && organized[group]) {
      // Sort the TOC groups.
      organized[group].sort(function(value, other) {
        var valMember = value.getMembers(0),
            othMember = other.getMembers(0);

        return util.compareNatural(
          (valMember ? (valMember + getSeparator(value)) : '') + value.getName(),
          (othMember ? (othMember + getSeparator(other)) : '') + other.getName()
        );
      });
    }
    // Add TOC entries for each category.
    organized[group].forEach(function(entry) {
      var member = entry.getMembers(0) || '',
          name = entry.getName(),
          sep = getSeparator(entry),
          title = escape((member ? (member + sep) : '') + name);

      if (entry.isAlias()) {
        // An alias has a more complex html structure.
        var owner = entry.getOwner();
        tocMarkdown.push(
          '* <a href="#' + owner.getHash(style) + '" class="alias">`' +
          title + '` -> `' + owner.getName() + '`' +
          '</a>'
        );
      } else {
        // Add a simple TOC entry.
        tocMarkdown.push(
          '* ' +
          makeAnchor(
            '#' + entry.getHash(style),
            '`' + title + '`'
          )
        );
      }
    });
    tocMarkdown.push('\n<!-- /div -->\n');
  });

  // End markdown for the TOC.
  tocMarkdown.push('<!-- /div -->\n');

  var docMarkdown = ['# '+ options.title + '\n'];
  docMarkdown.push(...tocMarkdown);
  docMarkdown.push('<!-- div class="doc-container" -->\n');

  tocGroups.forEach(function(group) {
    docMarkdown.push('<!-- div -->\n');
    if (byCategories && !specialCategories.includes(group)) {
      var groupName = '“' + group + '” Methods';
    }
    docMarkdown.push('## `' + (groupName || group) + '`');
    organized[group].forEach(function(entry) {
      if (entry.markdown) {
        docMarkdown.push(entry.markdown);
      }
    });
   docMarkdown.push('\n<!-- /div -->\n');
  });

  docMarkdown.push('<!-- /div -->\n');

  // Add link back to the top of the TOC.
  var tocHref = options.tocHref || ('#' + (tocGroups[0] || '').toLowerCase());
  if (tocHref) {
    docMarkdown.push(' [1]: ' + tocHref + ' "Jump back to the TOC."\n');
  }
  return docMarkdown.join('\n');
}

module.exports = generateDoc;

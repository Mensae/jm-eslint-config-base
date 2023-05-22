/**
 * @file Configuration only concerned with formatting.
 * @author Johan Meester
 * @see LICENSE file in root directory for full license.
 */

/* eslint-env node */

const OFF = 'off';
const ERROR = 'error';

module.exports = Object.freeze({
  env: {
    es2022: true
  },

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },

  plugins: ['import', 'unicorn', 'jsdoc'],

  reportUnusedDisableDirectives: true,

  rules: Object.freeze({
    // #region ESLint Core Rules

    // #region Suggestions

    /*
     * Enforce sorted import declarations within modules
     * https://eslint.org/docs/rules/sort-imports
     * Type: suggestion
     */
    'sort-imports': [
      ERROR,
      {
        ignoreCase: false,
        ignoreDeclarationSort: true, // using eslint-plugin-import to handle this
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true
      }
    ],

    /*
     * Enforce consistent spacing after the `//` or `/*` in a comment
     * https://eslint.org/docs/rules/spaced-comment
     * Type: suggestion
     */
    'spaced-comment': [
      OFF,
      'always',
      {
        block: {
          balanced: true
        }
      }
    ],

    // #endregion Suggestions

    // #region Layout & Formatting

    // #endregion Layout & Formatting

    // #endregion ESLint Core Rules

    // #region PLUGINS

    // #region import

    //#region import->Style guide

    /*
     * Ensure all exports appear after other statements.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md
     * Type: suggestion
     */
    'import/exports-last': ERROR,

    /*
     * Ensure consistent use of file extension within the import path.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
     * Type: suggestion
     */
    'import/extensions': [ERROR, 'ignorePackages'],

    /*
     * Ensure all imports appear before other statements.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
     * Type: suggestion
     */
    'import/first': ERROR,

    /*
     * Enforce the maximum number of dependencies a module can have.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/max-dependencies.md
     * Type: suggestion
     */
    'import/max-dependencies': ERROR,

    /*
     * Enforce a newline after import statements.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
     * Type: layout
     */
    'import/newline-after-import': [ERROR, { considerComments: true }],

    /*
     * Forbid anonymous values as default exports.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md
     * Type: suggestion
     */
    'import/no-anonymous-default-export': [
      ERROR,
      { allowCallExpression: false }
    ],

    /*
     * Forbid repeated import of the same module in multiple places.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
     * Type: problem
     * Recommended: true
     */
    'import/no-duplicates': [
      ERROR,
      { considerQueryString: true, 'prefer-inline': true }
    ],

    /*
     * Forbid named default exports.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md
     * Type: suggestion
     */
    'import/no-named-default': ERROR,

    /*
     * Forbid namespace (a.k.a. "wildcard" `*`) imports.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-namespace.md
     * Type: suggestion
     */
    'import/no-namespace': ERROR,

    /*
     * Enforce a convention in module import order.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
     * Type: suggestion
     */
    'import/order': [
      ERROR,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['sibling', 'parent'],
          'index',
          'unknown'
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],

    /*
     * Prefer a default export if module exports a single name or multiple names.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
     * Type: suggestion
     */
    'import/prefer-default-export': ERROR,

    // #endregion import->Style guide

    // #endregion import

    // #region unicorn

    /*
     * Move function definitions to the highest possible scope.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-function-scoping.md
     * Recommended: Yes
     */
    'unicorn/consistent-function-scoping': ERROR,

    /*
     * Require escape sequences to use uppercase values.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/escape-case.md
     * Recommended: Yes
     */
    'unicorn/escape-case': ERROR,

    /*
     * Enforce a case style for filenames.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
     * Recommended: Yes
     */
    'unicorn/filename-case': [
      ERROR,
      {
        cases: {
          kebabCase: true,
          camelCase: true,
          pascalCase: true
        }
      }
    ],

    /*
     * Do not use leading/trailing space between `console.log` parameters.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-console-spaces.md
     * Recommended: Yes
     */
    'unicorn/no-console-spaces': ERROR,

    /*
     * Enforce the style of numeric separators by correctly grouping digits.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/numeric-separators-style.md
     * Recommended: Yes
     */
    'unicorn/numeric-separators-style': ERROR,

    /*
     * Prevent abbreviations.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md
     * Recommended: Yes
     */
    'unicorn/prevent-abbreviations': [
      ERROR,
      {
        allowList: {
          args: true,
          ctx: true,
          props: true,
          Props: true,
          req: true,
          res: true
        },
        ignore: ['\\.e2e$', '\\.e2e-spec$'],
        checkShorthandProperties: true
      }
    ],

    /*
     * Enforce consistent brace style for `case` clauses.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/switch-case-braces.md
     * Recommended: Yes
     */
    'unicorn/switch-case-braces': ERROR,

    /*
     * Fix whitespace-insensitive template indentation.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/template-indent.md
     * Recommended: Yes
     */
    'unicorn/template-indent': ERROR,

    /*
     * Enforce consistent case for text encoding identifiers.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/text-encoding-identifier-case.md
     * Recommended: Yes
     */
    'unicorn/text-encoding-identifier-case': ERROR,

    // #endregion unicorn

    // #region jsdoc

    /*
     * Reports invalid padding inside JSDoc blocks.
     * https://github.com/gajus/eslint-plugin-jsdoc#check-indentation
     */
    'jsdoc/check-indentation': ERROR,

    /*
     * Reports invalid alignment of JSDoc block lines.
     * https://github.com/gajus/eslint-plugin-jsdoc#check-line-alignment
     */
    'jsdoc/check-line-alignment': ERROR,

    /*
     * Controls how and whether jsdoc blocks can be expressed as single or
     * multiple line blocks.
     * https://github.com/gajus/eslint-plugin-jsdoc#multiline-blocks
     * Recommended: true
     */
    'jsdoc/multiline-blocks': ERROR,

    /*
     * Prevents use of multiple asterisks at the beginning of lines.
     * https://github.com/gajus/eslint-plugin-jsdoc#no-multi-asterisks
     * Recommended: true
     */
    'jsdoc/no-multi-asterisks': ERROR,

    /*
     * Requires that each JSDoc line starts with an `*`.
     * https://github.com/gajus/eslint-plugin-jsdoc#require-asterisk-prefix
     */
    'jsdoc/require-asterisk-prefix': ERROR,

    /*
     * Requires (or disallows) a hyphen before the `@param` description.
     * https://github.com/gajus/eslint-plugin-jsdoc#require-hyphen-before-param-description
     */
    'jsdoc/require-hyphen-before-param-description': OFF,

    /*
     * Sorts tags by a specified sequence according to tag name.
     * https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-sort-tags
     */
    'jsdoc/sort-tags': OFF,

    /*
     * Enforces lines (or no lines) between tags.
     * https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-tag-lines
     * Recommended: true
     */
    'jsdoc/tag-lines': ERROR

    // #endregion jsdoc

    // #endregion PLUGINS
  })
});

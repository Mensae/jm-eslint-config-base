/* eslint-env node */

module.exports = {
  extends: ['./configs/base.js', './configs/formatting.js'].map(
    require.resolve
  ),

  overrides: [
    /* testing */
    {
      files: ['**/*.test.js'],

      rules: {
        // #region PLUGINS

        // #region @getify/proper-arrows

        /*
         * Control various aspects of arrow function parameters to keep them readable
         * https://github.com/getify/eslint-plugin-proper-arrows/#rule-params
         * Type: problem
         */
        '@getify/proper-arrows/params': [
          'error',
          {
            unused: 'trailing',
            count: 2,
            length: 3,
            allowed: ['e', 'v', 'cb', 'fn', 'pr']
          }
        ],

        /*
         * Require arrow functions to receive inferenced names
         * https://github.com/getify/eslint-plugin-proper-arrows/#rule-name
         * Type: problem
         */
        '@getify/proper-arrows/name': 'off',

        /*
         * Control various aspects of arrow function returns to keep them readable
         * https://github.com/getify/eslint-plugin-proper-arrows/#rule-return
         * Type: problem
         */
        '@getify/proper-arrows/return': ['error', { ternary: 1 }],

        /*
         * Forbid arrow functions from various locations
         * https://github.com/getify/eslint-plugin-proper-arrows/#rule-where
         * Type: problem
         */
        '@getify/proper-arrows/where': 'off',

        /*
         * Require arrow functions to reference the 'this' keyword
         * https://github.com/getify/eslint-plugin-proper-arrows/#rule-this
         * Type: problem
         */
        '@getify/proper-arrows/this': 'off'

        // #endregion @getify/proper-arrows

        // #endregion PLUGINS
      }
    }
  ]
};

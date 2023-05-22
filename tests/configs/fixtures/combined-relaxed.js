/* eslint-env node */

module.exports = {
  extends: [
    '../../../configs/base-relaxed.js',
    '../../../configs/formatting-relaxed.js'
  ].map(require.resolve)
};

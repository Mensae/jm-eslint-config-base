/* eslint-env node */

module.exports = {
  extends: ['../../../configs/base.js', '../../../configs/formatting.js'].map(
    require.resolve
  )
};

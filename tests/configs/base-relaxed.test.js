/* eslint-env jest */

const baseConfig = require('../../configs/base-relaxed.js');

describe('eslint-config-base-relaxed', () => {
  it('should match the snapshot', () => {
    expect(baseConfig).toMatchSnapshot();
  });
});

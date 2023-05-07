/* eslint-env jest */

const baseConfig = require('../../configs/base.js');

describe('eslint-config-base', () => {
  it('should match the snapshot', () => {
    expect(baseConfig).toMatchSnapshot();
  });
});

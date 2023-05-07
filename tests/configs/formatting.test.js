/* eslint-env jest */

const formattingConfig = require('../../configs/formatting.js');

describe('eslint-config-formatting', () => {
  it('should match the snapshot', () => {
    expect(formattingConfig).toMatchSnapshot();
  });
});

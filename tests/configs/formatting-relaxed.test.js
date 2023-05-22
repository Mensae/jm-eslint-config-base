/* eslint-env jest */

const formattingConfig = require('../../configs/formatting-relaxed.js');

describe('eslint-config-formatting-relaxed', () => {
  it('should match the snapshot', () => {
    expect(formattingConfig).toMatchSnapshot();
  });
});

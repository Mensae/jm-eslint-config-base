/* eslint-disable @getify/proper-arrows/this */
/* eslint-disable @getify/proper-arrows/where */
/* eslint-disable @getify/proper-arrows/name */
/* eslint-env jest */

const formattingConfig = require('../../configs/formatting.js');

describe('eslint-config-formatting', () => {
  it('should match the snapshot', () => {
    expect(formattingConfig).toMatchSnapshot();
  });
});

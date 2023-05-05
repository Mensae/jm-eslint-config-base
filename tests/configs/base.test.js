/* eslint-disable @getify/proper-arrows/this */
/* eslint-disable @getify/proper-arrows/where */
/* eslint-disable @getify/proper-arrows/name */
/* eslint-env jest */

const baseConfig = require('../../configs/base.js');

describe('eslint-config-base', () => {
  it('should match the snapshot', () => {
    expect(baseConfig).toMatchSnapshot();
  });
});

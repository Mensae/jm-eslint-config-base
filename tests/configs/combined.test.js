/* eslint-disable @getify/proper-arrows/this */
/* eslint-disable @getify/proper-arrows/where */
/* eslint-disable @getify/proper-arrows/name */
/* eslint-env jest */

const { ESLint } = require('eslint');

test('base config plus formatting', async () => {
  const configFilePath = './fixtures/combined.js';

  try {
    const eslint = new ESLint();

    const config = await eslint.calculateConfigForFile(configFilePath);

    expect(config).toMatchSnapshot();
  } catch (error) {
    throw new Error(error);
  }
});

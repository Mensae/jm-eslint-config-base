# @jm/eslint-config-base

A base, framework-agnostic, [ESLint](http://eslint.org/) config that enforces
best practices and prevents possible problems.

The idea is to use [prettier](https://prettier.io) for styling and does not include
rules that are conflicting with [prettier](https://prettier.io).

## Available configs

- `base`, The, default, base configuration that does not include any rules with regard to styling
- `formatting`, Extention to the `base` config that does include styling rules but only those that are not covered by [prettier](https://prettier.io).

## Installation

```sh
# inside your project's working tree
npm install @jm/eslint-config-base --save-dev
```

## Usage

Example `.eslintrc.json` with only the base config

```json
{
  "extends": ["@jm/base"]
}
```

Example `.eslintrc.json` with base config extended with formatting rules

```json
{
  "extends": ["@jm/base", "@jm/eslint-config-base/formatting"]
}
```

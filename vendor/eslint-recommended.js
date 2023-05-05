/**
 * @fileoverview Configuration applied when a user configuration extends from
 * `eslint:recommended`.
 * @author Nicholas C. Zakas
 * @version 8.38.0
 * @see https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js
 */

"use strict";

/* eslint-env node */

const ERROR = 'error';

module.exports = Object.freeze({
  rules: Object.freeze({
    // #region Possible Problems

    /*
     * Require `super()` calls in constructors
     * https://eslint.org/docs/rules/constructor-super
     * Type: problem
     * Recommended: Yes
     */
    'constructor-super': ERROR,

    /*
     * Enforce “for” loop update clause moving the counter in the right direction
     * https://eslint.org/docs/rules/for-direction
     * Type: problem
     * Recommended: Yes
     */
    'for-direction': ERROR,

    /*
     * Enforces that a return statement is present in property getters
     * https://eslint.org/docs/rules/getter-return
     * Type: problem
     * Recommended: Yes
     */
    'getter-return': [ERROR, { allowImplicit: false }],

    /*
     * Disallow using an async function as a Promise executor
     * https://eslint.org/docs/rules/no-async-promise-executor
     * Type: problem
     * Recommended: Yes
     */
    'no-async-promise-executor': ERROR,

    /*
     * Disallow modifying variables of class declarations
     * https://eslint.org/docs/rules/no-class-assign
     * Type: problem
     * Recommended: Yes
     */
    'no-class-assign': ERROR,

    /*
     * Disallow comparisons to negative zero
     * https://eslint.org/docs/rules/no-compare-neg-zero
     * Type: problem
     * Recommended: Yes
     */
    'no-compare-neg-zero': ERROR,

    /*
     * Disallow assignment in conditional expressions
     * https://eslint.org/docs/rules/no-cond-assign
     * Type: problem
     * Recommended: Yes
     */
    'no-cond-assign': [ERROR, 'always'],

    /*
     * Disallow modifying variables that are declared using `const`
     * https://eslint.org/docs/rules/no-const-assign
     * Type: problem
     * Recommended: Yes
     */
    'no-const-assign': ERROR,

    /*
     * Disallow use of constant expressions in conditions
     * https://eslint.org/docs/rules/no-constant-condition
     * Type: problem
     * Recommended: Yes
     */
    'no-constant-condition': [ERROR, { checkLoops: true }],

    /*
     * Disallow control characters in regular expressions
     * https://eslint.org/docs/rules/no-control-regex
     * Type: problem
     * Recommended: Yes
     */
    'no-control-regex': ERROR,

    /*
     * Disallow use of debugger
     * https://eslint.org/docs/rules/no-debugger
     * Type: problem
     * Recommended: Yes
     */
    'no-debugger': ERROR,

    /*
     * Disallow duplicate arguments in functions
     * https://eslint.org/docs/rules/no-dupe-args
     * Type: problem
     * Recommended: Yes
     */
    'no-dupe-args': ERROR,

    /*
     * Disallow duplicate class members
     * https://eslint.org/docs/rules/no-dupe-class-members
     * Type: problem
     * Recommended: Yes
     */
    'no-dupe-class-members': ERROR,

    /*
     * Disallow duplicate conditions in if-else-if chains
     * https://eslint.org/docs/rules/no-dupe-else-if
     * Type: problem
     * Recommended: Yes
     */
    'no-dupe-else-if': ERROR,

    /*
     * Disallow duplicate keys when creating object literals
     * https://eslint.org/docs/rules/no-dupe-keys
     * Type: problem
     * Recommended: Yes
     */
    'no-dupe-keys': ERROR,

    /*
     * Disallow a duplicate case label
     * https://eslint.org/docs/rules/no-duplicate-case
     * Type: problem
     * Recommended: Yes
     */
    'no-duplicate-case': ERROR,

    /*
     * Disallow the use of empty character classes in regular expressions
     * https://eslint.org/docs/rules/no-empty-character-class
     * Type: problem
     * Recommended: Yes
     */
    'no-empty-character-class': ERROR,

    /*
     * Disallow empty destructuring patterns
     * https://eslint.org/docs/rules/no-empty-pattern
     * Type: problem
     * Recommended: Yes
     */
    'no-empty-pattern': ERROR,

    /*
     * Disallow assigning to the exception in a catch block
     * https://eslint.org/docs/rules/no-ex-assign
     * Type: problem
     * Recommended: Yes
     */
    'no-ex-assign': ERROR,

    /*
     * Disallow fallthrough of case statements
     * https://eslint.org/docs/rules/no-fallthrough
     * Type: problem
     * Recommended: Yes
     */
    'no-fallthrough': ERROR,

    /*
     * Disallow overwriting functions written as function declarations
     * https://eslint.org/docs/rules/no-func-assign
     * Type: problem
     * Recommended: Yes
     */
    'no-func-assign': ERROR,

    /*
     * Disallow assigning to imported bindings
     * https://eslint.org/docs/rules/no-import-assign
     * Type: problem
     * Recommended: Yes
     */
    'no-import-assign': ERROR,

    /*
     * Disallow function or variable declarations in nested blocks
     * https://eslint.org/docs/rules/no-inner-declarations
     * Type: problem
     * Recommended: Yes
     */
    'no-inner-declarations': ERROR,

    /*
     * Disallow invalid regular expression strings in the RegExp constructor
     * https://eslint.org/docs/rules/no-invalid-regexp
     * Type: problem
     * Recommended: Yes
     */
    'no-invalid-regexp': ERROR,

    /*
     * Disallow irregular whitespace outside of strings and comments
     * https://eslint.org/docs/rules/no-irregular-whitespace
     * Type: problem
     * Recommended: Yes
     */
    'no-irregular-whitespace': [ERROR, { skipStrings: false }],

    /*
     * Disallow number literals that lose precision
     * https://eslint.org/docs/rules/no-loss-of-precision
     * Type: problem
     * Recommended: Yes
     */
    'no-loss-of-precision': ERROR,

    /*
     * Disallow characters which are made with multiple code points in character
     * class syntax.
     * https://eslint.org/docs/rules/no-misleading-character-class
     * Type: problem
     * Recommended: Yes
     */
    'no-misleading-character-class': ERROR,

    /*
     * Disallow symbol constructor
     * https://eslint.org/docs/rules/no-new-symbol
     * Type: problem
     * Recommended: Yes
     */
    'no-new-symbol': ERROR,

    /*
     * Disallow the use of object properties of the global object
     * (`Math` and `JSON`) as functions.
     * https://eslint.org/docs/rules/no-obj-calls
     * Type: problem
     * Recommended: Yes
     */
    'no-obj-calls': ERROR,

    /*
     * Disallow calling some `Object.prototype` methods directly on objects
     * https://eslint.org/docs/rules/no-prototype-builtins
     * Type: problem
     * Recommended: Yes
     */
    'no-prototype-builtins': ERROR,

    /*
     * Disallow self assignment
     * https://eslint.org/docs/rules/no-self-assign
     * Type: problem
     * Recommended: Yes
     */
    'no-self-assign': [ERROR, { props: true }],

    /*
     * Disallow returning values from setters
     * https://eslint.org/docs/rules/no-setter-return
     * Type: problem
     * Recommended: Yes
     */
    'no-setter-return': ERROR,

    /*
     * Disallow sparse arrays
     * https://eslint.org/docs/rules/no-sparse-arrays
     * Type: problem
     * Recommended: Yes
     */
    'no-sparse-arrays': ERROR,

    /*
     * Disallow to use `this`/`super` before `super()` calling in constructors.
     * https://eslint.org/docs/rules/no-this-before-super
     * Type: problem
     * Recommended: Yes
     */
    'no-this-before-super': ERROR,

    /*
     * Disallow the use of undeclared variables unless mentioned in `global`
     * comments.
     * https://eslint.org/docs/rules/no-undef
     * Type: problem
     * Recommended: Yes
     */
    'no-undef': [ERROR, { typeof: true }],

    /*
     * Avoid code that looks like two expressions but is actually one
     * https://eslint.org/docs/rules/no-unexpected-multiline
     * Type: problem
     * Recommended: Yes
     */
    'no-unexpected-multiline': ERROR,

    /*
     * Disallow unreachable statements after a `return`, `throw`, `continue`, or
     * `break` statement.
     * https://eslint.org/docs/rules/no-unreachable
     * Type: problem
     * Recommended: Yes
     */
    'no-unreachable': ERROR,

    /*
     * Disallow return/throw/break/continue inside finally blocks
     * https://eslint.org/docs/rules/no-unsafe-finally
     * Type: problem
     * Recommended: Yes
     */
    'no-unsafe-finally': ERROR,

    /*
     * Disallow negating the left operand of relational operators
     * https://eslint.org/docs/rules/no-unsafe-negation
     * Type: problem
     * Recommended: Yes
     */
    'no-unsafe-negation': [ERROR, { enforceForOrderingRelations: true }],

    /*
     * Disallow use of optional chaining in contexts where the undefined value is not allowed
     * https://eslint.org/docs/rules/no-unsafe-optional-chaining
     * Type: problem
     * Recommended: Yes
     */
    'no-unsafe-optional-chaining': [
      ERROR,
      { disallowArithmeticOperators: true },
    ],

    /*
     * Disallow declaration of variables that are not used in the code
     * https://eslint.org/docs/rules/no-unused-vars
     * Type: problem
     * Recommended: Yes
     */
    'no-unused-vars': [
      ERROR,
      {
        args: 'after-used',
        argsIgnorePattern: '^ignore$',
        caughtErrors: 'all',
        vars: 'all',
        varsIgnorePattern: '^ignore$',
      },
    ],

    /*
     * Disallow useless backreferences in regular expressions
     * https://eslint.org/docs/rules/no-useless-backreference
     * Type: problem
     * Recommended: Yes
     */
    'no-useless-backreference': ERROR,

    /*
     * Disallow comparisons with the value `NaN`
     * https://eslint.org/docs/rules/use-isnan
     * Type: problem
     * Recommended: Yes
     */
    'use-isnan': [
      ERROR,
      { enforceForSwitchCase: true, enforceForIndexOf: true },
    ],

    /*
     * Enforce comparing `typeof` expressions against valid strings
     * https://eslint.org/docs/rules/valid-typeof
     * Type: problem
     * Recommended: Yes
     */
    'valid-typeof': [ERROR, { requireStringLiterals: true }],

    // #endregion Possible Problems

    // #region Suggestions

    /*
     * Disallow lexical declarations in case/default clauses
     * https://eslint.org/docs/rules/no-case-declarations
     * Type: suggestion
     * Recommended: Yes
     */
    'no-case-declarations': ERROR,

    /*
     * Disallow deletion of variables
     * https://eslint.org/docs/rules/no-delete-var
     * Type: suggestion
     * Recommended: Yes
     */
    'no-delete-var': ERROR,

    /*
     * Disallow empty statements
     * https://eslint.org/docs/rules/no-empty
     * Type: suggestion
     * Recommended: Yes
     */
    'no-empty': ERROR,

    /*
     * Disallow double-negation boolean casts in a boolean context
     * https://eslint.org/docs/rules/no-extra-boolean-cast
     * Type: suggestion
     * Recommended: Yes
     */
    'no-extra-boolean-cast': [ERROR, { enforceForLogicalOperands: true }],

    /*
     * Disallow unnecessary semicolons
     * https://eslint.org/docs/rules/no-extra-semi
     * Type: suggestion
     * Recommended: Yes
     */
    'no-extra-semi': ERROR,

    /*
     * Disallow reassignments of native objects or read-only globals
     * https://eslint.org/docs/rules/no-global-assign
     * Type: suggestion
     * Recommended: Yes
     */
    'no-global-assign': [ERROR, { exceptions: [] }],

    /*
     * Disallow \8 and \9 escape sequences in string literals
     * https://eslint.org/docs/rules/no-nonoctal-decimal-escape
     * Type: suggestion
     * Recommended: Yes
     */
    'no-nonoctal-decimal-escape': ERROR,

    /*
     * Disallow use of (old style) octal literals
     * https://eslint.org/docs/rules/no-octal
     * Type: suggestion
     * Recommended: Yes
     */
    'no-octal': ERROR,

    /*
     * Disallow declaring the same variable more than once
     * https://eslint.org/docs/rules/no-redeclare
     * Type: suggestion
     * Recommended: Yes
     */
    'no-redeclare': ERROR,

    /*
     * Disallow multiple spaces in a regular expression literal
     * https://eslint.org/docs/rules/no-regex-spaces
     * Type: suggestion
     * Recommended: Yes
     */
    'no-regex-spaces': ERROR,

    /*
     * Disallow shadowing of names such as arguments
     * https://eslint.org/docs/rules/no-shadow-restricted-names
     * Type: suggestion
     * Recommended: Yes
     */
    'no-shadow-restricted-names': ERROR,

    /*
     * Disallow unused labels
     * https://eslint.org/docs/rules/no-unused-labels
     * Type: suggestion
     * Recommended: Yes
     */
    'no-unused-labels': ERROR,

    /*
     * Disallow unnecessary catch clauses
     * https://eslint.org/docs/rules/no-useless-catch
     * Type: suggestion
     * Recommended: Yes
     */
    'no-useless-catch': ERROR,

    /*
     * Disallow unnecessary string escaping
     * https://eslint.org/docs/rules/no-useless-escape
     * Type: suggestion
     * Recommended: Yes
     */
    'no-useless-escape': ERROR,

    /*
     * Disallow use of the with statement
     * https://eslint.org/docs/rules/no-with
     * Type: suggestion
     * Recommended: Yes
     */
    'no-with': ERROR,

    /*
     * Disallow generator functions that do not have yield
     * https://eslint.org/docs/rules/require-yield
     * Type: suggestion
     * Recommended: Yes
     */
    'require-yield': ERROR,

    // #endregion Suggestions

    // #region Layout & Formatting

    /*
     * Disallow mixed spaces and tabs for indentation
     * https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
     * Type: layout
     * Recommended: Yes
     */
    'no-mixed-spaces-and-tabs': ERROR,

    // #endregion Layout & Formatting
  }),
});

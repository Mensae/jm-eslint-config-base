/**
 * @file Configuration only concerned with problems and best practices.
 * @author Johan Meester
 * @see LICENSE file in root directory for full license.
 */

/* eslint-env node */

const restrictedGlobals = require('confusing-browser-globals');

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

module.exports = Object.freeze({
  env: {
    es2022: true
  },

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },

  plugins: [
    '@getify/proper-arrows',
    '@getify/proper-ternary',
    '@jm/no-optional-call',
    'import',
    'unicorn',
    'eslint-plugin-no-only-tests',
    'jsdoc'
  ],

  reportUnusedDisableDirectives: true,

  rules: Object.freeze({
    // #region ESLint Core Rules

    // #region Possible Problems

    /*
     * Enforces return statements in callbacks of array's methods
     * https://eslint.org/docs/rules/array-callback-return
     * Type: problem
     */
    'array-callback-return': [
      ERROR,
      {
        allowImplicit: false,
        checkForEach: true
      }
    ],

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
     * Disallow await inside of loops
     * https://eslint.org/docs/rules/no-await-in-loop
     * Type: problem
     */
    'no-await-in-loop': OFF,

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
     * Disallows expressions where the operation doesn't affect the value
     * https://eslint.org/docs/rules/no-constant-binary-expression
     * Type: problem
     */
    'no-constant-binary-expression': ERROR,

    /*
     * Disallow use of constant expressions in conditions
     * https://eslint.org/docs/rules/no-constant-condition
     * Type: problem
     */
    'no-constant-condition': [ERROR, { checkLoops: false }],

    /*
     * Disallow returning value in constructor
     * https://eslint.org/docs/rules/no-constructor-return
     * Type: problem
     */
    'no-constructor-return': ERROR,

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
     * Disallow importing from the same path more than once
     * https://eslint.org/docs/rules/no-duplicate-imports
     * Type: problem
     */
    // Override with https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'no-duplicate-imports': OFF,

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
     * Disallow `new` operators with global non-constructor functions
     * https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
     * Type: problem
     */
    'no-new-native-nonconstructor': ERROR,

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
     * Disallow returning values from Promise executor functions
     * https://eslint.org/docs/rules/no-promise-executor-return
     * Type: problem
     */
    'no-promise-executor-return': ERROR,

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
     * Disallow comparisons where both sides are exactly the same
     * https://eslint.org/docs/rules/no-self-compare
     * Type: problem
     */
    'no-self-compare': ERROR,

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
     * Disallow template literal placeholder syntax in regular strings
     * https://eslint.org/docs/rules/no-template-curly-in-string
     * Type: problem
     */
    'no-template-curly-in-string': ERROR,

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
     * Note: If you do enable this rule, you have to run ESLint and Prettier as
     * two separate steps (and ESLint first) in order to get any value out of it.
     */
    'no-unexpected-multiline': ERROR,

    /*
     * Disallow unmodified conditions of loops
     * https://eslint.org/docs/rules/no-unmodified-loop-condition
     * Type: problem
     */
    'no-unmodified-loop-condition': ERROR,

    /*
     * Disallow unreachable statements after a return, throw, continue, or break statement
     * https://eslint.org/docs/rules/no-unreachable
     * Type: problem
     * Recommended: Yes
     */
    'no-unreachable': ERROR,

    /*
     * Disallow loops with a body that allows only one iteration
     * https://eslint.org/docs/rules/no-unreachable-loop
     * Type: problem
     */
    'no-unreachable-loop': ERROR,

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
      { disallowArithmeticOperators: true }
    ],

    /*
     * Disallow Unused Private Class Members
     * https://eslint.org/docs/rules/no-unused-private-class-members
     * Type: problem
     */
    'no-unused-private-class-members': ERROR,

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
        varsIgnorePattern: '^ignore$'
      }
    ],

    /*
     * Disallow use of variables before they are defined
     * https://eslint.org/docs/rules/no-use-before-define
     * Type: problem
     */
    'no-use-before-define': [
      ERROR,
      {
        classes: true,
        functions: true,
        variables: true,
        allowNamedExports: false
      }
    ],

    /*
     * Disallow useless backreferences in regular expressions
     * https://eslint.org/docs/rules/no-useless-backreference
     * Type: problem
     * Recommended: Yes
     */
    'no-useless-backreference': ERROR,

    /*
     * Disallow assignments that can lead to race conditions due to usage of
     * `await` or `yield`.
     * https://eslint.org/docs/rules/require-atomic-updates
     * Note: Rule is very buggy
     * Type: problem
     */
    'require-atomic-updates': WARN,

    /*
     * Disallow comparisons with the value `NaN`
     * https://eslint.org/docs/rules/use-isnan
     * Type: problem
     * Recommended: Yes
     */
    'use-isnan': [
      ERROR,
      { enforceForSwitchCase: true, enforceForIndexOf: true }
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
     * Enforces getter/setter pairs in objects
     * https://eslint.org/docs/rules/accessor-pairs
     * Type: suggestion
     */
    'accessor-pairs': [
      ERROR,
      {
        setWithoutGet: true,
        getWithoutSet: false,
        enforceForClassMembers: true
      }
    ],

    /*
     * Require return statements to either always or never specify values
     * https://eslint.org/docs/rules/consistent-return
     * Type: suggestion
     */
    'consistent-return': ERROR,

    /*
     * Specify curly brace conventions for all control statements
     * https://eslint.org/docs/rules/curly
     * Type: suggestion
     * See: https://github.com/prettier/eslint-config-prettier/blob/main/README.md#curly
     */
    curly: [ERROR, 'all'],

    /*
     * encourages use of dot notation whenever possible
     * https://eslint.org/docs/rules/dot-notation
     * Type: suggestion
     */
    'dot-notation': [ERROR, { allowKeywords: true }],

    /*
     * Require the use of `===` and `!==`
     * https://eslint.org/docs/rules/eqeqeq
     * Type: suggestion
     */
    eqeqeq: [ERROR, 'always', { null: 'ignore' }],

    /*
     * Enforce default clauses in switch statements to be last
     * https://eslint.org/docs/rules/default-case-last
     * Type: suggestion
     */
    'default-case-last': ERROR,

    /*
     * Require grouped accessor pairs in object literals and classes
     * https://eslint.org/docs/rules/grouped-accessor-pairs
     * Type: suggestion
     */
    'grouped-accessor-pairs': [ERROR, 'getBeforeSet'],

    /*
     * Require a capital letter for constructors
     * https://eslint.org/docs/rules/new-cap
     * Type: suggestion
     */
    'new-cap': [
      ERROR,
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List']
      }
    ],

    /*
     * Disallow the use of alert, confirm, and prompt
     * https://eslint.org/docs/rules/no-alert
     * Type: suggestion
     */
    'no-alert': ERROR,

    /*
     * Disallow `Array` constructors
     * https://eslint.org/docs/rules/no-array-constructor
     * Type: suggestion
     */
    'no-array-constructor': ERROR,

    /*
     * Disallow use of `arguments.caller` or `arguments.callee`
     * https://eslint.org/docs/rules/no-caller
     * Type: suggestion
     */
    'no-caller': ERROR,

    /*
     * Disallow lexical declarations in case/default clauses
     * https://eslint.org/docs/rules/no-case-declarations
     * Type: suggestion
     * Recommended: Yes
     */
    'no-case-declarations': ERROR,

    /*
     * Disallow arrow functions where they could be confused with comparisons
     * https://eslint.org/docs/rules/no-confusing-arrow
     * Type: suggestion
     * See: https://github.com/prettier/eslint-config-prettier/blob/main/README.md#no-confusing-arrow
     */
    'no-confusing-arrow': [ERROR, { allowParens: false }],

    /*
     * Disallow use of console
     * https://eslint.org/docs/rules/no-console
     * Type: suggestion
     */
    'no-console': WARN,

    /*
     * Disallow deletion of variables
     * https://eslint.org/docs/rules/no-delete-var
     * Type: suggestion
     * Recommended: Yes
     */
    'no-delete-var': ERROR,

    /*
     * Disallow `else` after a return in an `if`
     * https://eslint.org/docs/rules/no-else-return
     * Type: suggestion
     */
    'no-else-return': [ERROR, { allowElseIf: false }],

    /*
     * Disallow empty statements
     * https://eslint.org/docs/rules/no-empty
     * Type: suggestion
     * Recommended: Yes
     */
    'no-empty': ERROR,

    /*
     * Disallow use of `eval()`
     * https://eslint.org/docs/rules/no-eval
     * Type: suggestion
     */
    'no-eval': ERROR,

    /*
     * Disallow adding to native types
     * https://eslint.org/docs/rules/no-extend-native
     * Type: suggestion
     */
    'no-extend-native': ERROR,

    /*
     * Disallow unnecessary function binding
     * https://eslint.org/docs/rules/no-extra-bind
     * Type: suggestion
     */
    'no-extra-bind': ERROR,

    /*
     * Disallow double-negation boolean casts in a boolean context
     * https://eslint.org/docs/rules/no-extra-boolean-cast
     * Type: suggestion
     * Recommended: Yes
     */
    'no-extra-boolean-cast': [ERROR, { enforceForLogicalOperands: true }],

    /*
     * Disallow unnecessary labels
     * https://eslint.org/docs/rules/no-extra-label
     * Type: suggestion
     */
    'no-extra-label': ERROR,

    /*
     * Disallow unnecessary semicolons
     * https://eslint.org/docs/rules/no-extra-semi
     * Type: suggestion
     * Recommended: Yes
     */
    'no-extra-semi': OFF, // No styling here

    /*
     * Disallow reassignments of native objects or read-only globals
     * https://eslint.org/docs/rules/no-global-assign
     * Type: suggestion
     * Recommended: Yes
     */
    'no-global-assign': [ERROR, { exceptions: [] }],

    /*
     * Disallow use of `eval()`-like methods
     * https://eslint.org/docs/rules/no-implied-eval
     * Type: suggestion
     */
    'no-implied-eval': ERROR,

    /*
     * Disallow usage of `__iterator__` property
     * https://eslint.org/docs/rules/no-iterator
     * Type: suggestion
     */
    'no-iterator': ERROR,

    /*
     * Disallow labels that share a name with a variable
     * https://eslint.org/docs/rules/no-label-var
     * Type: suggestion
     */
    'no-label-var': ERROR,

    /*
     * Disallow use of labels for anything other than loops and switches
     * https://eslint.org/docs/rules/no-labels
     * Type: suggestion
     */
    'no-labels': [ERROR, { allowLoop: false, allowSwitch: false }],

    /*
     * Disallow unnecessary nested blocks
     * https://eslint.org/docs/rules/no-lone-blocks
     * Type: suggestion
     */
    'no-lone-blocks': ERROR,

    /*
     * Disallow `if` as the only statement in an `else` block
     * https://eslint.org/docs/rules/no-lonely-if
     * Type: suggestion
     */
    'no-lonely-if': ERROR,

    /*
     * Disallow creation of functions within loops
     * https://eslint.org/docs/rules/no-loop-func
     * Type: suggestion
     */
    'no-loop-func': ERROR,

    /*
     * Disallow mixed binary operators
     * https://eslint.org/docs/rules/no-mixed-operators
     * Type: suggestion
     */
    'no-mixed-operators': [
      ERROR,
      {
        groups: [
          ['%', '**'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['/', '*'],
          ['&', '|', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!=='],
          ['&&', '||']
        ],
        allowSamePrecedence: false
      }
    ],

    /*
     * Disallow use of multiline strings
     * https://eslint.org/docs/rules/no-multi-str
     * Type: suggestion
     */
    'no-multi-str': ERROR,

    /*
     * Disallow nested ternary expressions
     * https://eslint.org/docs/rules/no-nested-ternary
     * Type: suggestion
     */
    'no-nested-ternary': ERROR,

    /*
     * Disallow use of new operator when not part of the assignment or comparison
     * https://eslint.org/docs/rules/no-new
     * Type: suggestion
     */
    'no-new': ERROR,

    /*
     * Disallow `new` operators with the `Function` object
     * https://eslint.org/docs/rules/no-new-func
     * Type: suggestion
     */
    'no-new-func': ERROR,

    /*
     * Disallow `Object` constructors
     * https://eslint.org/docs/latest/rules/no-new-object
     * Type: suggestion
     */
    'no-new-object': ERROR,

    /*
     * Disallows creating new instances of `String`, `Number`, and `Boolean`
     * https://eslint.org/docs/rules/no-new-wrappers
     * Type: suggestion
     */
    'no-new-wrappers': ERROR,

    /*
     * Disallow `\8` and `\9` escape sequences in string literals
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
     * Disallow octal escape sequences in string literals
     * https://eslint.org/docs/rules/no-octal-escape
     * Type: suggestion
     */
    'no-octal-escape': ERROR,

    /*
     * Disallow usage of `__proto__` property
     * https://eslint.org/docs/rules/no-proto
     * Type: suggestion
     */
    'no-proto': ERROR,

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
     * Disallow specified names in exports
     * https://eslint.org/docs/rules/no-restricted-exports
     * Type: suggestion
     */
    'no-restricted-exports': [
      ERROR,
      {
        restrictedNamedExports: ['default', 'then']
      }
    ],

    /*
     * Disallow specific globals
     * https://eslint.org/docs/rules/no-restricted-globals
     * https://github.com/facebook/create-react-app/tree/main/packages/confusing-browser-globals
     * Type: suggestion
     */
    'no-restricted-globals': [
      ERROR,
      {
        name: 'isFinite',
        message:
          'Use `Number.isFinite(..)` instead, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite#difference_between_number.isfinite_and_global_isfinite'
      },
      {
        name: 'isNaN',
        message:
          'Use `Number.isNaN(..)` instead, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN#difference_between_number.isnan_and_global_isnan'
      }
    ].concat(restrictedGlobals),

    /*
     * Disallow specified syntax
     * https://eslint.org/docs/rules/no-restricted-syntax
     * Type: suggestion
     */
    'no-restricted-syntax': [
      ERROR,
      {
        selector:
          "BinaryExpression[operator='instanceof'][right.name='Object']",
        message: 'Use `typeof` rather than `instanceof Object`.'
      }
    ],

    /*
     * Disallow redundant `return await`
     * https://eslint.org/docs/rules/no-return-await
     * Type: suggestion
     */
    'no-return-await': ERROR,

    /*
     * Disallow use of `javascript:` urls.
     * https://eslint.org/docs/rules/no-script-url
     * Type: suggestion
     */
    'no-script-url': ERROR,

    /*
     * Disallow use of comma operator
     * https://eslint.org/docs/rules/no-sequences
     * Type: suggestion
     */
    'no-sequences': [ERROR, { allowInParentheses: false }],

    /*
     * Disallow declaration of variables already declared in the outer scope
     * https://eslint.org/docs/rules/no-shadow
     * Type: suggestion
     */
    'no-shadow': [
      ERROR,
      {
        builtinGlobals: true,
        hoist: 'functions',
        allow: ['defaultStatus', 'event', 'find', 'length', 'name', 'status'],
        ignoreOnInitialization: false
      }
    ],

    /*
     * Disallow shadowing of names such as arguments
     * https://eslint.org/docs/rules/no-shadow-restricted-names
     * Type: suggestion
     * Recommended: Yes
     */
    'no-shadow-restricted-names': ERROR,

    /*
     * Restrict what can be thrown as an exception
     * https://eslint.org/docs/rules/no-throw-literal
     * Type: suggestion
     */
    'no-throw-literal': ERROR,

    /*
     * Disallow use of `undefined` when initializing variables
     * https://eslint.org/docs/rules/no-undef-init
     * Type: suggestion
     */
    'no-undef-init': ERROR,

    /*
     * Disallow ternary operators when simpler alternatives exist
     * https://eslint.org/docs/rules/no-unneeded-ternary
     * Type: suggestion
     */
    'no-unneeded-ternary': [ERROR, { defaultAssignment: false }],

    /*
     * Disallow usage of expressions in statement position
     * https://eslint.org/docs/rules/no-unused-expressions
     * Type: suggestion
     */
    'no-unused-expressions': [
      ERROR,
      {
        allowShortCircuit: false,
        allowTaggedTemplates: false,
        allowTernary: false,
        enforceForJSX: true
      }
    ],

    /*
     * Disallow unused labels
     * https://eslint.org/docs/rules/no-unused-labels
     * Type: suggestion
     * Recommended: Yes
     */
    'no-unused-labels': ERROR,

    /*
     * Disallow unnecessary `.call()` and `.apply()`
     * https://eslint.org/docs/rules/no-useless-call
     * Type: suggestion
     */
    'no-useless-call': ERROR,

    /*
     * Disallow unnecessary catch clauses
     * https://eslint.org/docs/rules/no-useless-catch
     * Type: suggestion
     * Recommended: Yes
     */
    'no-useless-catch': ERROR,

    /*
     * Disallow useless computed property keys
     * https://eslint.org/docs/rules/no-useless-computed-key
     * Type: suggestion
     */
    'no-useless-computed-key': ERROR,

    /*
     * Disallow useless string concatenation
     * https://eslint.org/docs/rules/no-useless-concat
     * Type: suggestion
     */
    'no-useless-concat': ERROR,

    /*
     * Disallow unnecessary constructor
     * https://eslint.org/docs/rules/no-useless-constructor
     * Type: suggestion
     */
    'no-useless-constructor': ERROR,

    /*
     * Disallow unnecessary string escaping
     * https://eslint.org/docs/rules/no-useless-escape
     * Type: suggestion
     * Recommended: Yes
     */
    'no-useless-escape': ERROR,

    /*
     * Disallow renaming import, export, and destructured assignments to the
     * same name.
     * https://eslint.org/docs/rules/no-useless-rename
     * Type: suggestion
     */
    'no-useless-rename': [
      ERROR,
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false
      }
    ],

    /*
     * Disallow redundant `return;` statements
     * https://eslint.org/docs/rules/no-useless-return
     * Type: suggestion
     */
    'no-useless-return': ERROR,

    /*
     * Require `let` or `const` instead of `var`
     * https://eslint.org/docs/rules/no-var
     * Type: suggestion
     */
    'no-var': ERROR,

    /*
     * Disallow use of the with statement
     * https://eslint.org/docs/rules/no-with
     * Type: suggestion
     * Recommended: Yes
     */
    'no-with': ERROR,

    /*
     * Require method and property shorthand syntax for object literals
     * https://eslint.org/docs/rules/object-shorthand
     * Type: suggestion
     */
    'object-shorthand': ERROR,

    /*
     * Require or disallow assignment operator shorthand where possible
     * https://eslint.org/docs/rules/operator-assignment
     * Type: suggestion
     */
    'operator-assignment': [ERROR, 'always'],

    /*
     * Require using arrow functions for callbacks
     * https://eslint.org/docs/rules/prefer-arrow-callback
     * Type: suggestion
     */
    'prefer-arrow-callback': [
      ERROR,
      {
        allowNamedFunctions: false,
        allowUnboundThis: true
      }
    ],

    /*
     * Require `const` declarations for variables that are never reassigned
     * after declared.
     * https://eslint.org/docs/rules/prefer-const
     */
    'prefer-const': [
      ERROR,
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true
      }
    ],

    /*
     * Prefer destructuring from arrays and objects
     * https://eslint.org/docs/rules/prefer-destructuring
     * Type: suggestion
     */
    'prefer-destructuring': [
      ERROR,
      {
        AssignmentExpression: {
          array: true,
          object: false
        },
        VariableDeclarator: {
          array: false,
          object: true
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],

    /*
     * Disallow the use of `Math.pow` in favor of the `**` operator
     * https://eslint.org/docs/rules/prefer-exponentiation-operator
     * Type: suggestion
     */
    'prefer-exponentiation-operator': ERROR,

    /*
     * Disallow `parseInt()` in favor of binary, octal, and hexadecimal literals
     * https://eslint.org/docs/rules/prefer-numeric-literals
     * Type: suggestion
     */
    'prefer-numeric-literals': ERROR,

    /*
     * Prefer use of an object spread over `Object.assign`
     * https://eslint.org/docs/rules/prefer-object-spread
     * Type: suggestion
     */
    'prefer-object-spread': ERROR,

    /*
     * Require using `Error` objects as Promise rejection reasons
     * https://eslint.org/docs/rules/prefer-promise-reject-errors
     * Type: suggestion
     */
    'prefer-promise-reject-errors': [ERROR, { allowEmptyReject: false }],

    /*
     * Disallow use of the RegExp constructor in favor of regular expression literals
     * https://eslint.org/docs/rules/prefer-regex-literals
     * Type: suggestion
     */
    'prefer-regex-literals': [ERROR, { disallowRedundantWrapping: true }],

    /*
     * Require rest parameters instead of `arguments`
     * https://eslint.org/docs/rules/prefer-rest-params
     * Type: suggestion
     */
    'prefer-rest-params': ERROR,

    /*
     * Require spread operators instead of `.apply()`
     * https://eslint.org/docs/rules/prefer-spread
     * Type: suggestion
     */
    'prefer-spread': ERROR,

    /*
     * Require template literals instead of string concatenation
     * https://eslint.org/docs/rules/prefer-template
     * Type: suggestion
     */
    'prefer-template': ERROR,

    /*
     * Disallow generator functions that do not have yield
     * https://eslint.org/docs/rules/require-yield
     * Type: suggestion
     * Recommended: Yes
     */
    'require-yield': ERROR,

    /*
     * Require or disallow strict mode directives
     * https://eslint.org/docs/rules/strict
     * Type: suggestion
     */
    strict: [ERROR, 'safe'],

    /*
     * Require or disallow Yoda conditions
     * https://eslint.org/docs/rules/yoda
     * Type: suggestion
     */
    yoda: [ERROR, 'never', { onlyEquality: true }],

    // #endregion Suggestions

    // #region Layout & Formatting

    /*
     * Disallow mixed spaces and tabs for indentation
     * https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
     * Type: layout
     * Recommended: Yes
     */
    'no-mixed-spaces-and-tabs': OFF, // No styling here

    // #endregion Layout & Formatting

    // #endregion ESLint Core Rules

    // #region PLUGINS

    // #region @getify/proper-arrows

    /*
     * Control various aspects of arrow function parameters to keep them readable
     * https://github.com/getify/eslint-plugin-proper-arrows/#rule-params
     * Type: problem
     */
    '@getify/proper-arrows/params': [
      ERROR,
      {
        unused: 'trailing',
        count: 2,
        length: 3,
        allowed: ['e', 'v', 'cb', 'fn', 'pr']
      }
    ],

    /*
     * Require arrow functions to receive inferenced names
     * https://github.com/getify/eslint-plugin-proper-arrows/#rule-name
     * Type: problem
     */
    '@getify/proper-arrows/name': ERROR,

    /*
     * Control various aspects of arrow function returns to keep them readable
     * https://github.com/getify/eslint-plugin-proper-arrows/#rule-return
     * Type: problem
     */
    '@getify/proper-arrows/return': [ERROR, { ternary: 1 }],

    /*
     * Forbid arrow functions from various locations
     * https://github.com/getify/eslint-plugin-proper-arrows/#rule-where
     * Type: problem
     */
    '@getify/proper-arrows/where': ERROR,

    /*
     * Require arrow functions to reference the 'this' keyword
     * https://github.com/getify/eslint-plugin-proper-arrows/#rule-this
     * Type: problem
     */
    '@getify/proper-arrows/this': [ERROR, 'nested', { 'no-global': true }],

    // #endregion @getify/proper-arrows

    // #region @getify/proper-ternary

    /*
     * Controls the nesting of `? :` ternary expressions.
     * https://github.com/getify/eslint-plugin-proper-ternary/#rule-nested
     * Type: problem
     */
    '@getify/proper-ternary/nested': [ERROR, { else: true, depth: 10 }],

    /*
     * Requires surrounding `( .. )` parentheses around specific kinds of
     * expressions in ternary expression clauses.
     * https://github.com/getify/eslint-plugin-proper-ternary/#rule-parens
     * Type: problem
     */
    '@getify/proper-ternary/parens': [
      ERROR,
      { ternary: false, call: false, object: false }
    ],

    /*
     * Restricts where in program structure ternary expressions can be used:
     * forbidding them as standalone statements, in object properties, as
     * arguments, etc.
     * https://github.com/getify/eslint-plugin-proper-ternary/#rule-where
     * Type: problem
     */
    '@getify/proper-ternary/where': [ERROR, { return: false }],

    // #endregion @getify/proper-ternary

    // #region @jm/no-optional-call

    /*
     * Disables the use of the optional-call operator
     * https://github.com/getify/eslint-plugin-no-optional-call
     * Type: problem
     */
    '@jm/no-optional-call/no-optional-call': ERROR,

    // #endregion @jm/no-optional-call

    // #region import

    // #region import->Helpful warnings

    /*
     * Forbid any invalid exports, i.e. re-export of the same name.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md
     * Type: problem
     * Recommended: true
     */
    'import/export': ERROR,

    /*
     * Forbid imported names marked with `@deprecated` documentation tag.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-deprecated.md
     * Type: suggestion
     */
    'import/no-deprecated': ERROR,

    /*
     * Forbid empty named import blocks.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-empty-named-blocks.md
     * Type: suggestion
     */
    'import/no-empty-named-blocks': ERROR,

    /*
     * Forbid the use of mutable exports with `var` or `let`.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
     * Type: suggestion
     */
    'import/no-mutable-exports': ERROR,

    /*
     * Forbid use of exported name as identifier of default export.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md
     * Type: problem
     * Recommended: true
     */
    'import/no-named-as-default': ERROR,

    /*
     * Forbid use of exported name as property of default export.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
     * Type: suggestion
     * Recommended: true
     */
    'import/no-named-as-default-member': ERROR,

    /*
     * Forbid modules without exports, or exports without matching import in
     * another module.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unused-modules.md
     * Type: suggestion
     */
    'import/no-unused-modules': [
      ERROR,
      { missingExports: false, unusedExports: true }
    ],

    // #endregion import->Helpful warnings

    // #region import->Static analysis

    /*
     * Ensure a default export is present, given a default import.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md
     * Type: problem
     * Recommended: true
     */
    'import/default': ERROR,

    /*
     * Ensure named imports correspond to a named export in the remote file.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md
     * Type: problem
     * Recommended: true
     */
    'import/named': [ERROR, { commonjs: true }],

    /*
     * Ensure imported namespaces contain dereferenced properties as they are
     * dereferenced.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
     * Type: problem
     * Recommended: true
     */
    'import/namespace': ERROR,

    /*
     * Forbid import of modules using absolute paths.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
     * Type: suggestion
     */
    'import/no-absolute-path': ERROR,

    /*
     * Forbid a module from importing a module with a dependency path back to
     * itself.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
     * Type: suggestion
     */
    'import/no-cycle': [ERROR, { commonjs: true }],

    /*
     * Forbid `require()` calls with expressions.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md
     * Type: suggestion
     */
    'import/no-dynamic-require': [ERROR, { esmodule: true }],

    /*
     * Forbid importing packages through relative paths.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md
     * Type: suggestion
     */
    'import/no-relative-packages': ERROR,

    /*
     * Forbid a module from importing itself.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
     * Type: problem
     */
    'import/no-self-import': ERROR,

    /*
     * Ensure imports point to a file/module that can be resolved.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
     * Type: problem
     * Recommended: true
     */
    'import/no-unresolved': [
      ERROR,
      { commonjs: true, caseSensitiveStrict: true }
    ],

    /*
     * Forbid unnecessary path segments in import and require statements.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
     * Type:
     */
    'import/no-useless-path-segments': [ERROR, { commonjs: true }],

    /*
     * Forbid webpack loader syntax in imports.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md
     * Type:
     */
    'import/no-webpack-loader-syntax': ERROR,

    // #endregion import->Static analysis

    // #endregion import

    // #region unicorn

    /*
     * Improve regexes by making them shorter, consistent, and safer.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-regex.md
     * Recommended: Yes
     */
    'unicorn/better-regex': ERROR,

    /*
     * Enforce a specific parameter name in catch clauses.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/catch-error-name.md
     * Recommended: Yes
     */
    'unicorn/catch-error-name': ERROR,

    /*
     * Use destructured variables over properties.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-destructuring.md
     * Recommended: Yes
     */
    'unicorn/consistent-destructuring': ERROR,

    /*
     * Enforce correct `Error` subclassing.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/custom-error-definition.md
     */
    'unicorn/custom-error-definition': ERROR,

    /*
     * Enforce passing a `message` value when creating a built-in error.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/error-message.md
     * Recommended: Yes
     */
    'unicorn/error-message': ERROR,

    /*
     * Enforce explicitly comparing the `length` or `size` property of a value.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/explicit-length-check.md
     * Recommended: Yes
     */
    'unicorn/explicit-length-check': ERROR,

    /*
     * Enforce the use of `new` for all builtins, except
     * `String`, `Number`, `Boolean`, `Symbol` and `BigInt`.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/new-for-builtins.md
     * Recommended: Yes
     */
    'unicorn/new-for-builtins': ERROR,

    /*
     * Enforce specifying rules to disable in `eslint-disable` comments.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-abusive-eslint-disable.md
     * Recommended: Yes
     * Used by Mozilla
     */
    'unicorn/no-abusive-eslint-disable': ERROR,

    /*
     * Prevent passing a function reference directly to iterator methods.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-callback-reference.md
     * Recommended: Yes
     */
    'unicorn/no-array-callback-reference': OFF,

    /*
     * Prefer `for…of` over the `forEach` method.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md
     * Recommended: Yes
     */
    'unicorn/no-array-for-each': OFF,

    /*
     * Disallow using the `this` argument in array methods.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-method-this-argument.md
     * Recommended: Yes
     */
    'unicorn/no-array-method-this-argument': ERROR,

    /*
     * Enforce combining multiple `Array#push()` into one call.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-push-push.md
     * Recommended: Yes
     * Used by Mozilla
     */
    'unicorn/no-array-push-push': ERROR,

    /*
     * Disallow member access from await expression.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-await-expression-member.md
     * Recommended: Yes
     */
    'unicorn/no-await-expression-member': ERROR,

    /*
     * Disallow empty files.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-empty-file.md
     * Recommended: Yes
     */
    'unicorn/no-empty-file': ERROR,

    /*
     * Do not use a `for` loop that can be replaced with a `for-of` loop.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-for-loop.md
     * Recommended: Yes
     */
    'unicorn/no-for-loop': ERROR,

    /*
     * Enforce the use of Unicode escapes instead of hexadecimal escapes.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-hex-escape.md
     * Recommended: Yes
     */
    'unicorn/no-hex-escape': ERROR,

    /*
     * Require `Array.isArray()` instead of `instanceof Array`.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-instanceof-array.md
     * Recommended: Yes
     * Used by Mozilla
     */
    'unicorn/no-instanceof-array': ERROR,

    /*
     * Disallow identifiers starting with `new` or `class`.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-keyword-prefix.md
     */
    'unicorn/no-keyword-prefix': OFF,

    /*
     * Disallow `if` statements as the only statement in `if` blocks without `else`.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-lonely-if.md
     * Recommended: Yes
     */
    'unicorn/no-lonely-if': ERROR,

    /*
     * Disallow negated conditions.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negated-condition.md
     * Recommended: Yes
     */
    'unicorn/no-negated-condition': ERROR,

    /*
     * Disallow nested ternary expressions.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-nested-ternary.md
     * Recommended: Yes
     */
    'unicorn/no-nested-ternary': OFF,

    /*
     * Disallow `new Array()`.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-array.md
     * Recommended: Yes
     */
    'unicorn/no-new-array': ERROR,

    /*
     * Disallow the use of the `null` literal.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md
     * Recommended: Yes
     */
    'unicorn/no-null': ERROR,

    /*
     * Disallow the use of objects as default parameters.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-object-as-default-parameter.md
     * Recommended: Yes
     */
    'unicorn/no-object-as-default-parameter': ERROR,

    /*
     * Disallow classes that only have static members.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-static-only-class.md
     * Recommended: Yes
     */
    'unicorn/no-static-only-class': ERROR,

    /*
     * Disallow `then` property.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-thenable.md
     * Recommended: Yes
     */
    'unicorn/no-thenable': ERROR,

    /*
     * Disallow assigning `this` to a variable.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-this-assignment.md
     * Recommended: Yes
     */
    'unicorn/no-this-assignment': ERROR,

    /*
     * Disallow comparing `undefined` using `typeof`.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-typeof-undefined.md
     * Recommended: Yes
     * Used by Mozilla
     */
    'unicorn/no-typeof-undefined': ERROR,

    /*
     * Disallow awaiting non-promise values.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-await.md
     * Recommended: Yes
     */
    'unicorn/no-unnecessary-await': ERROR,

    /*
     * Disallow unreadable array destructuring.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-array-destructuring.md
     * Recommended: Yes
     */
    'unicorn/no-unreadable-array-destructuring': ERROR,

    /*
     * Disallow unreadable IIFEs.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-iife.md
     * Recommended: Yes
     */
    'unicorn/no-unreadable-iife': ERROR,

    /*
     * Disallow unsafe regular expressions.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unsafe-regex.md
     */
    'unicorn/no-unsafe-regex': ERROR,

    /*
     * Disallow unused object properties.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unused-properties.md
     */
    'unicorn/no-unused-properties': ERROR,

    /*
     * Disallow useless fallback when spreading in object literals.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-fallback-in-spread.md
     * Recommended: Yes
     */
    'unicorn/no-useless-fallback-in-spread': ERROR,

    /*
     * Disallow useless array length check.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-length-check.md
     * Recommended: Yes
     */
    'unicorn/no-useless-length-check': ERROR,

    /*
     * Disallow returning/yielding `Promise.resolve/reject()` in async functions
     * or promise callbacks.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-promise-resolve-reject.md
     * Recommended: Yes
     */
    'unicorn/no-useless-promise-resolve-reject': ERROR,

    /*
     * Disallow unnecessary spread.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-spread.md
     * Recommended: Yes
     * Used by Mozilla
     */
    'unicorn/no-useless-spread': ERROR,

    /*
     * Disallow useless case in switch statements.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-switch-case.md
     * Recommended: Yes
     */
    'unicorn/no-useless-switch-case': ERROR,

    /*
     * Disallow useless `undefined`.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-undefined.md
     * Recommended: Yes
     */
    'unicorn/no-useless-undefined': OFF,

    /*
     * Disallow number literals with zero fractions or dangling dots.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-zero-fractions.md
     * Recommended: Yes
     */
    'unicorn/no-zero-fractions': ERROR,

    /*
     * Prefer `.find(…)` and `.findLast(…)` over the first or last element from
     * `.filter(…)`.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-find.md
     * Recommended: Yes
     * Used by Mozilla
     */
    'unicorn/prefer-array-find': ['error', { checkFromLast: true }],

    /*
     * Prefer `Array#flat()` over legacy techniques to flatten arrays.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat.md
     * Recommended: Yes
     * Used by Mozilla
     */
    'unicorn/prefer-array-flat': ERROR,

    /*
     * Prefer `.flatMap(…)` over `.map(…).flat()`.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat-map.md
     * Recommended: Yes
     * Used by Mozilla
     */
    'unicorn/prefer-array-flat-map': ERROR,

    /*
     * Prefer `Array#{indexOf,lastIndexOf}()` over
     * `Array#{findIndex,findLastIndex}()` when looking for the index of an item.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-index-of.md
     * Recommended: Yes
     * Used by Mozilla
     */
    'unicorn/prefer-array-index-of': ERROR,

    /*
     * Prefer `.some(…)` over `.filter(…).length` check and `.{find,findLast}(…)`.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-some.md
     * Recommended: Yes
     */
    'unicorn/prefer-array-some': ERROR,

    /*
     * Prefer `.at()` method for index access and `String#charAt()`.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-at.md
     * Used by Mozilla
     */
    'unicorn/prefer-at': OFF,

    /*
     * Prefer `String#codePointAt(…)` over `String#charCodeAt(…)` and
     * `String.fromCodePoint(…)` over `String.fromCharCode(…)`.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-code-point.md
     * Recommended: Yes
     */
    'unicorn/prefer-code-point': ERROR,

    /*
     * Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-date-now.md
     * Recommended: Yes
     * Used by Mozilla
     */
    'unicorn/prefer-date-now': ERROR,

    /*
     * Prefer default parameters over reassignment.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-default-parameters.md
     * Recommended: Yes
     */
    'unicorn/prefer-default-parameters': ERROR,

    /*
     * Prefer `export…from` when re-exporting.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-export-from.md
     * Recommended: Yes
     */
    'unicorn/prefer-export-from': [ERROR, { ignoreUsedVariables: true }],

    /*
     * Prefer `.includes()` over `.indexOf()` and `Array#some()` when checking
     * for existence or non-existence.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-includes.md
     * Recommended: Yes
     */
    'unicorn/prefer-includes': ERROR,

    /*
     * Prefer using a logical operator over a ternary.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-logical-operator-over-ternary.md
     * Recommended: Yes
     * Used by Mozilla
     */
    'unicorn/prefer-logical-operator-over-ternary': ERROR,

    /*
     * Enforce the use of `Math.trunc` instead of bitwise operators.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-trunc.md
     * Recommended: Yes
     */
    'unicorn/prefer-math-trunc': ERROR,

    /*
     * Prefer modern `Math` APIs over legacy patterns.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-math-apis.md
     * Recommended: Yes
     */
    'unicorn/prefer-modern-math-apis': ERROR,

    /*
     * Prefer JavaScript modules (ESM) over CommonJS.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md
     * Recommended: Yes
     * See: strict
     */
    'unicorn/prefer-module': OFF,

    /*
     * Prefer using `String`, `Number`, `BigInt`, `Boolean`, and `Symbol` directly.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-native-coercion-functions.md
     * Recommended: Yes
     */
    'unicorn/prefer-native-coercion-functions': ERROR,

    /*
     * Prefer negative index over `.length - index` when possible.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-negative-index.md
     * Recommended: Yes
     * Used by Mozilla
     */
    'unicorn/prefer-negative-index': ERROR,

    /*
     * Prefer `Number` static properties over global ones.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-number-properties.md
     * Recommended: Yes
     */
    'unicorn/prefer-number-properties': ERROR,

    /*
     * Prefer using `Object.fromEntries(…)` to transform a list of key-value
     * pairs into an object.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-from-entries.md
     * Recommended: Yes
     */
    'unicorn/prefer-object-from-entries': [
      ERROR,
      {
        functions: ['fromPairs', 'R.fromPairs']
      }
    ],

    /*
     * Prefer omitting the `catch` binding parameter.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-optional-catch-binding.md
     * Recommended: Yes
     */
    'unicorn/prefer-optional-catch-binding': ERROR,

    /*
     * Prefer borrowing methods from the prototype instead of the instance.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-prototype-methods.md
     * Recommended: Yes
     */
    'unicorn/prefer-prototype-methods': ERROR,

    /*
     * Prefer `Reflect.apply()` over `Function#apply()`.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-reflect-apply.md
     * Recommended: Yes
     */
    'unicorn/prefer-reflect-apply': ERROR,

    /*
     * Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-regexp-test.md
     * Recommended: Yes
     * Used by Mozilla
     */
    'unicorn/prefer-regexp-test': ERROR,

    /*
     * Prefer `Set#has()` over `Array#includes()` when checking for existence or
     * non-existence.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-has.md
     * Recommended: Yes
     */
    'unicorn/prefer-set-has': OFF,

    /*
     * Prefer using `Set#size` instead of `Array#length`.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-size.md
     * Recommended: Yes
     */
    'unicorn/prefer-set-size': ERROR,

    /*
     * Prefer the spread operator over `Array.from(…)`, `Array#concat(…)`,
     * `Array#{slice,toSpliced}()` and `String#split('')`.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-spread.md
     * Recommended: Yes
     */
    'unicorn/prefer-spread': OFF,

    /*
     * Prefer `String#replaceAll()` over regex searches with the global flag.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-replace-all.md
     * Used by Mozilla
     */
    'unicorn/prefer-string-replace-all': ERROR,

    /*
     * Prefer `String#slice()` over `String#substr()` and `String#substring()`.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-slice.md
     * Recommended: Yes
     */
    'unicorn/prefer-string-slice': ERROR,

    /*
     * Prefer `String#startsWith()` & `String#endsWith()` over `RegExp#test()`.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-starts-ends-with.md
     * Recommended: Yes
     * Used by Mozilla
     */
    'unicorn/prefer-string-starts-ends-with': ERROR,

    /*
     * Prefer `String#trimStart()` / `String#trimEnd()` over
     * `String#trimLeft()` / `String#trimRight()`.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-trim-start-end.md
     * Recommended: Yes
     */
    'unicorn/prefer-string-trim-start-end': ERROR,

    /*
     * Prefer `switch` over multiple `else-if`.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-switch.md
     * Recommended: Yes
     */
    'unicorn/prefer-switch': ERROR,

    /*
     * Prefer ternary expressions over simple `if-else` statements.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-ternary.md
     * Recommended: Yes
     */
    'unicorn/prefer-ternary': ERROR,

    /*
     * Prefer top-level await over top-level promises and async function calls.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-top-level-await.md
     * Recommended: Yes
     */
    'unicorn/prefer-top-level-await': ERROR,

    /*
     * Enforce throwing `TypeError` in type checking conditions.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-type-error.md
     * Recommended: Yes
     */
    'unicorn/prefer-type-error': ERROR,

    /*
     * Enforce consistent relative URL style.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/relative-url-style.md
     * Recommended: Yes
     */
    'unicorn/relative-url-style': ERROR,

    /*
     * Enforce using the separator argument with `Array#join()`.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-array-join-separator.md
     * Recommended: Yes
     */
    'unicorn/require-array-join-separator': ERROR,

    /*
     * Enforce using the digits argument with `Number#toFixed()`.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-number-to-fixed-digits-argument.md
     * Recommended: Yes
     */
    'unicorn/require-number-to-fixed-digits-argument': ERROR,

    /*
     * Require `new` when throwing an error.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/throw-new-error.md
     * Recommended: Yes
     */
    'unicorn/throw-new-error': ERROR,

    // #endregion unicorn

    // #region eslint-plugin-no-only-tests

    /*
     * Disallow the use of `.only` to focus tests
     * https://github.com/levibuzolic/eslint-plugin-no-only-tests
     */
    'no-only-tests/no-only-tests': [
      ERROR,
      {
        block: [
          'And',
          'context',
          'describe',
          'Feature',
          'fixture',
          'Given',
          'it',
          'Scenario',
          'serial',
          'tape',
          'test',
          'Then',
          'When'
        ],
        focus: ['only']
      }
    ],

    // #endregion eslint-plugin-no-only-tests

    // #region jsdoc

    /*
     * Checks that `@access` tags use one of the following values:
     * "package", "private", "protected", "public".
     * https://github.com/gajus/eslint-plugin-jsdoc#check-access
     * Recommended: true
     */
    'jsdoc/check-access': WARN,

    /*
     * Reports invalid alignment of JSDoc block asterisks.
     * https://github.com/gajus/eslint-plugin-jsdoc#check-alignment
     * Recommended: true
     */
    'jsdoc/check-alignment': WARN,

    /*
     * Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules.
     * https://github.com/gajus/eslint-plugin-jsdoc#check-examples
     */
    // TODO: This rule currently does not work in ESLint 8 (we are waiting for [issue 14745](https://github.com/eslint/eslint/issues/14745)).
    'jsdoc/check-examples': OFF,

    /*
     * Ensures that parameter names in JSDoc are matched by corresponding items
     * in the function declaration.
     * https://github.com/gajus/eslint-plugin-jsdoc#check-param-names
     * Recommended: true
     */
    'jsdoc/check-param-names': WARN,

    /*
     * Ensures that property names in JSDoc are not duplicated on the same block
     * and that nested properties have defined roots.
     * https://github.com/gajus/eslint-plugin-jsdoc#check-property-names
     * Recommended: true
     */
    'jsdoc/check-property-names': WARN,

    /*
     * Reports against syntax not encouraged for the mode (e.g., Google Closure
     * Compiler in "jsdoc" or "typescript" mode).
     * Note that this rule will not check for types that are wholly invalid for
     * a given mode, as that is covered by valid-types.
     * https://github.com/gajus/eslint-plugin-jsdoc#check-syntax
     */
    'jsdoc/check-syntax': OFF,

    /*
     * Reports invalid block tag names.
     * See also: https://jsdoc.app/#block-tags
     * https://github.com/gajus/eslint-plugin-jsdoc#check-tag-names
     * Recommended: true
     */
    'jsdoc/check-tag-names': WARN,

    /*
     * Reports invalid types.
     * https://github.com/gajus/eslint-plugin-jsdoc#check-types
     * Recommended: true
     */
    'jsdoc/check-types': WARN,

    /*
     * This rule checks the values for a handful of tags
     * https://github.com/gajus/eslint-plugin-jsdoc#check-values
     * Recommended: true
     */
    'jsdoc/check-values': WARN,

    /*
     * Expects tags that supposed to be empty of any content.
     * https://github.com/gajus/eslint-plugin-jsdoc#empty-tags
     * Recommended: true
     */
    'jsdoc/empty-tags': WARN,

    /*
     * Reports an issue with any non-constructor function using `@implements`.
     * https://github.com/gajus/eslint-plugin-jsdoc#implements-on-classes
     * Recommended: true
     */
    'jsdoc/implements-on-classes': WARN,

    /*
     * Reports on JSDoc texts that serve only to restart their attached name.
     * https://github.com/gajus/eslint-plugin-jsdoc#informative-docs
     */
    'jsdoc/informative-docs': OFF,

    /*
     * Enforces a regular expression pattern on descriptions.
     * https://github.com/gajus/eslint-plugin-jsdoc#match-description
     */
    'jsdoc/match-description': OFF,

    /*
     * This rule checks for multi-line-style comments which fail to meet the
     * criteria of a JSDoc block, namely that it should begin with two and only
     * two asterisks, but which appear to be intended as JSDoc blocks due to the
     * presence of whitespace followed by whitespace or asterisks, and an
     * at-sign (`@`) and some non-whitespace (as with a JSDoc block tag).
     * https://github.com/gajus/eslint-plugin-jsdoc#no-bad-blocks
     */
    'jsdoc/no-bad-blocks': WARN,

    /*
     * If tags are present, this rule will prevent empty lines in the block
     * description.
     * https://github.com/gajus/eslint-plugin-jsdoc#no-blank-block-descriptions
     */
    'jsdoc/no-blank-block-descriptions': OFF,

    /*
     * This rule reports defaults being used on the relevant portion of `@param`
     * or `@default`.
     * https://github.com/gajus/eslint-plugin-jsdoc#no-defaults
     */
    'jsdoc/no-defaults': OFF,

    /*
     * This rule lets you report if certain always expected comment structures
     * are missing.
     * https://github.com/gajus/eslint-plugin-jsdoc#no-missing-syntax
     */
    'jsdoc/no-missing-syntax': OFF,

    /*
     * Reports when certain comment structures are present.
     * https://github.com/gajus/eslint-plugin-jsdoc#no-restricted-syntax
     */
    'jsdoc/no-restricted-syntax': OFF,

    /*
     * This rule reports types being used on `@param` or `@returns`.
     * https://github.com/gajus/eslint-plugin-jsdoc#no-types
     */
    'jsdoc/no-types': OFF,

    /*
     * Checks that types in JSDoc comments are defined.
     * https://github.com/gajus/eslint-plugin-jsdoc#no-undefined-types
     * Recommended: true
     */
    'jsdoc/no-undefined-types': WARN,

    /*
     * Requires that all functions have a description.
     * https://github.com/gajus/eslint-plugin-jsdoc#require-description
     */
    'jsdoc/require-description': OFF,

    /*
     * Requires that block description, explicit `@description`, and
     * `@param`/`@returns` tag descriptions are written in complete sentences.
     * https://github.com/gajus/eslint-plugin-jsdoc#require-description-complete-sentence
     */
    'jsdoc/require-description-complete-sentence': OFF,

    /*
     * Requires that all functions have examples.
     * https://github.com/gajus/eslint-plugin-jsdoc#require-example
     */
    'jsdoc/require-example': OFF,

    /*
     * Checks that:
     * 1. All files have a `@file`, `@fileoverview`, or `@overview` tag.
     * 2. Duplicate file overview tags within a given file will be reported.
     * 3. File overview tags will be reported which are not, as per the docs.
     * https://github.com/gajus/eslint-plugin-jsdoc#require-file-overview
     */
    'jsdoc/require-file-overview': OFF,

    /*
     * Checks for presence of JSDoc comments, on class declarations as well as
     * functions.
     * https://github.com/gajus/eslint-plugin-jsdoc#require-jsdoc
     * Recommended: true
     */
    'jsdoc/require-jsdoc': WARN,

    /*
     * Requires that all function parameters are documented.
     * https://github.com/gajus/eslint-plugin-jsdoc#require-param
     * Recommended: true
     */
    'jsdoc/require-param': WARN,

    /*
     * Requires that each `@param` tag has a description value.
     * https://github.com/gajus/eslint-plugin-jsdoc#require-param-description
     * Recommended: true
     */
    'jsdoc/require-param-description': WARN,

    /*
     * Requires that all function parameters have names.
     * https://github.com/gajus/eslint-plugin-jsdoc#require-param-name
     * Recommended: true
     */
    'jsdoc/require-param-name': WARN,

    /*
     * Requires that each `@param` tag has a `type` value.
     * https://github.com/gajus/eslint-plugin-jsdoc#require-param-type
     * Recommended: true
     */
    'jsdoc/require-param-type': WARN,

    /*
     * Requires that all `@typedef` and `@namespace` tags have `@property` when
     * their type is a plain `object`, `Object`, or `PlainObject`.
     * https://github.com/gajus/eslint-plugin-jsdoc#require-property
     * Recommended: true
     */
    'jsdoc/require-property': WARN,

    /*
     * Requires that each `@property` tag has a description value.
     * https://github.com/gajus/eslint-plugin-jsdoc#require-property-description
     * Recommended: true
     */
    'jsdoc/require-property-description': WARN,

    /*
     * Requires that all function `@property` tags have names.
     * https://github.com/gajus/eslint-plugin-jsdoc#require-property-name
     * Recommended: true
     */
    'jsdoc/require-property-name': WARN,

    /*
     * Requires that each `@property` tag has a type value.
     * https://github.com/gajus/eslint-plugin-jsdoc#require-property-type
     * Recommended: true
     */
    'jsdoc/require-property-type': WARN,

    /*
     * Requires that returns are documented.
     * https://github.com/gajus/eslint-plugin-jsdoc#require-returns
     * Recommended: true
     */
    'jsdoc/require-returns': WARN,

    /*
     * Requires a return statement (or non-`undefined` Promise resolve value) in
     * function bodies if a `@returns` tag (without a void or undefined type) is
     * specified in the function's JSDoc comment.
     * https://github.com/gajus/eslint-plugin-jsdoc#require-returns-check
     * Recommended: true
     */
    'jsdoc/require-returns-check': WARN,

    /*
     * Requires that the `@returns` tag has a description value.
     * https://github.com/gajus/eslint-plugin-jsdoc#require-returns-description
     * Recommended: true
     */
    'jsdoc/require-returns-description': WARN,

    /*
     * Requires that `@returns` tag has type value.
     * https://github.com/gajus/eslint-plugin-jsdoc#require-returns-type
     * Recommended: true
     */
    'jsdoc/require-returns-type': WARN,

    /*
     * Requires that throw statements are documented.
     * https://github.com/gajus/eslint-plugin-jsdoc#require-throws
     */
    'jsdoc/require-throws': OFF,

    /*
     * Requires that yields are documented.
     * https://github.com/gajus/eslint-plugin-jsdoc#require-yields
     * Recommended: true
     */
    'jsdoc/require-yields': WARN,

    /*
     * Requires a yield statement in function body if a `@yields` tag is
     * specified in JSDoc comment.
     * https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-yields-check
     * Recommended: true
     */
    'jsdoc/require-yields-check': WARN,

    /*
     * Requires all types to be valid JSDoc or Closure compiler types without
     * syntax errors.
     * https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-valid-types
     * Recommended: true
     */
    'jsdoc/valid-types': WARN

    // #endregion jsdoc

    // #endregion PLUGINS
  })
});

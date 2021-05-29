import test from 'ava'
import exported from '.'
import configStandard from './eslint-config-standard'
import standardPkg from 'eslint-config-standard/package.json'
import readPkgUp, { NormalizedPackageJson } from 'read-pkg-up'
import { Linter } from 'eslint'

interface OurDeps {
  ourDeps: NonNullable<NormalizedPackageJson['dependencies']>
  ourPeerDeps: NonNullable<NormalizedPackageJson['peerDependencies']>
  ourDevDeps: NonNullable<NormalizedPackageJson['devDependencies']>
}

const getOurDeps = async (): Promise<OurDeps> => {
  const readResult = await readPkgUp()
  if (readResult === undefined) { throw new Error() }
  const ourPkg = readResult.packageJson
  if (ourPkg.dependencies === undefined) { throw new Error() }
  const ourDeps = ourPkg.dependencies
  if (ourPkg.peerDependencies === undefined) { throw new Error() }
  const ourPeerDeps = ourPkg.peerDependencies
  if (ourPkg.devDependencies === undefined) { throw new Error() }
  const ourDevDeps = ourPkg.devDependencies
  return { ourDeps, ourPeerDeps, ourDevDeps }
}

test('export', (t): void => {
  const expected: Linter.Config = {
    extends: 'eslint-config-standard',
    plugins: ['@typescript-eslint'],
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        parser: '@typescript-eslint/parser',
        rules: {
          'brace-style': 'off',
          camelcase: 'off',
          'comma-dangle': 'off',
          'comma-spacing': 'off',
          'default-param-last': 'off',
          'dot-notation': 'off',
          'func-call-spacing': 'off',
          indent: 'off',
          'keyword-spacing': 'off',
          'lines-between-class-members': 'off',
          'no-array-constructor': 'off',
          'no-dupe-class-members': 'off',
          'no-extra-parens': 'off',
          'no-implied-eval': 'off',
          'no-loss-of-precision': 'off',
          'no-redeclare': 'off',
          'no-throw-literal': 'off',
          'no-undef': 'off',
          'no-unused-vars': 'off',
          'no-use-before-define': 'off',
          'no-unused-expressions': 'off',
          'no-useless-constructor': 'off',
          'no-void': ['error', { allowAsStatement: true }],
          'object-curly-spacing': 'off',
          quotes: 'off',
          semi: 'off',
          'space-before-function-paren': 'off',
          'space-infix-ops': 'off',
          '@typescript-eslint/adjacent-overload-signatures': 'error',
          '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
          '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
          '@typescript-eslint/comma-dangle': [
            'error',
            {
              arrays: 'never',
              exports: 'never',
              functions: 'never',
              imports: 'never',
              objects: 'never'
            }
          ],
          '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
          '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
              assertionStyle: 'as',
              objectLiteralTypeAssertions: 'never'
            }
          ],
          '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
          '@typescript-eslint/default-param-last': 'error',
          '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],
          '@typescript-eslint/explicit-function-return-type': ['error', {
            allowExpressions: true,
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true,
            allowDirectConstAssertionInArrowFunctions: true
          }],
          '@typescript-eslint/func-call-spacing': ['error', 'never'],
          '@typescript-eslint/indent': ['error', 2, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            MemberExpression: 1,
            FunctionDeclaration: { parameters: 1, body: 1 },
            FunctionExpression: { parameters: 1, body: 1 },
            CallExpression: { arguments: 1 },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            ignoreComments: false,
            ignoredNodes: ['TemplateLiteral *', 'JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
            offsetTernaryExpressions: true
          }],
          '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],
          '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
          '@typescript-eslint/member-delimiter-style': [
            'error',
            {
              multiline: { delimiter: 'none' },
              singleline: { delimiter: 'comma', requireLast: false }
            }
          ],
          '@typescript-eslint/method-signature-style': 'error',
          '@typescript-eslint/naming-convention': ['error', {
            selector: 'variableLike',
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE']
          }],
          '@typescript-eslint/no-array-constructor': 'error',
          '@typescript-eslint/no-base-to-string': 'error',
          '@typescript-eslint/no-dupe-class-members': 'error',
          '@typescript-eslint/no-dynamic-delete': 'error',
          '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
          '@typescript-eslint/no-extra-non-null-assertion': 'error',
          '@typescript-eslint/no-extra-parens': [
            'error',
            'functions'
          ],
          '@typescript-eslint/no-extraneous-class': ['error', { allowWithDecorator: true }],
          '@typescript-eslint/no-floating-promises': 'error',
          '@typescript-eslint/no-for-in-array': 'error',
          '@typescript-eslint/no-implied-eval': 'error',
          '@typescript-eslint/no-invalid-void-type': 'error',
          '@typescript-eslint/no-loss-of-precision': 'error',
          '@typescript-eslint/no-misused-new': 'error',
          '@typescript-eslint/no-misused-promises': 'error',
          '@typescript-eslint/no-namespace': 'error',
          '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
          '@typescript-eslint/no-non-null-assertion': 'error',
          '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
          '@typescript-eslint/no-redeclare': ['error', { builtinGlobals: false }],
          '@typescript-eslint/no-throw-literal': 'error',
          '@typescript-eslint/no-unnecessary-type-assertion': 'error',
          '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
          '@typescript-eslint/no-unused-vars': ['error', { args: 'none', caughtErrors: 'none', ignoreRestSiblings: true, vars: 'all' }],
          '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, enums: false, variables: false, typedefs: false }],
          '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTaggedTemplates: true, allowTernary: true }],
          '@typescript-eslint/no-useless-constructor': 'error',
          '@typescript-eslint/no-var-requires': 'error',
          '@typescript-eslint/object-curly-spacing': [
            'error',
            'always'
          ],
          '@typescript-eslint/prefer-function-type': 'error',
          '@typescript-eslint/prefer-includes': 'error',
          '@typescript-eslint/prefer-nullish-coalescing': ['error', { ignoreConditionalTests: false, ignoreMixedLogicalExpressions: false }],
          '@typescript-eslint/prefer-optional-chain': 'error',
          '@typescript-eslint/prefer-readonly': 'error',
          '@typescript-eslint/prefer-reduce-type-parameter': 'error',
          '@typescript-eslint/prefer-ts-expect-error': 'error',
          '@typescript-eslint/promise-function-async': 'error',
          '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
          '@typescript-eslint/restrict-plus-operands': ['error', { checkCompoundAssignments: true }],
          '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
          '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
          '@typescript-eslint/return-await': ['error', 'always'],
          '@typescript-eslint/semi': ['error', 'never'],
          '@typescript-eslint/space-before-function-paren': ['error', 'always'],
          '@typescript-eslint/space-infix-ops': 'error',
          '@typescript-eslint/strict-boolean-expressions': ['error', {
            allowString: false,
            allowNumber: false,
            allowNullableObject: false,
            allowNullableBoolean: false,
            allowNullableString: false,
            allowNullableNumber: false,
            allowAny: false
          }],
          '@typescript-eslint/triple-slash-reference': ['error', { lib: 'never', path: 'never', types: 'never' }],
          '@typescript-eslint/type-annotation-spacing': 'error'
        }
      }
    ]
  }

  t.deepEqual(exported, expected)
})

test('Dependencies range types', async (t) => {
  const { ourDeps, ourPeerDeps, ourDevDeps } = await getOurDeps()
  for (const [name, range] of Object.entries(ourDeps)) {
    const specifier = '^'
    t.true(range.startsWith(specifier), `Regular dependency ${name} starts with \`${specifier}\`.`)
  }
  for (const [name, range] of Object.entries(ourPeerDeps)) {
    const specifier = '>='
    t.true(range.startsWith(specifier), `Peer dependency ${name} starts with \`${specifier}\`.`)
  }
  for (const [name, range] of Object.entries(ourDevDeps)) {
    t.regex(range, /^\d/, `Dev dependency ${name} is exact`)
  }
})

test('Own peerDependencies include those of eslint-config-standard', async (t) => {
  const { ourPeerDeps } = await getOurDeps()
  Object
    .entries(standardPkg.peerDependencies)
    .forEach(([_name, standardDep]) => {
      // https://github.com/microsoft/TypeScript/pull/12253
      const name = _name as keyof typeof standardPkg.peerDependencies
      const ourDep = ourPeerDeps[name]
      const ourRange = ourDep.split('>=')[1]
      const standardRange = standardDep.split('^')[1].split('||')[0].trim()
      t.is(ourRange, standardRange)
    })
})

test('Peer and dev dep @typescript-eslint/eslint-plugin same base version', async (t) => {
  const { ourPeerDeps, ourDevDeps } = await getOurDeps()
  const peerDepPluginRange = ourPeerDeps['@typescript-eslint/eslint-plugin']
  const devDepPluginRange = ourDevDeps['@typescript-eslint/eslint-plugin']
  t.is(
    peerDepPluginRange.split('>=')[1],
    devDepPluginRange
  )
})

test('Deps parser and plugin are same major version', async (t) => {
  const { ourDeps, ourPeerDeps } = await getOurDeps()
  const parserRange = ourDeps['@typescript-eslint/parser']
  const pluginRange = ourPeerDeps['@typescript-eslint/eslint-plugin']
  const parserMinimum = parserRange.split('^')[1]
  const pluginMinimum = pluginRange.split('>=')[1]
  const parserMajor = parserMinimum.split('.')[0]
  const pluginMajor = pluginMinimum.split('.')[0]
  t.is(parserMajor, pluginMajor)
})

test('Exported rule values do not reference eslint-config-standard ones', (t) => {
  if (exported.overrides === undefined) throw new Error()
  t.is(exported.overrides.length, 1)
  const override = exported.overrides[0]
  if (override.rules === undefined) throw new Error()

  for (const ruleName in configStandard.rules) {
    if (typeof configStandard.rules[ruleName] !== 'object') continue // Non-objects use copy-by-value

    t.false(override.rules[`@typescript-eslint/${ruleName}`] === configStandard.rules[ruleName])
  }
})

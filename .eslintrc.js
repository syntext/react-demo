module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: 'airbnb',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'babel',
        'react',
    ],
    rules: {
        /* See: https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v18.0.1/packages/eslint-config-airbnb/rules/react.js */
        'indent': ['error', 4, {
            'SwitchCase': 1
        }],
        'max-len': ['error', {
            'code': 140
        }],
        'import/no-cycle': ['warn', {
            'maxDepth': 1
        }],
        'jsx-a11y/label-has-associated-control': ['warn', {
            'controlComponents': [
                'InputText'
            ],
        }],
        'react/jsx-props-no-spreading': ['warn', {
            'exceptions': [
                'Component',
                'Route',
                'TopNavBar',
            ]
        }],
        'arrow-parens': ['error', 'always'],
        'jsx-quotes': ['error', 'prefer-single'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
        'object-curly-spacing': ['error', 'never'],
        'array-bracket-spacing': ['error', 'never'],
        'no-unused-vars': ['warn'],
        'no-unreachable': ['warn'],
        'no-use-before-define': ['off'],
        'comma-dangle': ['off'],
        'object-curly-newline': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-one-expression-per-line': ['off'],
        'react/jsx-tag-spacing': ['error', {
            'beforeClosing': 'never',
            'beforeSelfClosing': 'never',
        }],
        'react/no-set-state': 'off',
        'react/no-unused-state': 'warn',
        'react/destructuring-assignment': ['off'],
        'react/forbid-prop-types': ['error', {
            'forbid': ['any']
        }],
    },
}

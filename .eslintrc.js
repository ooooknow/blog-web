module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential', '@vue/prettier'],
    rules: {
        'no-useless-escape': 'off',
        'no-console': 'off',
        'no-debugger': 'off',
        indent: [
            'warn',
            4,
            {
                SwitchCase: 1,
            },
        ],
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};

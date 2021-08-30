module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/standard',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020,
        ecmaFeatures : {
            jsx : false
        }
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: ['warn', 4],
        semi: ['warn', 'always'],
        'vue/script-indent': ['warn', 4, { baseIndent: 1 }],
        '@typescript-eslint/no-inferrable-types': 'off',
        'no-multiple-empty-lines': 'warn',
    },
    overrides: [{
        files: ['*.vue'],
        rules: { indent: 'off' }
    }]
};

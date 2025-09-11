// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
    expoConfig,
    {
        ignores: ['dist/*'],
        settings: {
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx','.png','.jpg'],
                },
            },
        },
        extends: [
            "plugin:import/errors",
            "plugin:import/warnings",
            "plugin:import/typescript",
        ],
    },
]);

module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        // "standard-with-typescript",
        "plugin:vue/vue3-essential",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "vue-eslint-parser",
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["prettier", "vue"],
    rules: {
        "vue/multi-word-component-names": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "warn",
    },
};

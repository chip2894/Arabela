// @ts-nocheck
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
    {
        files: ["**/*.ts"],
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.recommended,
            ...tseslint.configs.stylistic,
            ...angular.configs.tsRecommended,
            "prettier" // Desactiva reglas de ESLint que entren en conflicto con Prettier
        ],
        plugins: {
            prettier: require("eslint-plugin-prettier")
        },
        processor: angular.processInlineTemplates,
        rules: {
            // 🔸 Reglas Angular
            "@angular-eslint/directive-selector": [
                "error",
                { type: "attribute", prefix: "app", style: "camelCase" }
            ],
            "@angular-eslint/component-selector": [
                "error",
                { type: "element", prefix: "app", style: "kebab-case" }
            ],
            "@angular-eslint/prefer-standalone": "off",

            // 🔸 Reglas Prettier
            "prettier/prettier": [
                "error",
                {
                    singleQuote: true,
                    semi: true,
                    tabWidth: 4,
                    printWidth: 100,
                    trailingComma: "all",
                    bracketSpacing: true,
                    arrowParens: "avoid",
                    endOfLine: "lf"
                }
            ],

            // 🔹 Desactiva la regla de ESLint que sobrescribe arrowParens
            "arrow-parens": "off"
        }
    },
    {
        files: ["**/*.html"],
        extends: [
            ...angular.configs.templateRecommended,
            ...angular.configs.templateAccessibility,
            "prettier"
        ],
        rules: {}
    }
);

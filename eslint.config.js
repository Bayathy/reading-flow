import js from "@eslint/js";
import globals from "globals";
import importPlugin from "eslint-plugin-import";
import unusedImportPlugin from "eslint-plugin-unused-imports";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import eslintSimpleImport from "eslint-plugin-simple-import-sort";
import unicornPlugin from "eslint-plugin-unicorn";
import tseslint from "typescript-eslint";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default tseslint.config(
	{
		plugins: {
			["@typescript-eslint"]: tseslint.plugin,
			["react-hooks"]: reactHooksPlugin,
			["react-refresh"]: reactRefreshPlugin,
			["import"]: importPlugin,
			["unused-imports"]: unusedImportPlugin,
			["simple-import-sort"]: eslintSimpleImport,
			["unicorn"]: unicornPlugin,
		},
	},
	jsxA11y.flatConfigs.recommended,
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parser: tseslint.parser,
		},
		rules: {
			...reactHooksPlugin.configs.recommended.rules,
			"no-console": "error",
			"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
			"import/first": "error",
			"import/newline-after-import": "error",
			"import/no-duplicates": "error",
			"unused-imports/no-unused-imports": "error",

			"@typescript-eslint/no-unused-vars": "off",

			"unicorn/filename-case": [
				"error",
				{
					cases: {
						kebabCase: true,
					},
				},
			],
		},
	},
	{
		files: ["src/components/ui/*.{ts,tsx}"],
		rules: {
			"react-refresh/only-export-components": "off",
		},
	},
);

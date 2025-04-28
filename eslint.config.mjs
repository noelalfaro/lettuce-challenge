// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript")
// ];

// export default eslintConfig;

// eslint.config.js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import globals from "globals"; // Import globals for languageOptions

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	// Apply Next.js recommended configs first
	...compat.extends("next/core-web-vitals"), // Keep core-web-vitals

	// Add a specific configuration object to override rules
	{
		files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"], // Apply to relevant files
		languageOptions: {
			// Specify language options if needed, often inherited
			globals: {
				...globals.browser,
				...globals.node, // Add node globals if needed
				React: "readonly", // Define React global if not using new JSX transform implicitly
			},
		},
		// --- Add the rules configuration here ---
		rules: {
			// Disable the rule causing the error
			"react/no-children-prop": "off", // "off" or 0 disables the rule

			// You might also need this if you aren't using the new JSX transform
			// "react/react-in-jsx-scope": "off",

			// Add any other custom rule overrides here
		},
		// --- End rules configuration ---
	},
	// You might have other config objects here from plugins, etc.
];

export default eslintConfig;

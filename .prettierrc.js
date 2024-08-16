export default {
  arrowParens: 'avoid',
  printWidth: 90,
  singleQuote: true,
  svelteBracketNewLine: true,
  svelteStrictMode: false,
  trailingComma: 'none',
  plugins: ['prettier-plugin-svelte'],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }]
};

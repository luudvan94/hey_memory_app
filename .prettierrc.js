module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,

  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    // '^(.*)/components/(.*)$', // Add any folders you want to be separate
    '^src/(.*)$',
    '^(.*)/(?!generated)(.*)/(.*)$', // Everything not generated
    '^(.*)/generated/(.*)$', // Everything generated
    '^[./]', // Absolute path imports
  ],
}

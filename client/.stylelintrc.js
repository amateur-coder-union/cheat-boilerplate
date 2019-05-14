module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-styled-components"
  ],
  processors: 'stylelint-processor-styled-components',
  rules: {
    'selector-pseudo-element-colon-notation': null,
    'number-leading-zero': 'never',
    indentation: [
      2,
      {
        severity: 'warning'
      }
    ]
  }
};

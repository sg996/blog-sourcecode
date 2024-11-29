// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'prefer-exponentiation-operator': 'off',
    'prefer-template': 'off',
    'no-extend-native': 'off',
    'no-sparse-arrays': 'off',
    'no-prototype-builtins': 'off',
    'no-irregular-whitespace': 'off',
    'no-new': 'off',
  },
})

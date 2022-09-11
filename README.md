# `eslint-plugin-guesty`

===================

Guesty specific linting rules for `eslint`

## Installation

```sh
yarn add -D eslint@^7.32.0 eslint-plugin-guesty
```

## Configuration

Use [our preset](#recommended) to get defaults:

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:guesty/recommended"
  ]
}
```

Add "guesty" to the plugins section.

```json
{
  "plugins": [
    "guesty"
  ]
}
```

If you do not use a preset you will need to specify individual rules and add extra configuration.

```json
{
  "rules": {
    "guesty/no-testing": "error"
  }
}
```
Enable JSX support.

With `eslint` 2+

```json
{
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  }
}
```

## Shareable configurations

### Recommended

This plugin exports a `recommended` configuration that enforces React good practices.

To enable this configuration use the `extends` property in your `.eslintrc` config file:

```json
{
  "extends": ["eslint:recommended", "plugin:guesty/recommended"]
}
```

See [`eslint` documentation](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files) for more information about extending configuration files.

## License

`eslint-plugin-guesty` is licensed under the [MIT License](https://opensource.org/licenses/mit-license.php).

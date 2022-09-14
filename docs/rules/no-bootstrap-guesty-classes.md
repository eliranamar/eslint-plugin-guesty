# Disallow use of bootstrap css classes in JSX (guesty/no-bootstrap-guesty-classes)

> Except classes listed in the guesty foundation that use the same name to override

## Recommended migration guide for existing projects that already utilize bootstrap classes:
- Install the eslint plugin per the [docs](https://github.com/eliranamar/eslint-plugin-guesty#readme)
- Update the version of foundation to latest (in that version we omitted the bootstrap css file, so the classes will no longer have any effect)
- If you want to gradually remove the css classes you can set the rule to warn `"guesty/no-bootstrap-guesty-classes": "warn"` then remove the line or change level to `"error"` again after finished with migration.

## Rule Details

Examples of **incorrect** code for this rule:

```typescript jsx
interface Props {
  enabled: boolean
}
const Hello = (props: Props) => <SomeComponent className="d-flex">Hello world</SomeComponent>;
```

Examples of **correct** code for this rule:

```typescript jsx
interface Props {
  enabled: boolean
}
const Hello = (props: Props) => <SomeComponent jss={{ root: { display: 'flex' } }}>Hello world</SomeComponent>;
```

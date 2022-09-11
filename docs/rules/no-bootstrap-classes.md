# Disallow use of bootstrap css classes in JSX (guesty/no-bootstrap-classes)

## Recommended migration guide for existing projects that already utilize bootstrap classes:
- Install the eslint plugin per the [docs](todo.com)
- Update the version of foundation to latest (in that version we omitted the bootstrap css file, so the classes will no longer have any effect)
- Run eslint **without** the --fix option, just to first get an overview of the usage (in the future we might have an auto fix command that will remove the classes automatically, but you still need to apply replacement css manually)
- If you want to gradually remove the css classes you can set the rule to warn `"guesty/no-bootstrap-classes": "warn"` then remove the line or change level to `"error"` again after finished with migration.

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
# Deno vue-email ssr reproduction

There a 2 templates. **working.vue** and. **failing.vue** has special characters such as äöü

**working.vue** will render just fine. (positive example)

**failing.vue** will crash with following error message:
```
Error loading component [TypeError: invalid utf-8 sequence of 1 bytes from index 2244] {
  code: "ERR_MODULE_NOT_FOUND"
}
```

## Usage
Run `deno task dev`
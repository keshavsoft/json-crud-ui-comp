# Dev Notes

## Local Testing Using npm link

### Step 1: Update Version

Update `package.json`.

```json
{
  "version": "1.6.2"
}
```

---

### Step 2: Create Global Link

From package root:

```bash
npm link
```

This registers the package globally on the local machine.

---

### Step 3: Create Test Folder

```bash
mkdir ks1
cd ks1
```

---

### Step 4: Consume Local Package

```bash
npm link json-crud-ui-table
```

Expected:

```bash
added 1 package
```

A symbolic link will be created inside:

```text
node_modules/json-crud-ui-table
```

pointing to the development repository.

---

### Step 5: Execute CLI

Example:

```bash
npx json-crud-ui-table withHeader v1
```

Expected:

```bash
[keshavsoft] Project created: v1
```

---

### Step 6: Verify Generated Files

```text
v1/
├── config.json
├── index.html
└── Index/
```

---

## Dynamic Version Loader

Current implementation:

```js
import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async (cmd) => {
    const v = getLatestVersion();

    return (await import(
        `./bin/${v}/commands/${cmd}.js`
    )).default;
};
```

Benefits:

* Single entry point.
* Version-based command loading.
* Older versions remain untouched.
* Easy rollback support.
* Future versions can be added under:

```text
bin/
├── v1/
├── v2/
├── v3/
```

without changing CLI consumers.

---

## Useful Commands

Recreate global link:

```bash
npm unlink
npm link
```

Remove local link:

```bash
npm unlink json-crud-ui-table
```

Create local link again:

```bash
npm link json-crud-ui-table
```

Verify active package:

```bash
npm ls json-crud-ui-table
```

---

## Validation Checklist

* [ ] Version updated.
* [ ] `npm link` executed in package repo.
* [ ] Test folder created.
* [ ] `npm link json-crud-ui-table` executed.
* [ ] CLI command runs successfully.
* [ ] Generated files match latest source code.
* [ ] Dynamic version loader resolves correct folder.

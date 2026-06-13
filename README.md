# json-crud-ui-table

Generate ready-to-use CRUD UI boilerplates from the command line.

---

## Installation

### One Time

```bash
npm i -g json-crud-ui-table
```

### Run Directly

```bash
npx json-crud-ui-table
```

---

## Available Commands

```text
showAll
showAllWithSerial
showAllWithSerialSearch
withHeader
```

---

## Usage

### showAll

```bash
npx json-crud-ui-table showAll ProjectName
```

---

### showAllWithSerial

```bash
npx json-crud-ui-table showAllWithSerial ProjectName
```

---

### showAllWithSerialSearch

```bash
npx json-crud-ui-table showAllWithSerialSearch ProjectName
```

---

### withHeader

```bash
npx json-crud-ui-table withHeader ProjectName
```

Example:

```bash
npx json-crud-ui-table withHeader v1
```

Output:

```text
[keshavsoft] Project created: v1
```

---

## Generated Structure

```text
ProjectName/
├── config.json
├── index.html
└── Index/
```

---

## Help

Running without arguments displays available commands.

```bash
npx json-crud-ui-table
```

Example output:

```text
Commands:

    showAll
    showAllWithSerial
    showAllWithSerialSearch
    withHeader

Examples:

    npx json-crud-ui-table showAll
    npx json-crud-ui-table showAllWithSerial
    npx json-crud-ui-table showAllWithSerialSearch
    npx json-crud-ui-table withHeader
```

---

## Local Development

Create global link:

```bash
npm link
```

Create test project:

```bash
mkdir ks1
cd ks1
npm link json-crud-ui-table
```

Run:

```bash
npx json-crud-ui-table withHeader v1
```

---

## Author

KeshavSoft

---

## License

MIT

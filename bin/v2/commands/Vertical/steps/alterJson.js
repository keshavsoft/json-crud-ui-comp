import fs from "fs";
import path from "path";

const readJson = (filePath) => {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
};

const writeJson = (filePath, data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
};

const getSchemaConfig = ({ fromConfigPath, tableName, showLog }) => {
    const schemaPath = path.join(
        fromConfigPath,
        `${tableName}.json`
    );

    const schemaPathAsJson = readJson(schemaPath);

    if (showLog) if (!"columnsConfig" in schemaPathAsJson) console.log("columnsConfig not found in schema source");

    return schemaPathAsJson?.columnsConfig;
};

const getShowAllConfigPath = ({ inDestination }) => {
    return path.join(
        inDestination,
        "Index",
        "Configs"
    );
};

const updateColumnsConfig = ({ configRoot, columnsConfig }) => {
    const folders = fs.readdirSync(configRoot, { withFileTypes: true });

    for (const folder of folders) {
        if (!folder.isDirectory()) continue;

        const configPath = path.join(
            configRoot,
            folder.name,
            "config.json"
        );

        if (!fs.existsSync(configPath)) continue;

        const config = readJson(configPath);

        config.columnsConfig = columnsConfig;

        writeJson(configPath, config);
    };
};

export const alterJson = ({ inDestination, inToPath, tableName, fromConfigPath, showLog = false }) => {
    const columnsConfig = getSchemaConfig({ fromConfigPath, tableName, showLog });

    const configRoot = getShowAllConfigPath({ inDestination });

    updateColumnsConfig({
        configRoot,
        columnsConfig
    });
};

export default alterJson;
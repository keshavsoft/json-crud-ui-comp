import fs from "fs";
import path from "path";

const readJson = (filePath) => {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
};

const writeJson = (filePath, data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
};

const startFunc = ({ configRoot, columnsConfig, tableName }) => {
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
        config.endPoints.read = `/Api/V1/${tableName}/ShowAll`;

        writeJson(configPath, config);
    };
};

export default startFunc;
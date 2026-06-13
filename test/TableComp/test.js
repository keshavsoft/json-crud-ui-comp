import { load } from "../../index.js";
import path from "path";

const commandToSend = "TableComp";

const startFunc = async (...a) =>
    (await load(commandToSend))(...a);

const folderName = process.argv[2];
const tableName = process.argv[3];
const showLog = process.argv[4];

startFunc({
    toPath: path.join(process.cwd(), folderName),
    tableName,
    configPath: path.join(process.cwd(), "Config", "Schemas"),
    showLog
}).then();
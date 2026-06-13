import { load } from "../../index.js";

const commandToSend = "WithHeader";

const startFunc = async (...a) =>
    (await load(commandToSend))(...a);

const folderName = process.argv[2];
const tableName = process.argv[3];
const showLog = process.argv[4];

startFunc({
    folderName,
    showLog,
    tableName
}).then();
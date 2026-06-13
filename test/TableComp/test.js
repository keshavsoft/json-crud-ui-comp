import { load } from "../../index.js";
import path from "path";

const commandToSend = "TableComp";

const startFunc = async (...a) =>
    (await load(commandToSend))(...a);

const folderName = process.argv[2];
const showLog = process.argv[3];

startFunc({
    toPath: path.join(process.cwd(), folderName),
    showLog
}).then();
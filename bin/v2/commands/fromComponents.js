import { locateSource } from "./FromComponents/steps/locateSource.js";
import { locateDestination } from "./FromComponents/steps/locateDestination.js";

import { createProject } from "./FromComponents/steps/createProject.js";
import { announce } from "./FromComponents/steps/announce.js";

import checks from "./FromComponents/steps/checks.js";

import alterJson from "./FromComponents/steps/AlterJson/index.js";

export default ({
    toPath = process.cwd(),
    inAnnounce = true,
    showLog = "false",
    inAlterConfig = true,
    tableName,
    configPath
}) => {
    const isShowLog = showLog === true || showLog?.trim() === "true";

    if (isShowLog) console.log("Resolving folder name...");

    const fromChecks = checks({
        toPath,
        inAnnounce,
        showLog
    });

    if (fromChecks) return false;

    if (isShowLog) console.log("Locating source...");

    const source = locateSource({
        showLog
    });

    if (isShowLog) console.log(`Source is : ${source}`);
    if (isShowLog) console.log("Locating destination...");

    const destination = toPath;

    if (isShowLog) console.log(`Destination is : ${destination}`);
    if (isShowLog) console.log("Creating project...");

    createProject({
        source,
        destination,
        showLog
    });

    if (inAlterConfig) {
        alterJson({
            inDestination: destination,
            inToPath: toPath,
            tableName,
            fromConfigPath: configPath,
            showLog: isShowLog
        });
    };

    if (inAnnounce) {
        if (isShowLog) console.log("Announcing...");

        announce({
            toPath,
            showLog
        });
    };
};
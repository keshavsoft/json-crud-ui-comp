import { locateSource } from "./TableComp/steps/locateSource.js";
import { locateDestination } from "./TableComp/steps/locateDestination.js";

import { createProject } from "./TableComp/steps/createProject.js";
import { announce } from "./TableComp/steps/announce.js";

import checks from "./TableComp/steps/checks.js";

export default ({
    toPath = process.cwd(),
    inAnnounce = true,
    showLog = "false"
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

    if (inAnnounce) {
        if (isShowLog) console.log("Announcing...");

        announce({
            toPath,
            showLog
        });
    };
};
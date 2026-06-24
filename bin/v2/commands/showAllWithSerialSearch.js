import { locateSource } from "./ShowAllWithSerialSearch/steps/locateSource.js";
import { locateDestination } from "./ShowAllWithSerialSearch/steps/locateDestination.js";

import { createProject } from "./ShowAllWithSerialSearch/steps/createProject.js";
import { announce } from "./ShowAllWithSerialSearch/steps/announce.js";

import resolveFolderName from "./ShowAllWithSerialSearch/steps/resolveFolderName.js";
import checks from "./ShowAllWithSerialSearch/steps/checks.js";

export default ({
    folderName = "",
    toPath = process.cwd(),
    inAnnounce = true,
    showLog = false
}) => {
    if (showLog) {
        console.log("Resolving folder name...");
    };

    const resolvedFolderName = resolveFolderName({
        name: folderName
    });

    if (showLog) {
        console.log(`resolvedFolderName : ${resolvedFolderName}`);
    };

    const fromChecks = checks({
        toPath,
        inAnnounce,
        inFolderName: resolvedFolderName,
        showLog
    });

    if (fromChecks) return false;

    if (showLog) {
        console.log("Locating source...");
    }

    const source = locateSource({
        showLog
    });

    if (showLog) console.log(`Source is : ${source}`);
    if (showLog) console.log("Locating destination...");

    const destination = locateDestination({
        inToPath: toPath,
        inResolvedFolderName: resolvedFolderName,
        showLog
    });

    if (showLog) console.log(`Destination is : ${destination}`);
    if (showLog) console.log("Creating project...");

    createProject({
        source,
        destination,
        showLog
    });

    if (inAnnounce) {

        if (showLog) {
            console.log("Announcing...");
        }

        announce({
            inResolvedFolderName: resolvedFolderName,
            showLog
        });
    }
};
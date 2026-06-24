import { buildHeader } from "./buildHeader.js";
import { hookAllListeners } from "./AddListeners/start.js";

const runAfterDomLoad = () => {
    buildHeader().then(fromPromise => {
        hookAllListeners();
    });
};

export { runAfterDomLoad };

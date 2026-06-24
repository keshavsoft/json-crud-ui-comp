import tallyDownId from "./TallyDownId/start.js";
import tallyUpId from "./TallyUpId/start.js";
import importHtmlId from "./ImportHtmlId/start.js";

const hookAllListeners = () => {
    tallyDownId();
    tallyUpId();
    importHtmlId();
};

export { hookAllListeners };
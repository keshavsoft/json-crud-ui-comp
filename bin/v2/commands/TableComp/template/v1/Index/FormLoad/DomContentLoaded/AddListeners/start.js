import showAllHtmlId from "./ShowAllHtmlId/start.js";
import withSerialHtmlId from "./WithSerialHtmlId/start.js";
import withSearchHtmlId from "./WithSearchHtmlId/start.js";
// import { funcToRun as addItemHtmlId } from "./AddItemHtmlId/start.js";
// import { funcToRun as toTallyId } from "./toTallyId/start.js";

const hookAllListeners = () => {
    showAllHtmlId();
    withSerialHtmlId();
    withSearchHtmlId();
    // addItemHtmlId();
    // toTallyId();
};

export { hookAllListeners };
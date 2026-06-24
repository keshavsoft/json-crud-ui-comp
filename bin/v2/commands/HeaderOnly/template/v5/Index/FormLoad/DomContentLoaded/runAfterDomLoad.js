import { buildHeader } from "./buildHeader.js";
import { hookAllListeners } from "./AddListeners/start.js";
import tallyStatus from "../../tallyStatus.js";

const runAfterDomLoad = () => {
    import("../../../script.js").then();

    setTimeout(() => {
        console.log("aaaaaaa");

        buildHeader().then(fromPromise => {
            setInterval(() => {
                tallyStatus().then();
            }, 20000);

            hookAllListeners();
        });
    }, 1000);
};

export { runAfterDomLoad };

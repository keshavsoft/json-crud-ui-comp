import { buildHeader } from "./buildHeader.js";
// import { hookAllListeners } from "./AddListeners/start.js";


import { hookAllListeners } from "./AddListeners/start.js";

const runAfterDomLoad = () => {
    import("../../../script.js").then(fromPromise => {
        buildHeader().then(fromPromise => {
            hookAllListeners();
        });
    });

    // setTimeout(() => {
    //     console.log("aaaaaaa");

    //     buildHeader().then(fromPromise => {
    //         setInterval(() => {
    //             tallyStatus().then();
    //         }, 20000);

    //         hookAllListeners();
    //     });
    // }, 2000);

};

export { runAfterDomLoad };

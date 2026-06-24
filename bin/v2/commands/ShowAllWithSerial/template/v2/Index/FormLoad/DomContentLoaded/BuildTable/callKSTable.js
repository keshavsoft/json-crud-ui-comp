import { initShowTable } from "/KSTable/v1/entry.js";

export const callKSTable = async (config) => {
    if (window?.KSTable?.initShowTable) {
        console.log("loaded from cdn");

        return window.KSTable.initShowTable(config);
    };

    return await initShowTable(config);
    // return false;
};
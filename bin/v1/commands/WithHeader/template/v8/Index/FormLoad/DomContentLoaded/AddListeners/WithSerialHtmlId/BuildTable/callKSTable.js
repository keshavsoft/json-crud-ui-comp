// import { initShowTable } from "/KSTable/v1/entry.js";

export const callKSTable1 = async (config) => {
    if (window?.KSTable?.initShowTable) {
        console.log("loaded from cdn");

        return window.KSTable.initShowTable(config);
    };

    return await initShowTable(config);
    // return false;
};

export const callKSTable = async (config) => {
    if (window?.KSTable?.initShowTable) {
        return window.KSTable.initShowTable(config);
    }

    const { initShowTable } = await import("/KSTable/v7/entry.js");

    return initShowTable(config);
};
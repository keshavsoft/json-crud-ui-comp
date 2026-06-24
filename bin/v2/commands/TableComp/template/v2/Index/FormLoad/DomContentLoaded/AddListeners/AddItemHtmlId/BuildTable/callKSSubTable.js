import { initTableWithFooter } from "/KSTableAi/V46/entry.js";

const callKSSubTable = async (config) => {
    if (window?.KSTable) {
        console.log("loaded from cdn");

        return window.KSTable.initTableWithFooter(config);
    };

    return initTableWithFooter(config);
};

export default callKSSubTable;
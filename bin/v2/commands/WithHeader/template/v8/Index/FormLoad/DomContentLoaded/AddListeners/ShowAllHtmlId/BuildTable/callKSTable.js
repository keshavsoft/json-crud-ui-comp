export const callKSTable = async (config) => {
    if (window?.KSTable?.initShowTable) {
        return window.KSTable.initShowTable(config);
    };

    const { initShowTable } = await import("/KSTable/v12/entry.js");

    return initShowTable(config);
};
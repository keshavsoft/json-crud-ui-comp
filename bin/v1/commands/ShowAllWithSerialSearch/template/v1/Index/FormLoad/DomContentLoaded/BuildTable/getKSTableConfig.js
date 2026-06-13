export const getKSTableConfig = async ({ tableName }) => {
    const config = await fetch("config.json");
    // debugger;
    const configJson = await config.json();

    return configJson;
};
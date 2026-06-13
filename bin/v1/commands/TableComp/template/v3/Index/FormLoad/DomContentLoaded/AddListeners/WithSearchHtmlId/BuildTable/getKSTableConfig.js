export const getKSTableConfig = async () => {
    const config = await fetch("./Index/Configs/WithSearch/config.json");
    // debugger;
    const configJson = await config.json();

    return configJson;
};
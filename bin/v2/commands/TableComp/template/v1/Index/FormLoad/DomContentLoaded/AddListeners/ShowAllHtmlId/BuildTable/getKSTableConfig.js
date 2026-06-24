export const getKSTableConfig = async () => {
    const config = await fetch("./Index/Configs/ShowAll/config.json");
    // debugger;
    const configJson = await config.json();

    return configJson;
};
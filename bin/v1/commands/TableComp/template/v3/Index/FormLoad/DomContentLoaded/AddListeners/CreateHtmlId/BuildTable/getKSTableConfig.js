const onSuccessFunc = async (res) => {
    if (res.status === 200) {
        let jVarLocalShowAllHtmlId = document.getElementById('ShowAllHtmlId');
        jVarLocalShowAllHtmlId.click();
    };
};

export const getKSTableConfig = async () => {
    const config = await fetch("./Index/Configs/Create/config.json");
    // debugger;
    const configJson = await config.json();

    configJson.callbacks.vertical.onSuccess = onSuccessFunc;

    return configJson;
};
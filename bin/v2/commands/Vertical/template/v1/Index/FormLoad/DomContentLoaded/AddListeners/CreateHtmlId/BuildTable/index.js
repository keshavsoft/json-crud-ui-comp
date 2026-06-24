import onSuccessFunc from "../../../CommonFuncs/onSuccess.js";

const startFunc = async () => {
    const config = await fetch("Index/Configs/create.json");
    // debugger;
    const configJson = await config.json();

    configJson.callbacks.vertical.onSuccess = onSuccessFunc;

    if (window.KSAiTable) {
        const table = new KSAiTable(configJson);
        await table.initCreate();   // ✅ THIS is missing
    };
};

let jFLocalToInputkSTableContainer = (inValue) => {
    let jVarLocalHtmlId = 'kSTableContainer';
    let jVarLocalkSTableContainer = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalkSTableContainer === null === false) {
        jVarLocalkSTableContainer.innerHTML = inValue;
    };
};

let jFLocalToInputkSSubTableContainer = (inValue) => {
    let jVarLocalHtmlId = 'kSSubTableContainer';
    let jVarLocalkSSubTableContainer = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalkSSubTableContainer === null === false) {
        jVarLocalkSSubTableContainer.innerHTML = inValue;
    };
};

export default startFunc;
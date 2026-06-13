import { initCreate, initTableWithFooter } from "/KSTableAi/V4/entry.js";
import { formSearchParamsFunc } from "./formSearchParamsFunc.js";

const onSuccessFunc = async (res) => {
    const fromReponse = await res.json();
    console.log("fromReponse : ", fromReponse);
    window.location.href = `../WithSubTable/index.html?pk=${fromReponse.pk}`;
};

const startFunc = async () => {
    debugger;
    const pkFromParams = formSearchParamsFunc({ inKeyName: "pk" });

    const config = await fetch("Index/Configs/AddItem/config.json");
    const configJson = await config.json();

    configJson.endPoints.findFromParams = configJson.endPoints.findFromParams.replace("{pk}", pkFromParams);
    configJson.callbacks.vertical.onSuccess = onSuccessFunc;

    await initCreate(configJson);

    const configForSubTable = await fetch("Index/Configs/AddItem/configForSubTable.json");
    const configForSubTableJson = await configForSubTable.json();

    const findColumn = configForSubTableJson.columnsConfig.find(element => {
        return element.columnName === "ParentPk";
    });

    findColumn.defaultValue = pkFromParams;

    await initTableWithFooter(configForSubTableJson);
};

export default startFunc;
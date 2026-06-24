import { getKSTableConfig } from "./getKSTableConfig.js";
import { callKSTable } from "./callKSTable.js";

const startFunc = async () => {
    const config = await getKSTableConfig({
        tableName: "journals"
    });

    await callKSTable(config);
};

export default startFunc;
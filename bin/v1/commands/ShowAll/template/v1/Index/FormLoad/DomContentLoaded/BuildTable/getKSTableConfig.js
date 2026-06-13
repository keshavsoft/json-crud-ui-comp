export const getKSTableConfig = async ({ tableName }) => {
    const config = await fetch("config.json");
    // debugger;
    const configJson = await config.json();

    configJson.tableName = tableName;

    configJson.endPoints.read = `/Api/V1/${tableName}/ShowAll`;
    configJson.endPoints.filter = `/Api/V1/${tableName}/FilterColumns`;

    // configJson.endPoints.dataListEndpoints.AccountNames = `/Api/V1/${tableName}/Distinct/AccountName`;
    // configJson.endPoints.dataListEndpoints.Dates = `/Api/V1/${tableName}/Distinct/Date`;

    return configJson;
};
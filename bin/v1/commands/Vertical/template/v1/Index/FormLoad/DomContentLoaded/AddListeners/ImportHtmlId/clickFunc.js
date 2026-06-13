import { startFetchAsGet } from "./FetchAsGet/start.js";
import { startFetchAsGet as FetchStockItems } from "./FetchStockItems/start.js";

const clickFuncToRun = async () => {
    await startFetchAsGet();
    await FetchStockItems();
};

export { clickFuncToRun };
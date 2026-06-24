import { StartFunc as StartFuncFetchFuncs } from './fetchFuncs.js';
import { StartFunc as StartFuncFromAfterFetch } from './AfterFetch/entryFile.js';

const startFetchAsGet = async () => {
    let localResponse = await StartFuncFetchFuncs();

    StartFuncFromAfterFetch({ inResponse: localResponse });
};

export { startFetchAsGet };

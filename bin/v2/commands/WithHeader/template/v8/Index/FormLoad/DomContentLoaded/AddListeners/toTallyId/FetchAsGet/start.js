import { StartFunc as StartFuncFetchFuncs } from './fetchFuncs.js';
import { StartFunc as StartFuncFromAfterFetch } from './AfterFetch/entryFile.js';

const startFetchAsGet = async ({ inPk, inCurrentTarget }) => {
    let localResponse = await StartFuncFetchFuncs({ inPk });

    StartFuncFromAfterFetch({
        inResponse: localResponse,
        inPk, inCurrentTarget
    });
};

export { startFetchAsGet };

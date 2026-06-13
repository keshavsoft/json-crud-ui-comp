import { StartFunc as StartFuncFetchFuncs } from './fetchFuncs.js';
import { StartFunc as StartFuncFromAfterFetch } from './AfterFetch/entryFile.js';

const startFunc = async ({ inPk }) => {
    let localResponse = await StartFuncFetchFuncs({ inPk });

    return await StartFuncFromAfterFetch({
        inResponse: localResponse,
        inPk
    });
};

export default startFunc;

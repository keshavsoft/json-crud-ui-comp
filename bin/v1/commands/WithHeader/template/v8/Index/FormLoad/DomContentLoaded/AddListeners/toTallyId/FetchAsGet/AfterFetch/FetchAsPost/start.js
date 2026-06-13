import { StartFunc as StartFuncFetchFuncs } from './fetchFuncs.js';

const startFunc = async ({ inPk }) => {
    let localResponse = await StartFuncFetchFuncs({ inPk });

    if (localResponse.status === 200) {
        return await true;
    };

    return await false;
};

export default startFunc;

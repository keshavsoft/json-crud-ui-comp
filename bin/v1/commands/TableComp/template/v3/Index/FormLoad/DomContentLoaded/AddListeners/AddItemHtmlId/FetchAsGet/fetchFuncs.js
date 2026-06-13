import getUrlJson from './getUrl.json' with {type: 'json'};

let StartFunc = async ({ inPk }) => {
    let jVarLocalGetEndPoint = `${getUrlJson.GetEndPoint}/${inPk}`;

    let response = await fetch(jVarLocalGetEndPoint);

    return await response;
};

export { StartFunc };


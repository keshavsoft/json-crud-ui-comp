import getUrlJson from './getUrl.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalGetEndPoint = getUrlJson.GetEndPoint;

    let response = await fetch(jVarLocalGetEndPoint);

    return await response;
};

export { StartFunc };


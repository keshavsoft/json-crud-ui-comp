import getUrlJson from './getUrl.json' with {type: 'json'};

let StartFunc = async ({ inPk }) => {
    let jVarLocalUrl = `${getUrlJson.GetEndPoint}/${inPk}`;

    const response = await fetch(jVarLocalUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "insertedToTally": true
        }),
    });

    return await response;
};

export { StartFunc };


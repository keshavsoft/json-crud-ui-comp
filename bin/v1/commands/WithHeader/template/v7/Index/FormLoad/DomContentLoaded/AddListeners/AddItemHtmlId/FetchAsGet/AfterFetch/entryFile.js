let StartFunc = async ({ inResponse, inPk }) => {
    if (inResponse.status === 200) {
        return await inResponse.json();
    };
};

export { StartFunc };
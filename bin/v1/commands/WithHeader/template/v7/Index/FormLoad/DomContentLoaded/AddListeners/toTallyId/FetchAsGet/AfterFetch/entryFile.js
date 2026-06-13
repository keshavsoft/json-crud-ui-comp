import fetchAsPost from "./FetchAsPost/start.js";

let StartFunc = async ({ inResponse, inPk, inCurrentTarget }) => {
    let jVarLocalResponse = await inResponse;

    if (jVarLocalResponse.status === 200) {
        const fromPost = await fetchAsPost({ inPk: inPk })
        console.log("inCurrentTarget : ", inCurrentTarget);

        inCurrentTarget.classList.add("danger");

        alert(fromPost);
    };
};

export { StartFunc };
import { startFetchAsGet } from "./FetchAsGet/start.js";

const clickFuncToRun = ({ inCurrentTarget }) => {
    const localCurrentTarget = inCurrentTarget;
    if (localCurrentTarget.classList.contains("danger")) {
        alert("already posted to tally");

        return;
    };
    // applyActive({ inCurrentTarget });

    const pkToPost = document.getElementById("htmlId").innerHTML;

    startFetchAsGet({ inPk: pkToPost, inCurrentTarget });
};

export { clickFuncToRun };
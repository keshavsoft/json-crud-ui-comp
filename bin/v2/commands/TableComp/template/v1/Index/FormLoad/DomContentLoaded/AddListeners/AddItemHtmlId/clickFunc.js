import afterHeadSave from "../../CommonFuncs/afterHeadSave.js";
import fetchAsGet from "./FetchAsGet/start.js";

const clickFuncToRun = ({ inCurrentTarget }) => {
    applyActive({ inCurrentTarget });

    const pk = prompt("Enter PK");

    if (pk === null || pk.trim() === "") return;

    jFLocalToInputhtmlId(pk);

    afterHeadSave(pk).then();
    // debugger;
    let jVarLocaltoTallyId = document.getElementById('toTallyId');

    jVarLocaltoTallyId.classList.remove("danger");

    fetchAsGet({ inPk: pk }).then(fromPromise => {
        if (fromPromise?.insertedToTally) jVarLocaltoTallyId.classList.add("danger");
    });
};

const applyActive = ({ inCurrentTarget }) => {
    const localCurrentTarget = inCurrentTarget;

    const menu = localCurrentTarget.closest("#menu");

    menu.querySelectorAll("li a.active")
        .forEach(a => a.classList.remove("active"));

    localCurrentTarget.classList.add("active");

    localCurrentTarget.classList.add("active");
};

let jFLocalToInputhtmlId = (inValue) => {
    let jVarLocalHtmlId = 'htmlId';
    let jVarLocalhtmlId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalhtmlId === null === false) {
        jVarLocalhtmlId.innerHTML = inValue;
    };
};

export { clickFuncToRun };
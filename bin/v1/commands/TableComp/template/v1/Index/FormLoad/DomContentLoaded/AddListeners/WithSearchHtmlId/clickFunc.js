import buildTable from "./BuildTable/index.js";

const clickFuncToRun = ({ inCurrentTarget }) => {
    // console.log("inCurrentTarget : ", inCurrentTarget);
    applyActive({ inCurrentTarget });
    // inCurrentTarget.classList.add("active");

    buildTable().then();
};

const applyActive = ({ inCurrentTarget }) => {
    const localCurrentTarget = inCurrentTarget;

    const menu = localCurrentTarget.closest("#menu");

    menu.querySelectorAll("li a.active")
        .forEach(a => a.classList.remove("active"));

    localCurrentTarget.classList.add("active");

    localCurrentTarget.classList.add("active");
};

export { clickFuncToRun };
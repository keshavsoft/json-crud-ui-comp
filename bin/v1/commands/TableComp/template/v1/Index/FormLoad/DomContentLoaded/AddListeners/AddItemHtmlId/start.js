import { clickFuncToRun } from "./clickFunc.js";

const funcToRun = () => {
    const htmlElement = document.getElementById('AddItemHtmlId');

    htmlElement.addEventListener("click", (event) =>
        clickFuncToRun({ inCurrentTarget: event.currentTarget })
    );
};

export { funcToRun };

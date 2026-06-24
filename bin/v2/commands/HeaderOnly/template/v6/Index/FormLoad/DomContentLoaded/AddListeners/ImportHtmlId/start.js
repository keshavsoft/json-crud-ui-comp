import { clickFuncToRun } from "./clickFunc.js";

const funcToRun = () => {
    const htmlElement = document.getElementById('ImportHtmlId');

    htmlElement.addEventListener('click', clickFuncToRun);
};

export default funcToRun;

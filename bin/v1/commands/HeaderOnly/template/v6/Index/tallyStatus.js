const startFunc = async () => {
    const tallyPromise = await fetch("/FromTally/V3/Status");

    if (tallyPromise.status === 200) {
        jFLocalDisplayShowtallyUpId();
        jFLocalDisplayNonetallyDownId();
    } else {
        jFLocalDisplayNonetallyUpId();
        jFLocalDisplayShowtallyDownId();
    };
};

let jFLocalDisplayShowtallyDownId = () => {
    let jVarLocalHtmlId = 'tallyDownId';
    let jVarLocaltallyDownId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocaltallyDownId === null === false) {
        jVarLocaltallyDownId.style.display = '';

        jVarLocaltallyDownId.classList.add("danger");
    };
};

let jFLocalDisplayNonetallyUpId = () => {
    let jVarLocalHtmlId = 'tallyUpId';
    let jVarLocaltallyUpId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocaltallyUpId === null === false) {
        jVarLocaltallyUpId.style.display = 'none';
    };
};

let jFLocalDisplayShowtallyUpId = () => {
    let jVarLocalHtmlId = 'tallyUpId';
    let jVarLocaltallyUpId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocaltallyUpId === null === false) {
        jVarLocaltallyUpId.style.display = '';

        jVarLocaltallyUpId.classList.add("active");
    };
};

let jFLocalDisplayNonetallyDownId = () => {
    let jVarLocalHtmlId = 'tallyDownId';
    let jVarLocaltallyDownId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocaltallyDownId === null === false) {
        jVarLocaltallyDownId.style.display = 'none';
    };
};

export default startFunc;
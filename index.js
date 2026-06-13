import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async (cmd) => {
    const v = getLatestVersion();

    return (await import(
        `./bin/${v}/commands/${cmd}.js`
    )).default;
};

const showAll = async (...a) =>
    (await load("showAll"))(...a);

const showAllWithSerial = async (...a) =>
    (await load("showAllWithSerial"))(...a);

const withHeader = async (...a) =>
    (await load("withHeader"))(...a);

const headerOnly = async (...a) =>
    (await load("headerOnly"))(...a);

const tableComp = async (...a) =>
    (await load("tableComp"))(...a);

export {
    load, showAll, showAllWithSerial, withHeader,
    headerOnly, tableComp
};
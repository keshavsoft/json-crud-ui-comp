// import headerBuild from "/header/v3/initHeader.js";

const buildHeader = async () => {
    const fromFetch = await fetch("./Index/headers.json");
    const headerConfig = await fromFetch.json();
    // debugger;
    await window.KSHeader(headerConfig);

    // await headerBuild(headerConfig);
};

export { buildHeader };
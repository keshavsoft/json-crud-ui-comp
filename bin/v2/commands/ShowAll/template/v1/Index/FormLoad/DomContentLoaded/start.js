import buildTable from "./BuildTable/index.js";

export function startDomContentLoaded() {
    document.addEventListener("DOMContentLoaded", buildTable);
}

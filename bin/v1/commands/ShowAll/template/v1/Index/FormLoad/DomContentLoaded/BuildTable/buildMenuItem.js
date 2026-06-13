import { createLi } from "../createLi.js";
import { createAnchor } from "../createAnchor.js";
import { createLabel } from "../createLabel.js";
import { createIcon } from "../createIcon.js";
import { orchestrateMenuClick } from "./orchestrateMenuClick.js";

export const buildMenuItem = (item, classes = {}) => {
    const li = createLi(classes.liClass);

    const a = createAnchor({
        inHtmlId: item.id,
        inHref: item.href,
        cls: classes.aClass,
        inTableName: item.inTableName
    });

    const span = createLabel(item, classes.spanClass);

    const svg = createIcon(item, classes.svgClass);

    a.addEventListener("click", orchestrateMenuClick);

    a.append(svg, span);

    li.appendChild(a);

    return li;
};
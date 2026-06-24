async function ensureTailwind() {
    function loadCss(href) {
        return new Promise((resolve, reject) => {
            const link = document.createElement("link");

            link.rel = "stylesheet";
            link.href = href;

            link.onload = resolve;
            link.onerror = reject;

            document.head.appendChild(link);
        });
    };

    const tryLocal = async () => {
        try {
            await loadCss("./tailwind-3.css");

            console.log("Tailwind loaded locally");
            return true;
        } catch { return false; }
    };

    const tryKsWebExtension = async () => {
        try {
            await loadCss("https://keshavsoft.github.io/KsWebExtension/tailwind-3.css");

            console.log("Tailwind loaded from KsWebExtension");
            return true;
        } catch { return false; }
    };

    const tryGit = async () => {
        try {
            await loadCss("https://keshavsoft.github.io/tailwind-gen-css/tailwind-3.css");

            console.log("Tailwind loaded from tailwind-gen-css");
            return true;
        } catch { return false; }
    };

    if (document.getElementById("KSTableTailwind")) {
        console.log("Tailwind loaded from Firefox Extension");
        return;
    };

    if (await tryLocal()) return;
    if (await tryKsWebExtension()) return;
    if (await tryGit()) return;

    throw new Error("Tailwind could not be loaded");
};

async function ensureKSHeader() {
    function loadScriptAsModule(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");

            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => reject(new Error(`Failed to load: ${src}`));
            script.type = "module";

            document.head.appendChild(script);
        });
    };

    function isKSTableLoaded() {
        return !!window.KSHeader;
    };

    async function tryGitHub() {
        try {
            const fromPromise = await loadScriptAsModule("https://keshavsoft.github.io/tailwind-header-dom/Public/v4.5/ksheader.js");

            console.log("KSHeader loaded from git : tailwind-header-dom");

            if (fromPromise) return true;
        } catch { return false };

        return false;
    };

    async function tryLocal() {
        try {
            const fromPromise = await loadScriptAsModule("/header/v4/initHeader.js");

            if (fromPromise) return true;
        } catch { return false };

        return false;
    };

    if (isKSTableLoaded()) {
        console.log("KSHeader loaded from Firefox Extension");
        return;
    };

    if (await tryLocal()) return;

    if (await tryGitHub()) return;

    throw new Error("KSTable could not be loaded");
};

async function ensureKSTable() {
    function loadScriptAsModule(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");

            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => reject(new Error(`Failed to load: ${src}`));
            script.type = "module";

            document.head.appendChild(script);
        });
    };

    function isKSTableLoaded() {
        return !!window.KSTable;
    };

    async function tryGitHub() {
        try {
            const fromPromise = await loadScriptAsModule("https://keshavsoft.github.io/tailwind-table-dom/Public/v12/kstable.js");

            console.log("KSTable loaded from Local Server");

            if (fromPromise) return true;
        } catch { return false };

        return false;
    };

    async function tryLocal() {
        try {
            const fromPromise = await loadScriptAsModule("/KSTable/v1/entry.js");

            console.log("KSTable loaded from Local Server");

            if (fromPromise) return true;
        } catch { return false };

        return false;
    };

    if (isKSTableLoaded()) {
        console.log("KSTable loaded from Firefox Extension");
        return;
    };

    if (await tryLocal()) return;

    if (await tryGitHub()) return;

    throw new Error("KSTable could not be loaded");
};

async function ensureKSTableComp() {
    function loadScriptAsModule(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");

            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => reject(new Error(`Failed to load: ${src}`));
            script.type = "module";

            document.head.appendChild(script);
        });
    };

    function isKSTableLoaded() {
        return !!window.KSTableComp;
    };

    async function tryGitHub() {
        try {
            const fromPromise = await loadScriptAsModule("https://keshavsoft.github.io/tailwind-table-dom-comp/Public/v4/kstable.js");

            console.log("KSTableComp loaded from git : tailwind-table-dom-comp-4");

            if (fromPromise) return true;
        } catch { return false };

        return false;
    };

    async function tryLocal() {
        try {
            const fromPromise = await loadScriptAsModule("/TableComp/v4/entry.js");

            console.log("KSTableComp loaded from Local Server : TableComp/v1");

            if (fromPromise) return true;
        } catch { return false };

        return false;
    };

    if (isKSTableLoaded()) {
        console.log("KSTable loaded from Firefox Extension");
        return;
    };

    if (await tryLocal()) return;

    if (await tryGitHub()) return;

    throw new Error("KSTableComp could not be loaded");
};

async function ensureKSVertical() {
    function loadScriptAsModule(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");

            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => reject(new Error(`Failed to load: ${src}`));
            script.type = "module";

            document.head.appendChild(script);
        });
    };

    function isKSVerticalLoaded() {
        return !!window.KSVertical;
    };

    async function tryGitHub() {
        try {
            const fromPromise = await loadScriptAsModule("https://keshavsoft.github.io/tailwind-vertical-dom/Public/v3/ksvertical.js");

            console.log("KSVertical loaded from git : tailwind-vertical-dom");

            if (fromPromise) return true;
        } catch { return false };

        return false;
    };

    async function tryLocal() {
        try {
            const fromPromise = await loadScriptAsModule("/TableComp/v4/entry.js");

            console.log("KSVertical loaded from Local Server : TableComp/v1");

            if (fromPromise) return true;
        } catch { return false };

        return false;
    };

    if (isKSVerticalLoaded()) {
        console.log("KSVertical loaded from Firefox Extension");
        return;
    };

    if (await tryLocal()) return;

    if (await tryGitHub()) return;

    throw new Error("KSVertical could not be loaded");
};

await ensureTailwind();
await ensureKSHeader();

ensureKSTable().then();
ensureKSTableComp().then();
ensureKSVertical().then();
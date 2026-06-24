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

await ensureKSTable();
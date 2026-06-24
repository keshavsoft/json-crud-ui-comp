export const callKSTable = async (config) => {
    if (window?.KSVertical?.initCreate) {
        return window.KSVertical.initCreate(config);
    };
};
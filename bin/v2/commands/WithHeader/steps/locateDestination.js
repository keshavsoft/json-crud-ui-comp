import path from "path";

export const locateDestination = ({ inToPath = process.cwd(), inResolvedFolderName }) => {
    return path.join(inToPath, inResolvedFolderName);
};
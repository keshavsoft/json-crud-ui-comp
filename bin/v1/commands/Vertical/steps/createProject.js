import fs from "fs";

export const createProject = ({ source, destination }) => {
    fs.cpSync(source, destination, { recursive: true });
};
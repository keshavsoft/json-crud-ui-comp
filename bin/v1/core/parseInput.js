export default function parseInput() {
    const [cmd, showLog] = process.argv.slice(2);

    return {
        cmd: cmd || null,
        showLog: showLog || null,
        toPath: process.cwd()
    };
};
const input = await Deno.readTextFile(new URL("./input.txt", import.meta.url));

const [stacks, steps] = input.split("\n\n");

const stackSplit = stacks.split("\n");
const numColumns = Number(stackSplit.at(-1)?.split("  ").at(-1)) - 1;

const stackBlocks = stackSplit.slice(0, -1).map((l) => {
    return l.replaceAll("    ", " ").replaceAll("[", "").replaceAll("]", "").split(" ");
});

const numRows = stackBlocks.length - 1;

const map: string[][] = [];
for (let row = 0; row < numRows + 2; row++) {
    const column: string[] = [];
    for (let col = 0; col < numColumns; col++) {
        const data = stackBlocks[col][row];
        if (data) column.push(data);
        else continue;
    }
    map.push(column.reverse());
}

const formattedSteps = steps.split("\n").map((line) => {
    const [, amount, , from, , to] = line.split(" ").map(Number);
    return {
        amount,
        from: from - 1,
        to: to - 1,
    };
});

formattedSteps.forEach((step) => {
    const prevStack = map[step.from];
    const toMove = prevStack.splice(-step.amount);
    map[step.to] && map[step.to].push(...toMove.reverse());
});

console.log(
    map.reduce((prev, curr) => {
        return prev + (curr.at(-1) || "");
    }, "")
);

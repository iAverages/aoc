const input = await Deno.readTextFile(new URL("./input.txt", import.meta.url));

const pairs = input.split("\n").map((p) => {
    return p.split(",").map((l) => l.split("-").map(Number));
});

const totalOverlaps = pairs.reduce((prev, [left, right]) => {
    // if (left[0] <= right[0] && left[])
    if (left[0] <= right[0] && left[1] >= right[0]) {
        // right overlaps with left
        return prev + 1;
    } else if (right[0] <= left[0] && right[1] >= left[0]) {
        // left overlaps with right
        return prev + 1;
    }
    return prev;
}, 0);

console.log(totalOverlaps);

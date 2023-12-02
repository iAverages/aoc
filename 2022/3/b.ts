const input = await Deno.readTextFile(new URL("./input.txt", import.meta.url));

const lines = input.split("\n");

const groups = [];
const GROUP_SIZE = 3;

for (let i = 0; i < lines.length; i += GROUP_SIZE) {
    groups.push(lines.slice(i, i + GROUP_SIZE));
}

let score = 0;

groups.forEach((group) => {
    const foundLetters = new Set();
    const firstBag = group[0];

    firstBag.split("").forEach((letter) => {
        const has = Array.from(Array(group.length)).map(() => false);
        for (let i = 0; i < group.length; i++) {
            const bag = group[i];
            if (bag.includes(letter) && !foundLetters.has(letter)) {
                has[i] = true;
            } else break;
        }
        if (has.every((i) => i)) {
            score += letter.charCodeAt(0) - (letter === letter.toLowerCase() ? 96 : 38);
            foundLetters.add(letter);
        }
    });
});

console.log(score);

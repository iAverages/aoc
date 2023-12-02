const input = await Deno.readTextFile(new URL("./input.txt", import.meta.url));

const lines = input.split("\n");

const compartments = lines.map((l) => [l.substring(0, l.length / 2), l.substring(l.length / 2)]);

let score = 0;

compartments.forEach(([left, right]) => {
    const foundLetters = new Set();
    const leftSplit = left.split("");

    leftSplit.forEach((letter) => {
        if (right.includes(letter) && !foundLetters.has(letter)) {
            foundLetters.add(letter);
            score += letter.charCodeAt(0) - (letter === letter.toLowerCase() ? 96 : 38);
        }
    });
});
console.log(score);

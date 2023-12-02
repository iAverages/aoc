export {};

const input = await Deno.readTextFile(new URL("./input.txt", import.meta.url));

const numberGroups = input.split("\n\n").map((i) => i.split("\n"));

const totals = numberGroups.map((group) => group.map(Number).reduce((prev, curr) => prev + curr)).sort((a, b) => b - a);

console.log(totals);
const TOTAL_AMOUNT = 3;
let total = 0;
for (let i = 0; i < TOTAL_AMOUNT; i++) {
    console.log(totals[i]);
    total += totals[i];
}
console.log(total);

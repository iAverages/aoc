export {};

const input = await Deno.readTextFile(new URL("./input.txt", import.meta.url));

const numberGroups = input.split("\n\n").map((i) => i.split("\n"));

const totals = numberGroups.map((group) => group.map(Number).reduce((prev, curr) => prev + curr));

console.log(Math.max(...totals));

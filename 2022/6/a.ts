const input = await Deno.readTextFile(new URL("./input.txt", import.meta.url));

const UNIQUE = 4;

for (let i = UNIQUE - 1; i < input.length; i++) {
    const letters = new Set(input.split("").slice(i - UNIQUE, i));
    if (letters.size === UNIQUE) {
        console.log(i);
        break;
    }
}

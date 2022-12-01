const DEFAULT_CONTENT = "export {};";
const day = new Date().getDate() + 1;

console.log(`Day ${day}, only ${25 - day} days left.`);

try {
    await Deno.mkdir(`${day}`);
    await Deno.writeTextFile(`./${day}/input.txt`, "");
    await Deno.writeTextFile(`./${day}/a.ts`, DEFAULT_CONTENT);
    await Deno.writeTextFile(`./${day}/b.ts`, DEFAULT_CONTENT);
} catch (_e) {
    console.log("You already ran the script today, dont delete your work now.");
}

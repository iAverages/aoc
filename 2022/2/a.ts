export {};

const input = await Deno.readTextFile(new URL("./input.txt", import.meta.url));

const rounds = input.split("\n");

let elfScore = 0;
let playerScore = 0;

const scores = {
    A: 1,
    B: 2,
    C: 3,

    X: 1,
    Y: 2,
    Z: 3,
};

rounds.forEach((round) => {
    const [elfOption, playerOption] = round.split(" ");

    elfScore += scores[elfOption];
    playerScore += scores[playerOption];

    if (
        // elf wins
        // rock scissors
        (elfOption === "A" && playerOption === "Z") ||
        // paper rock
        (elfOption === "B" && playerOption === "X") ||
        // scissors paper
        (elfOption === "C" && playerOption === "Y")
    ) {
        elfScore += 6;
    } else if (
        // Draw
        // rock scissors
        (elfOption === "A" && playerOption === "X") ||
        // paper rock
        (elfOption === "B" && playerOption === "Y") ||
        // scissors paper
        (elfOption === "C" && playerOption === "Z")
    ) {
        playerScore += 3;
        elfScore += 3;
    } else {
        // player wins
        playerScore += 6;
    }
});

console.log(`elfScore ${elfScore}`);
console.log(`playerScore ${playerScore}`);

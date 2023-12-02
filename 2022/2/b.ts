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

const losingOption = {
    A: "Z",
    B: "X",
    C: "Y",
};

const drawOption = {
    A: "X",
    B: "Y",
    C: "Z",
};

const winOption = {
    A: "Y",
    B: "Z",
    C: "X",
};

rounds.forEach((round) => {
    const [elfOption, playerOutcome] = round.split(" ");
    let playerOption = "";
    elfScore += scores[elfOption];

    // need to lose
    if (playerOutcome === "X") {
        playerOption = losingOption[elfOption];
    }

    // need to draw
    else if (playerOutcome === "Y") {
        playerOption = drawOption[elfOption];
    }

    // need to win
    else {
        playerOption = winOption[elfOption];
    }
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

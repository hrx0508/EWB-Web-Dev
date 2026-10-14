console.log("-- Multiplication Table of 5 --");

for (let i = 1; i <= 5; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}


console.log("\n-- First number > 10 divisible by 6 --");

let num = 11;

while (true) {
    if (num > 10 && num % 6 === 0) {
        console.log("Found:", num);
        break;
    }
    num++;
}


console.log("\n-- Do...While Loop with Continue --");

let i = 0;

do {
    i++;
    if (i === 3) {
        continue;
    }
    console.log("Number:", i);
} while (i < 5);

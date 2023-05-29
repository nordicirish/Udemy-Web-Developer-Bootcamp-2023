let max = parseInt(prompt("Enter the maximum number"));
while (!max) {
  max = parseInt(prompt("Enter a valid number"));
}
const targetNum = Math.floor(Math.random() * max) + 1;
console.log(targetNum);
let guess = prompt("Enter your first guess. Enter q to exit");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  guess = parseInt(guess);
  attempts++;
  if (guess > targetNum) {
    guess = prompt("Too high, try again");
  } else {
    guess = prompt("Too low, try again");
  }
}

if (guess === "q") {
  alert("OK, you quit!");
} else {
  alert(`You got it! It took you ${attempts} guesses`);
}

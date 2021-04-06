/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
 ********************/

// random number generator
const getRandomNumber = function (max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);

  return result;
};

// array sorter
const sortByNumber = function (arr) {
  const byNumber = function (item1, item2) {
    return item1 - item2;
  };

  return arr.slice().sort(byNumber);
};

/*******************
 * YOUR CODE BELOW *
 *******************/

//  Here's where you'll query the UI elements the user interacts with and
//  add event listener functions to those elements.

// first 6 sided die
const firstDie = document.querySelector("#d6-roll");
const firstDieMean = document.querySelector("#d6-rolls-mean");
const firstDieMedian = document.querySelector("#d6-rolls-median");
const firstDieMode = document.querySelector("#d6-rolls-mode");

// 2, 6 sided dice
const doubleDice1 = document.querySelector("#double-d6-roll-1");
const doubleDice2 = document.querySelector("#double-d6-roll-2");
const doubleDiceMean = document.querySelector("#double-d6-rolls-mean");
const doubleDiceMedian = document.querySelector("#double-d6-rolls-median");
const doubleDiceMode = document.querySelector("#double-d6-rolls-mode");

// 12 sided die
const singleDie12 = document.querySelector("#d12-roll");
const singleDie12Mean = document.querySelector("#d12-rolls-mean");
const singleDie12Median = document.querySelector("#d12-rolls-median");
const singleDie12Mode = document.querySelector("#d12-rolls-mode");

// 20 sided die
const singleDie20 = document.querySelector("#d20-roll");
const singleDie20Mean = document.querySelector("#d20-rolls-mean");
const singleDie20Median = document.querySelector("#d20-rolls-median");
const singleDie20Mode = document.querySelector("#d20-rolls-mode");

// Big red reset button
const resetButton = document.querySelector("#reset-button");

/*******************
 * EVENT LISTENERS *
 *******************/

// Do this stuff when the image is clicked, function ()
firstDie.addEventListener("click", diceRoll1);
doubleDice1.addEventListener("click", diceRoll2);
singleDie12.addEventListener("click", diceRoll3);
singleDie20.addEventListener("click", diceRoll4);
resetButton.addEventListener("click", reset);

/******************
 * RESET FUNCTION *
 ******************/

//  Let's fill in that reset function we left blank. It will need to:
//  1. empty all four global roll arrays
//  2. change the dice buttons back to their starting images
//  (in the `start` sub-directory of our `images` directory!)
//  3. change the text in our mean/media/mode text areas to `NA`

function reset() {
  sixes.splice[0];
  firstDie.src = "images/start/d6.png";
  // Reset mean text
  // Reset median text
  // Reset mode text
  firstDieMean.innerText = "NA";
  firstDieMedian.innerText = "NA";
  firstDieMode.innerText = "NA";

  // Rinse and repeat
  // * double 6s
  // * 12s
  // * 20

  doubleSixes.splice[0];
  doubleDice1.src = "images/start/d6.png";
  doubleDice2.src = "images/start/d6.png";
  doubleDiceMean.innerText = "NA";
  doubleDiceMedian.innerText = "NA";
  doubleDiceMode.innerText = "NA";

  twelves.splice[0];
  singleDie12.src = "images/start/d12.jpeg";
  singleDie12Mean.innerText = "NA";
  singleDie12Median.innerText = "NA";
  singleDie12Mode.innerText = "NA";

  twenties.splice[0];
  singleDie20.src = "images/start/d20.jpg";
  singleDie20Mean.innerText = "NA";
  singleDie20Median.innerText = "NA";
  singleDie20Mode.innerText = "NA";
}

// Once clicking the reset button works, you should add a call to this function in
// the global code, so things are reset immediately when the user loads the app!
reset();

/****************************
 * CLICK HANDLING FUNCTIONS *
 ****************************/

function diceRoll1() {
  let num = getRandomNumber(5);
  num = num + 1;

  firstDie.src = "images/d6/" + num + ".png";

  sixes.push(num);

  firstDieMean.innerText = mean(sixes);
  firstDieMedian.innerText = median(sixes);
  firstDieMode.innerText = mode(sixes);
}

function diceRoll2() {
  let num = getRandomNumber(5);
  num = num + 1;
  let num2 = getRandomNumber(5);
  num2 = num2 + 1;

  doubleDice1.src = "images/d6/" + num + ".png";
  doubleDice2.src = "images/d6/" + num2 + ".png";

  doubleSixes.push(num + num2);

  doubleDiceMean.innerText = mean(doubleSixes);
  doubleDiceMedian.innerText = median(doubleSixes);
  doubleDiceMode.innerText = mode(doubleSixes);
}

function diceRoll3() {
  let num = getRandomNumber(11);
  num = num + 1;

  singleDie12.src = "images/numbers/" + num + ".png";

  twelves.push(num);
  console.log("hello");
  singleDie12Mean.innerText = mean(twelves);
  singleDie12Median.innerText = median(twelves);
  singleDie12Mode.innerText = mode(twelves);
}
function diceRoll4() {
  let num = getRandomNumber(19);
  num = num + 1;

  singleDie20.src = "images/numbers/" + num + ".png";

  twenties.push(num);
  singleDie20Mean.innerText = mean(twenties);
  singleDie20Median.innerText = median(twenties);
  singleDie20Mode.innerText = mode(twenties);
}

/****************
 * MATH SECTION *
 ****************/

// Mean:
// add all numbers, divide by the quantity of numbers
// Also known as the average

function mean(arr) {
  let sum = 0;
  for (const each of arr) {
    sum = sum + each;
  }
  if (sum === 0) {
    return "NA";
  }
  return sum / arr.length;
}

// Median:
// it is the middle number
function median(arr) {
  if (arr.length === 0) {
    return "NA";
  }
  const sortedArr = sortByNumber(arr);
  let mid = sortedArr.length / 2;
  if (sortedArr.length % 2 === 0) {
    const firstVal = sortedArr[mid - 1];
    const secondVal = sortedArr[mid];
    const sum = (firstVal + secondVal) / 2;
    return sum;
  }
  return sortedArr[Math.floor(mid)];
}

// Mode:
// it is the most frequent number rolled
function mode() {}

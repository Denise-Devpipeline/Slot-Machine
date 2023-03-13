// let choiceOne;
// let choiceTwo;
// let choiceThree;

// document.getElementById("rollButton").onclick = function () {
//   choiceOne = Math.floor(Math.random() * 1000) + 1;
//   choiceTwo = Math.floor(Math.random() * 1000) + 1;
//   choiceThree = Math.floor(Math.random() * 1000) + 1;

//   document.getElementById("cOneLabel").innerHTML = choiceOne;
//   document.getElementById("cTwoLabel").innerHTML = choiceTwo;
//   document.getElementById("cThreeLabel").innerHTML = choiceThree;
// };

function randNumber() {
  return Math.floor(Math.random() * 2) + 1;
}
function getElement(byid) {
  return document.getElementById(byid);
}

function spinLever() {
  const column1 = getElement("column1");
  const column2 = getElement("column2");
  const column3 = getElement("column3");

  const symbol1 = randNumber();
  const symbol2 = randNumber();
  const symbol3 = randNumber();

  column1.innerHTML = "${column1}";
  column2.innerHTML = "${column2}";
  column3.innerHTML = "${column3}";

  if (symbol1 === symbol2 && symbol1 === symbol3) {
    infoMsg();
  } else {
    exitMsg();
  }
  function infoMsg() {
    const msg = document.getElementById("Thanks for contributing to the game!");
  }
  function exitMsg() {
    const msg = document.getElementById("Are you in a hole yet?");
  }
}

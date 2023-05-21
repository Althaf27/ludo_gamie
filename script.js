function diceNum() {
  return Math.floor(Math.random() * 6) + 1;
}

let currentPlayer = "red";

let redButton1 = 0;
let redButton2 = 0;
let redButton3 = 0;
let redButton4 = 0;

let blueButton1 = 0;
let blueButton2 = 0;
let blueButton3 = 0;
let blueButton4 = 0;

let greenButton1 = 0;
let greenButton2 = 0;
let greenButton3 = 0;
let greenButton4 = 0;

let yellowButton1 = 0;
let yellowButton2 = 0;
let yellowButton3 = 0;
let yellowButton4 = 0;

let redHome = ["button-red-1", "button-red-2", "button-red-3", "button-red-4"];

document.querySelector(".red").addEventListener("click", function () {
  let number = 6;

  document
    .querySelector(".button-red-1")
    .addEventListener("click", function () {
      if (redButton1 == 0) {
        if (number == 6) {
          redButton1 = 1;
          this.classList.remove("button-red-1");

          let place = "r" + redButton1;

          document.querySelector("." + place).classList.add("button-red-1");
        }
      } else {
        if (57 - redButton1 >= number) {
          let place = "r" + redButton1;
          document.querySelector("." + place).classList.remove("button-red-1");
          redButton1 = redButton1 + number;
          place = "r" + redButton1;
          document.querySelector("." + place).classList.add("button-red-1");
        }
      }
    });
  document
    .querySelector(".button-red-2")
    .addEventListener("click", function () {
      console.log(this.classList.remove("button-red-2"));
    });
  document
    .querySelector(".button-red-3")
    .addEventListener("click", function () {
      console.log(this.classList.remove("button-red-3"));
    });
  document
    .querySelector(".button-red-4")
    .addEventListener("click", function () {
      console.log(this.classList.remove("button-red-4"));
    });
});

// document
//             .querySelector("." + redHome[i])
//             .classList.remove("button-red-" + i + 1);

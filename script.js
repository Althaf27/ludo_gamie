function diceNum() {
  return Math.floor(Math.random() * 6) + 1;
}

let player1 = "red";
let player2 = "yellow";

let currentPlayer = player1;
let number = 0;
let discrolled = false;

let redFinished = 0;
let redCanPlay = 0;

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

let yellowFinished = 0;
let yellowCanPlay = 0;

let yellowButton1 = 0;
let yellowButton2 = 0;
let yellowButton3 = 0;
let yellowButton4 = 0;

//let redHome = ["button-red-1", "button-red-2", "button-red-3", "button-red-4"];
document.querySelector(".dice").style.backgroundColor = currentPlayer;
// document.querySelector(".dice").classList.add("dice-" + player1);

document.querySelector(".dice").addEventListener("click", function () {
  document.querySelector(".dice").style.backgroundColor = currentPlayer;
  number = diceNum();

  console.log(number);
  // number = 6;
  this.textContent = number;
  discrolled = true;

  if (currentPlayer == "red") {
    if (number !== 6) {
      currentPlayer = "yellow";
    }

    // if (redCanPlay == 0 && number !== 6) {
    //   // currentPlayer = player2;
    //   // document.querySelector(".dice").classList.remove("dice-" + player1);
    //   // document.querySelector(".dice").classList.add("dice-" + player2);
    // }
    // else if (redCanPlay>=0,)
    if (redButton1 == 0 && number == 6) {
      document
        .querySelector(".sr1")
        .addEventListener("click", startcode_r_1, { once: true });
      redCanPlay++;
    }

    if (redButton1 > 0 && 57 - redButton1 >= number) {
      let place = ".r" + redButton1;
      document.querySelector(place).addEventListener(
        "click",
        function () {
          this.classList.remove("button-red-1");
          redButton1 = redButton1 + number;
          place = ".r" + redButton1;

          document.querySelector(place).classList.add("button-red-1");
        },
        { once: true }
      );
    }
    // if (number !== 6) {
    //   document.querySelector(".dice").classList.remove("dice-" + player1);
    //   document.querySelector(".dice").classList.add("dice-" + player2);
    // }

    // tdocument.querySelector(".turn").textContent = currentPlayer + " turn";
  } else if (currentPlayer == "yellow") {
    if (number !== 6) {
      currentPlayer = "red";
    }
    if (yellowButton1 == 0 && number == 6) {
      document
        .querySelector(".sy1")
        .addEventListener("click", startcode_y_1, { once: true });
      yellowCanPlay++;
    }

    if (yellowButton1 > 0 && 57 - yellowButton1 >= number) {
      let place = ".y" + yellowButton1;
      document.querySelector(place).addEventListener(
        "click",
        function () {
          this.classList.remove("button-y-1");
          yellowButton1 = yellowButton1 + number;
          place = ".y" + yellowButton1;

          document.querySelector(place).classList.add("button-y-1");
        },
        { once: true }
      );
    }
  }

  // document.querySelector(".dice").style.backgroundColor = currentPlayer;
});

function startcode_r_1() {
  console.log(number);
  if (currentPlayer == "red") {
    if (redButton1 == 0) {
      if (number == 6) {
        redButton1 = 1;
        this.classList.remove("button-red-1");

        let place = "r" + redButton1;

        document.querySelector("." + place).classList.add("button-red-1");
        discrolled = false;
      }
    }
  }
}

function startcode_y_1() {
  console.log(number);
  if (currentPlayer == "yellow") {
    if (yellowButton1 == 0) {
      if (number == 6) {
        yellowButton1 = 1;
        this.classList.remove("button-y-1");

        let place = "y" + yellowButton1;

        document.querySelector("." + place).classList.add("button-y-1");
        discrolled = false;
      }
    }
  }
}

// if (number == 6) {
// document
//   .querySelector(".sr1")
//   .addEventListener("click", startcode_r_1, { once: true });

// document.querySelector(".button-red-2").addEventListener("click", function () {
//   console.log(this.classList.remove("button-red-2"));
// });
// document.querySelector(".button-red-3").addEventListener("click", function () {
//   console.log(this.classList.remove("button-red-3"));
// });
// document.querySelector(".button-red-4").addEventListener("click", function () {
//   console.log(this.classList.remove("button-red-4"));
// });

// document
//             .querySelector("." + redHome[i])
//             .classList.remove("button-red-" + i + 1);

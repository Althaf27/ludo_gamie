function diceNum() {
  return Math.floor(Math.random() * 6) + 1;
}

let red_1 = document.createElement("i");
red_1.classList.add("fa-solid");
red_1.classList.add("fa-chess-pawn");
red_1.classList.add("red-1");

let red_2 = document.createElement("i");
red_2.classList.add("fa-solid");
red_2.classList.add("fa-chess-pawn");
red_2.classList.add("red-2");

let red_3 = document.createElement("i");
red_3.classList.add("fa-solid");
red_3.classList.add("fa-chess-pawn");
red_3.classList.add("red-3");

let red_4 = document.createElement("i");
red_4.classList.add("fa-solid");
red_4.classList.add("fa-chess-pawn");
red_4.classList.add("red-4");

let yellow_1 = document.createElement("i");
yellow_1.classList.add("fa-solid");
yellow_1.classList.add("fa-chess-pawn");
yellow_1.classList.add("yellow-1");

let yellow_2 = document.createElement("i");
yellow_2.classList.add("fa-solid");
yellow_2.classList.add("fa-chess-pawn");
yellow_2.classList.add("yellow-2");

let yellow_3 = document.createElement("i");
yellow_3.classList.add("fa-solid");
yellow_3.classList.add("fa-chess-pawn");
yellow_3.classList.add("yellow-3");

let yellow_4 = document.createElement("i");
yellow_4.classList.add("fa-solid");
yellow_4.classList.add("fa-chess-pawn");
yellow_4.classList.add("yellow-4");

let player1 = "red";
let player2 = "yellow";

let currentPlayer = player1;
let number = 0;
let discrolled = false;

let notselected = true;

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
  console.log("althaf");
  notselected = true;
  document.querySelector(".dice").style.backgroundColor = currentPlayer;
  number = diceNum();

  console.log(number);
  // number = 6;
  this.textContent = number;
  discrolled = true;

  if (currentPlayer == "red" && yellowFinished !== 4) {
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
          if (notselected) {
            // this.classList.remove("button-red-1");
            this.removeChild(document.querySelector(".red-1"));
            redButton1 = redButton1 + number;
            place = ".r" + redButton1;

            // document.querySelector(place).classList.add("button-red-1");
            document.querySelector(place).appendChild(red_1);

            if (redButton1 == 57) {
              redFinished++;
            }
            notselected = false;
          }
        },
        { once: true }
      );
    }
    // *************************************************************************
    if (redButton2 == 0 && number == 6) {
      document
        .querySelector(".sr2")
        .addEventListener("click", startcode_r_2, { once: true });
      redCanPlay++;
    }

    if (redButton2 > 0 && 57 - redButton2 >= number) {
      let place = ".r" + redButton2;
      document.querySelector(place).addEventListener(
        "click",
        function () {
          if (notselected) {
            this.removeChild(document.querySelector(".red-2"));
            redButton2 = redButton2 + number;
            place = ".r" + redButton2;

            document.querySelector(place).appendChild(red_2);

            if (redButton2 == 57) {
              redFinished++;
            }
            notselected = false;
          }
        },
        { once: true }
      );
    }

    // ****************************************************************************

    if (redButton3 == 0 && number == 6) {
      document
        .querySelector(".sr3")
        .addEventListener("click", startcode_r_3, { once: true });
      redCanPlay++;
    }

    if (redButton3 > 0 && 57 - redButton3 >= number) {
      let place = ".r" + redButton3;
      document.querySelector(place).addEventListener(
        "click",
        function () {
          if (notselected) {
            this.removeChild(document.querySelector(".red-3"));
            redButton3 = redButton3 + number;
            place = ".r" + redButton3;

            document.querySelector(place).appendChild(red_3);

            if (redButton3 == 57) {
              redFinished++;
            }

            notselected = false;
          }
        },
        { once: true }
      );
    }

    // ****************************************************************************

    if (redButton4 == 0 && number == 6) {
      document
        .querySelector(".sr4")
        .addEventListener("click", startcode_r_4, { once: true });
      redCanPlay++;
    }

    if (redButton4 > 0 && 57 - redButton4 >= number) {
      let place = ".r" + redButton4;
      document.querySelector(place).addEventListener(
        "click",
        function () {
          if (notselected) {
            this.removeChild(document.querySelector(".red-4"));
            redButton4 = redButton4 + number;
            place = ".r" + redButton4;

            document.querySelector(place).appendChild(red_4);

            if (redButton4 == 57) {
              redFinished++;
            }

            notselected = false;
          }
        },
        { once: true }
      );
    }

    // ****************************************************************************
    // if (number !== 6) {
    //   document.querySelector(".dice").classList.remove("dice-" + player1);
    //   document.querySelector(".dice").classList.add("dice-" + player2);
    // }

    // tdocument.querySelector(".turn").textContent = currentPlayer + " turn";
  } else if (currentPlayer == "yellow" && redFinished !== 4) {
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
          if (notselected) {
            // this.classList.remove("button-red-1");
            this.removeChild(document.querySelector(".yellow-1"));
            yellowButton1 = yellowButton1 + number;
            place = ".y" + yellowButton1;

            // document.querySelector(place).classList.add("button-red-1");
            document.querySelector(place).appendChild(yellow_1);

            if (yellowButton1 == 57) {
              yellowFinished++;
            }
            notselected = false;
          }
        },
        { once: true }
      );
    }
    // *************************************************************************
    if (yellowButton2 == 0 && number == 6) {
      document
        .querySelector(".sy2")
        .addEventListener("click", startcode_y_2, { once: true });
      yellowCanPlay++;
    }

    if (yellowButton2 > 0 && 57 - yellowButton2 >= number) {
      let place = ".y" + yellowButton2;
      document.querySelector(place).addEventListener(
        "click",
        function () {
          if (notselected) {
            this.removeChild(document.querySelector(".yellow-2"));
            yellowButton2 = yellowButton2 + number;
            place = ".y" + yellowButton2;

            document.querySelector(place).appendChild(yellow_2);
            if (yellowButton2 == 57) {
              yellowFinished++;
            }
            notselected = false;
          }
        },
        { once: true }
      );
    }

    // ****************************************************************************

    if (yellowButton3 == 0 && number == 6) {
      document
        .querySelector(".sy3")
        .addEventListener("click", startcode_y_3, { once: true });
      yellowCanPlay++;
    }

    if (yellowButton3 > 0 && 57 - yellowButton3 >= number) {
      let place = ".y" + yellowButton3;
      document.querySelector(place).addEventListener(
        "click",
        function () {
          if (notselected) {
            this.removeChild(document.querySelector(".yellow-3"));
            yellowButton3 = yellowButton3 + number;
            place = ".y" + yellowButton3;

            document.querySelector(place).appendChild(yellow_3);

            if (yellowButton3 == 57) {
              yellowFinished++;
            }
            notselected = false;
          }
        },
        { once: true }
      );
    }

    // ****************************************************************************

    if (yellowButton4 == 0 && number == 6) {
      document
        .querySelector(".sy4")
        .addEventListener("click", startcode_y_4, { once: true });
      yellowCanPlay++;
    }

    if (yellowButton4 > 0 && 57 - yellowButton4 >= number) {
      let place = ".y" + yellowButton4;
      document.querySelector(place).addEventListener(
        "click",
        function () {
          if (notselected) {
            this.removeChild(document.querySelector(".yellow-4"));
            yellowButton4 = yellowButton4 + number;
            place = ".y" + yellowButton4;

            document.querySelector(place).appendChild(yellow_4);

            if (yellowButton4 == 57) {
              yellowFinished++;
            }
            notselected = false;
          }
        },
        { once: true }
      );
    }
  }

  if (redFinished == 4) {
    alert("red won!");
  } else if (yellowFinished == 4) {
    alert("yellow won!");
  }

  // document.querySelector(".dice").style.backgroundColor = currentPlayer;
});

function startcode_r_1() {
  if (notselected) {
    console.log(number);
    if (currentPlayer == "red") {
      if (redButton1 == 0) {
        if (number == 6) {
          redButton1 = 1;
          // this.classList.remove("button-red-1");
          this.removeChild(document.querySelector(".red-1"));
          let place = "r" + redButton1;

          // document.querySelector("." + place).classList.add("button-red-1");
          // document.querySelector("." + place).appendChild(red_1);
          document.querySelector("." + place).appendChild(red_1);
          discrolled = false;
        }
      }
    }
    notselected = false;
  }
}

function startcode_r_2() {
  if (notselected) {
    console.log(number);
    if (currentPlayer == "red") {
      if (redButton2 == 0) {
        if (number == 6) {
          redButton2 = 1;
          this.removeChild(document.querySelector(".red-2"));

          let place = "r" + redButton2;

          document.querySelector("." + place).appendChild(red_2);
          discrolled = false;
        }
      }
    }
    notselected = false;
  }
}

function startcode_r_3() {
  if (notselected) {
    console.log(number);
    if (currentPlayer == "red") {
      if (redButton3 == 0) {
        if (number == 6) {
          redButton3 = 1;
          this.removeChild(document.querySelector(".red-3"));

          let place = "r" + redButton3;

          document.querySelector("." + place).appendChild(red_3);
          discrolled = false;
        }
      }
    }
    notselected = false;
  }
}

function startcode_r_4() {
  if (notselected) {
    console.log(number);
    if (currentPlayer == "red") {
      if (redButton4 == 0) {
        if (number == 6) {
          redButton4 = 1;
          this.removeChild(document.querySelector(".red-4"));

          let place = "r" + redButton4;

          document.querySelector("." + place).appendChild(red_4);
          discrolled = false;
        }
      }
    }
    notselected = false;
  }
}
// ****************************************************************************

function startcode_y_1() {
  if (notselected) {
    console.log(number);
    if (currentPlayer == "yellow") {
      if (yellowButton1 == 0) {
        if (number == 6) {
          yellowButton1 = 1;
          // this.classList.remove("button-red-1");
          this.removeChild(document.querySelector(".yellow-1"));
          let place = "y" + yellowButton1;

          // document.querySelector("." + place).classList.add("button-red-1");
          // document.querySelector("." + place).appendChild(red_1);
          document.querySelector("." + place).appendChild(yellow_1);
          discrolled = false;
        }
      }
    }
    notselected = false;
  }
}

function startcode_y_2() {
  if (notselected) {
    console.log(number);
    if (currentPlayer == "yellow") {
      if (yellowButton2 == 0) {
        if (number == 6) {
          yellowButton2 = 1;
          this.removeChild(document.querySelector(".yellow-2"));

          let place = "y" + yellowButton2;

          document.querySelector("." + place).appendChild(yellow_2);
          discrolled = false;
        }
      }
    }
    notselected = false;
  }
}

function startcode_y_3() {
  if (notselected) {
    console.log(number);
    if (currentPlayer == "yellow") {
      if (yellowButton3 == 0) {
        if (number == 6) {
          yellowButton3 = 1;
          this.removeChild(document.querySelector(".yellow-3"));

          let place = "y" + yellowButton3;

          document.querySelector("." + place).appendChild(yellow_3);
          discrolled = false;
        }
      }
    }
    notselected = false;
  }
}

function startcode_y_4() {
  if (notselected) {
    console.log(number);
    if (currentPlayer == "yellow") {
      if (yellowButton4 == 0) {
        if (number == 6) {
          yellowButton4 = 1;
          this.removeChild(document.querySelector(".yellow-4"));

          let place = "y" + yellowButton4;

          document.querySelector("." + place).appendChild(yellow_4);
          discrolled = false;
        }
      }
    }
    notselected = false;
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

let test = document.querySelector("main").children;
let j = 1;
var tabResult = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [2, 5, 8],
  [2, 4, 6],
  [6, 7, 8],
  [1, 4, 7],
  [3, 4, 5]
];
for (let i = 0; i < test.length; i++) {
  var tabVerif = [];
  var tabX = [];
  var tabO = [];
  test[i].addEventListener("click", function() {
    j++;
    if (j % 2 == 0) {
      if (verif(i)) {
        alert("case plaine");
        j--;
      } else {
        test[i].innerHTML = "X";
        test[i].classList.add("red");
        tabVerif.push(i);
        tabX.push(i);
      }
    } else {
      if (verif(i)) {
        alert("case plaine");
        j--;
      } else {
        test[i].innerHTML = "O";
        test[i].classList.add("blue");
        tabVerif.push(i);
        tabO.push(i);
      }
    }
    result(tabX, tabO);
  });
}
var verif = function(i) {
  for (let j = 0; j < test.length; j++) {
    if (tabVerif[j] == i) {
      return true;
    }
  }
};

var result = function(a, b) {
  if (j % 2 == 0) {
    for (let i = 0; i < tabResult.length; i++) {
      let test = 0;
      for (let j = 0; j < a.length; j++) {
        for (let k = 0; k < a.length; k++) {
          if (tabResult[i][j] === a[k]) {
            test = test + 1;
          }
        }
      }
      if (test == 3) {
        alert("win X");
      }
    }
  } else if (j % 2 == 1) {
    for (let i = 0; i < tabResult.length; i++) {
      let test = 0;
      for (let j = 0; j < b.length; j++) {
        for (let k = 0; k < b.length; k++) {
          if (tabResult[i][j] === b[k]) {
            test = test + 1;
          }
        }
      }
      if (test == 3) {
        alert("win O");

      }
    }
  }
};

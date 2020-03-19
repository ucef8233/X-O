let cas = document.querySelector("main").children;
let resultat = document.querySelector(".res").children;
let j = 1;
let colorTab = [];
var resultX = 0;
var resultO = 0;
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

for (let i = 0; i < cas.length; i++) {
  var tabVerif = [];
  var tabX = [];
  var tabO = [];
  cas[i].addEventListener("click", function() {
    j++;
    if (j % 2 == 0) {
      if (verif(i)) {
        alert("case plaine");
        j--;
      } else {
        cas[i].innerHTML = "X";
        cas[i].classList.add("black");
        tabVerif.push(i);
        tabX.push(i);
      }
    } else {
      if (verif(i)) {
        alert("case plaine");
        j--;
      } else {
        cas[i].innerHTML = "O";
        cas[i].classList.add("black");
        tabVerif.push(i);
        tabO.push(i);
      }
    }
    result(tabX, tabO);
  });
}
var verif = function(i) {
  for (let j = 0; j < cas.length; j++) {
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
        resultX = resultX + 1;
        resultat[0].innerHTML = resultX;
        resultat[1].innerHTML = resultO;
        colorTab = tabResult[i];
        resultColor(cas, colorTab);
        replay();
      }
      if (tabVerif.length == 9) {
        replay();
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
        resultO = resultO + 1;
        resultat[1].innerHTML = resultO;
        resultat[0].innerHTML = resultX;
        colorTab = tabResult[i];
        resultColor(cas, colorTab);
        replay();
      }
      if (tabVerif.length == 9) {
        replay();
      }
    }
  }
};
var resultColor = function(x, y) {
  for (let e = 0; e < x.length; e++) {
    for (let r = 0; r < y.length; r++) {
      if (y[r] == [e]) {
        x[e].classList.add("bg");
        window.setTimeout(function() {
          x[e].classList.remove("bg");
        }, 1500);
      }
    }
  }
};
var replay = function() {
  for (let j = 0; j < 9; j++) {
    cas[j].innerHTML = "";
  }

  tabX = [];
  tabO = [];
  tabVerif = [];
  test = 0;
  colorTab = [];
};

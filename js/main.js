// Total gradepoints = sumation(subject credits * 10)

function calculateThree() {
  var x = document.getElementById("gradForm");
  var gp = 0;
  var tgp = 230;

  gp = (parseInt(x.elements[0].value) + parseInt(x.elements[1].value)) * 4;
  gp = gp + (parseInt(x.elements[2].value) + parseInt(x.elements[3].value)) * 5;
  gp = gp + (parseInt(x.elements[4].value)) * 4;
  gp = gp + (parseInt(x.elements[5].value));

  var spi = (gp / tgp) * 10;

  //display result
  if (spi) {
    document.getElementById("marks").innerHTML = spi;
  } else {
    document.getElementById("marks").innerHTML = "invalidInput :(";
  }

}

function calculateFour() {
  var x = document.getElementById("gradeForm");
  var gp = 0;
  var tgp = 240;

  gp = parseInt(x.elements[0].value) + parseInt(x.elements[1].value) + parseInt(x.elements[2].value);
  gp = gp + (parseInt(x.elements[3].value) * 4);
  gp = gp + (parseInt(x.elements[4].value) + parseInt(x.elements[5].value) + parseInt(x.elements[6].value)) * 5;
  gp = gp + (parseInt(x.elements[7].value) * 2);


  var spi = (gp / tgp) * 10;
  spi = spi.toFixed(2);

  // display result
  if (spi) {
    document.getElementById("marks").innerHTML = spi;
  } else {
    document.getElementById("marks").innerHTML = "invalidInput :(";
  }

}

function calculateFive() {
  var x = document.getElementById("gradeForm");
  var gp = 0;
  var tgp = 250; // total grade points that can be achieved

  // gp achieved * credits
  gp = gp + parseInt(x.elements[0].value);
  gp = gp + (parseInt(x.elements[1].value) * 2);
  gp = gp + (parseInt(x.elements[2].value) * 3);
  gp = gp + (parseInt(x.elements[3].value) * 4);
  gp = gp + ((parseInt(x.elements[4].value) + parseInt(x.elements[5].value) + parseInt(x.elements[6].value)) * 5)


  var spi = (gp / tgp) * 10;
  spi = spi.toFixed(2); // FIXME: This is not very efficient method

  // display result
  if (spi) {
    document.getElementById("marks").innerHTML = spi;
  } else {
    document.getElementById("marks").innerHTML = "invalidInput :(";
  }

}

function calculateSix() {
  var x = document.getElementById("gradeForm");
  var gp = 0;
  var tgp = 280; // total grade points that can be achieved

  // gp achieved * credits
  gp = gp + ((parseInt(x.elements[0].value) + parseInt(x.elements[1].value) + parseInt(x.elements[2].value) + parseInt(x.elements[3].value) + parseInt(x.elements[4].value)) * 4);
  gp = gp + (parseInt(x.elements[5].value) * 3);
  gp = gp + ((parseInt(x.elements[6].value) + parseInt(x.elements[7].value)) * 2);
  gp = gp + (parseInt(x.elements[8].value));

  var spi = (gp / tgp) * 10;
  spi = spi.toFixed(2); // rounds of decimal to 2 places

  // display result
  if (spi) {
    document.getElementById("marks").innerHTML = spi;
  } else {
    document.getElementById("marks").innerHTML = "invalidInput :(";
  }

}

function calculateSeven() {
  var x = document.getElementById("gradeForm");
  var gp = 0;
  var tgp = 220; // total grade points that can be achieved

  // gp achieved * credits
  gp = gp + ((parseInt(x.elements[0].value) + parseInt(x.elements[1].value) + parseInt(x.elements[2].value) + parseInt(x.elements[3].value)) * 4);
  gp = gp + (parseInt(x.elements[4].value) * 3);
  gp = gp + (parseInt(x.elements[5].value) * 2);
  gp = gp + (parseInt(x.elements[6].value));

  var spi = (gp / tgp) * 10;
  spi = spi.toFixed(2); // rounds of decimal to 2 places

  // display result
  if (spi) {
    document.getElementById("marks").innerHTML = spi;
  } else {
    document.getElementById("marks").innerHTML = "invalidInput :(";
  }

}

function refresh() {
  window.location.reload(false);
}
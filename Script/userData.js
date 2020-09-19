var covidPoints = 0;
var testLocation ="";
var dob = document.getElementById("defaultCheck1");
var currDate = document.getElementById("defaultCheck1");

function calculate_age(dt1, dt2) {
  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60 * 24);
  return Math.abs(Math.round(diff/365.25));
 }

function calcCovidPoints() {
  var age = calculate_age(dob, currDate);

  if(age < 4){
    covidPoints += 3;
  } else if(age < 18){
    covidPoints += 0;
  } else if(age < 40){
    covidPoints += 1;
  } else if(age < 60){
    covidPoints += 2;
  } else if(age > 60){
    covidPoints += 3;
  }

  var isFever = document.getElementById("defaultCheck1");
  var isDryCough = document.getElementById("defaultCheck2");
  var isTiredness = document.getElementById("defaultCheck3");
  var isSoreThroat = document.getElementById("defaultCheck4");
  var isDiarrhoea = document.getElementById("defaultCheck5");
  var isLossOfTS = document.getElementById("defaultCheck6");
  var isShortnessOfB = document.getElementById("defaultCheck7");
  var isChestPain = document.getElementById("defaultCheck8");
  var isLossOfSM = document.getElementById("defaultCheck9");

  if(isFever.checked){
  covidPoints += 3;
  }

  if(isCough.checked){
  covidPoints += 1;
  }

  if(isTiredness.checked){
  covidPoints += 1;
  }

  if(isSoreThroat.checked){
  covidPoints += 2;
  }

  if(isDiarrhoea.checked){
  covidPoints += 2;
  }

  if(isLossOfTS.checked){
  covidPoints += 3;
  }

  if(isShortnessOfBreath.checked){
  covidPoints += 10;
  }

  if(isPersistentPain.checked){
  covidPoints += 10;
  }

  if(isLossOfSM.checked){
  covidPoints += 10;
  }
}

function findLocation(covidPoints){
  if (covidPoints < 5) {
    testLocation = "StayHome";
  } else if (covidPoints < 10) {
    testLocation = "TestCenter";
  } else {
    testLocation = "Hospital";
  }
}

console.log(covidPoints);
console.log(testLocation);
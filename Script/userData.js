var covidPoints = 0;
var testLocation = "";
var age = 0;

function getAge(bDay, currDay) {
  var currDay = new Date(currDay.substring(6,10), currDay.substring(0,2)-1, currDay.substring(3,5));
  var yearNow = currDay.getYear();
  var monthNow = currDay.getMonth();
  var dateNow = currDay.getDate();

  var dob = new Date(bDay.substring(6,10), bDay.substring(0,2)-1, bDay.substring(3,5));
  var yearDob = dob.getYear();
  var monthDob = dob.getMonth();
  var dateDob = dob.getDate();

  yearAge = yearNow - yearDob - 1;

  if (monthNow > monthDob) {
    yearAge++;
  } else if (dateNow >= dateDob && monthNow == monthDob) {
    yearAge++;
  }

  return yearAge;
}

function calcCovidPoints() {
	var age = getAge(document.getElementById("date2").value, document.getElementById("date1").value)
  if (age ===0) {
    covidPoints +=0;
  }
    else if(age < 4){
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

  var isAbroad = document.getElementById("exampleRadios1");
  var isContact = document.getElementById("exampleRadios3")
  var isFever = document.getElementById("defaultCheck1");
  var isCough = document.getElementById("defaultCheck2");
  var isTiredness = document.getElementById("defaultCheck3");
  var isSoreThroat = document.getElementById("defaultCheck4");
  var isDiarrhoea = document.getElementById("defaultCheck5");
  var isLossOfTS = document.getElementById("defaultCheck6");
  var isShortnessOfB = document.getElementById("defaultCheck7");
  var isChestPain = document.getElementById("defaultCheck8");
  var isLossOfSM = document.getElementById("defaultCheck9");

  if(isAbroad.checked){
  	covidPoints += 1;
  }

  if(isContact.checked){
  	covidPoints += 2
  }

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

  if(isShortnessOfB.checked){
  covidPoints += 10;
  }

  if(isChestPain.checked){
  covidPoints += 10;
  }

  if(isLossOfSM.checked){
  covidPoints += 10;
  }

  console.log(covidPoints);
  console.log(age);
}

function findLocation(){
  if (covidPoints < 5) {
    window.location.assign("Cancel.html");
  } else if (covidPoints < 12) {
    window.location.assign("TestingFound.html");
  } else {
    window.location.assign("HospitalFound.html");
  }
  covidPoints = 0;
  console.log(testLocation);
}

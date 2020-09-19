var covidPoints = 0;
var testLocation = "";
// var age = 0;
//
// var dob = document.getElementById("date2").value;
// var currDate = document.getElementById("date1").value;
//
// function calculate_age(dt1, dt2) {
//   var diff = (dt2.getTime() - dt1.getTime()) / 1000;
//   diff /= (60 * 60 * 24);
//   return Math.abs(Math.round(diff/365.25));
//  }
function getAge(dateString) {
  var now = new Date();
  var today = new Date(now.getYear(),now.getMonth(),now.getDate());

  var yearNow = now.getYear();
  var monthNow = now.getMonth();
  var dateNow = now.getDate();

  var dob = new Date(dateString.substring(6,10),
                     dateString.substring(0,2)-1,                   
                     dateString.substring(3,5)                  
                     );

  var yearDob = dob.getYear();
  var monthDob = dob.getMonth();
  var dateDob = dob.getDate();
  var age = {};
  var ageString = "";
  var yearString = "";
  var monthString = "";
  var dayString = "";


  yearAge = yearNow - yearDob;

  if (monthNow >= monthDob)
    var monthAge = monthNow - monthDob;
  else {
    yearAge--;
    var monthAge = 12 + monthNow -monthDob;
  }

  if (dateNow >= dateDob)
    var dateAge = dateNow - dateDob;
  else {
    monthAge--;
    var dateAge = 31 + dateNow - dateDob;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  age = {
      years: yearAge,
      months: monthAge,
      days: dateAge
      };

  if ( age.years > 1 ) yearString = " years";
  else yearString = " year";


  return age.years;
}

function calcCovidPoints() {
	var age = getAge(document.getElementById("date2").value)
 
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
    testLocation = "StayHome";
  } else if (covidPoints < 10) {
    testLocation = "TestCenter";
  } else {
    testLocation = "Hospital";
  }
  console.log(testLocation);
}


var data = [100, 89, 98.9, 100];

console.log(data)

for (score = 0; score < data.length; score += 1) {
  console.log('Grades in array --> ' + data[score]);
}

function displayData() {
  document.getElementById('current_Data').innerHTML = "Your current Grades: " + data;
}

var score;
var scoreInt;

// THIS IS PRETTY MUCH THE BAD BOY THAT DOES ALL THE LIFTING
// most of the rest of the code is just to display results etc
// this is what you want to change to adapt the constraints inside
// of the array
function addData() {
  var newElement = prompt('add more grades');
  var newElementInt = parseFloat(newElement);

  if (isNaN(newElementInt) === false && newElementInt <= 100 && newElementInt > 10) {
    console.log('your input is: ' + newElementInt);
    data[data.length] = newElementInt;
    console.log(data)
    document.getElementById('updated_Array').innerHTML = 'Updated grades: ' + data;
  } else {
      console.log('Your input is not a valid grade, try again!');
  }
  }

// this code simply gives you the final grade using the contents of the array

function countValue() {
  var sum = 0;
  for (var i = 0; i < data.length; i++) {
    sum += +data[i];
    var finalValue = (sum/data.length);
    // the result gets rounded up to 1 place after the decimal point
    var roundedValue = Math.round(finalValue * 10) / 10;
    document.getElementById('final_Value').innerHTML = 'Final Score: ' + roundedValue;
  }
}

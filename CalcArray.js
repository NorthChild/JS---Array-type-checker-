var grades = [100, 100, 100, 100];

console.log(grades)

function displayGrades() {
  document.getElementById('current_grades').innerHTML = "Your current Grades: " + grades;
}

var score;
var scoreInt;

// THIS IS PRETTY MUCH THE BAD BOY THAT DOES ALL THE HEAVY LIFTING
// most of the rest of the code is just to show results etc
// this is what you want to change to adapt the constraints inside
// of the array


function addGrade() {
  var score = prompt('add more grades');
  var scoreInt = parseFloat(score);
  console.log('your input is: ' + scoreInt);
  if (isNaN(scoreInt) === false && scoreInt < 100 && scoreInt > 10) {
    grades[grades.length] = scoreInt;
    console.log(grades)
    document.getElementById('updated_grades').innerHTML = 'Updated grades: ' + grades;
  } else {
      console.log('Your input is not a valid grade, try again!');
  }
  }

// this code simply gives you the final grade using the contents of the array
function countGrades() {
  var sum = 0;
  for (var i = 0; i < grades.length; i++) {
    sum += +grades[i];
    var finalScore = (sum/grades.length)
    document.getElementById('final_Grade').innerHTML = 'Final Score: ' + finalScore;
  }
}

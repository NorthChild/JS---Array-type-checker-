var grades = [100, 100, 100, 100];

console.log(grades)

for (score = 0; score < grades.length; score += 1) {
  console.log('Grades in array --> ' + grades[score]);
}

function displayGrades() {
  document.getElementById('current_grades').innerHTML = "Your current Grades: " + grades;
}

var score;
var scoreInt;

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

function countGrades() {
  var sum = 0;
  for (var i = 0; i < grades.length; i++) {
    sum += +grades[i];
    var finalScore = (sum/grades.length)
    document.getElementById('final_Grade').innerHTML = 'Final Score: ' + finalScore;
  }
}

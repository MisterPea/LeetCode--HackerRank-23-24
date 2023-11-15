/*
HackerLand University has the following grading policy:
Every student receives a grad in the inclusive range from 1 to 100.
Any grad less than 40 is a failing grade.

Sam is a professor at the university and likes to round each student's grad according to these rules:
If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
Examples:
 grade = 84 round to 85 (85 - 84 is less than 3)
 grade = 29 do not round (result is less than 40)
 grade = 57 do not round (60 - 57 is 3 or higher)
Given the initial value of grade for each of Sam's n students, write code to automate the rounding process.

Returns
int[n]: the grades after rounding as appropriate
*/
function gradingStudents(grades) {
  const gradesRounded = [];
  for (let i = 0; i < grades.length; i += 1) {
    let currentGrade = grades[i];
    if (currentGrade >= 38) {
      const amtToNextNum = 5 - grades[i] % 5;
      if (amtToNextNum < 3) currentGrade += amtToNextNum;
    }
    gradesRounded.push(currentGrade);
  }
  return gradesRounded;
}

const grades = [73, 67, 38, 33];
gradingStudents(grades); // [ 75, 67, 40, 33 ]
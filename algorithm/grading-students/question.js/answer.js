function gradingStudents(grades) {
  return grades.map((grade) => {
    if (grade < 38) {
      return grade;
    } else {
      let nextMultiple = Math.ceil(grade / 5) * 5;
      if (nextMultiple - grade < 3) {
        return nextMultiple;
      } else {
        return grade;
      }
    }
  });
}
console.log(gradingStudents([73, 67, 38, 33])); //output:[ 75, 67, 40, 33 ]

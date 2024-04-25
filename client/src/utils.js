const getLetterGrade = (gradeScale, mark, level) => {
  if (!Array.isArray(gradeScale) || !gradeScale.length) {
    throw new Error("Grade scale not provided.");
  }

  if (mark < 0 || mark > 100) {
    throw new Error("Mark is out of range.");
  }

  if (mark < 0) {
    throw new Error("Mark is out of range.");
  }

  const grade = findGradeEntry(gradeScale, mark, level);

  if (grade === null) {
    throw new Error("No matching grade found for the provided mark and level.");
  }

  return grade;
};

function findGradeEntry(gradeScale, mark, level) {
  const entry = gradeScale.find((item) => {
    return (
      item.level === level && mark >= item.min_mark && mark <= item.max_mark
    );
  });

  return entry ? entry.grade : null;
}

module.exports = { getLetterGrade };

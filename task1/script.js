function analyzeScores(students) {
  if (!Array.isArray(students) || students.length === 0) {
    return {
      passed: [],
      failed: [],
      average: 0,
      best: null
    };
  }

  const passed = students
    .filter(student => student.score >= 60)
    .map(student => student.name);

  const failed = students
    .filter(student => student.score < 60)
    .map(student => student.name);

  const totalScore = students.reduce((sum, student) => {
    return sum + student.score;
  }, 0);

  const average = totalScore / students.length;

  const bestStudent = students.reduce((best, student) => {
    return student.score > best.score ? student : best;
  });

  return {
    passed: passed,
    failed: failed,
    average: average,
    best: bestStudent.name
  };
}

const students = [
  { name: "Іван", score: 85 },
  { name: "Марія", score: 42 },
  { name: "Олег", score: 93 },
  { name: "Анна", score: 55 }
];

console.log(analyzeScores(students));
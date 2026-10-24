
let scores = [];

// Generate 8 random scores between 30 and 100
for (let i = 0; i < 8; i++) {
    let score = Math.floor(Math.random() * 71) + 30;
    scores.push(score);
}

// Analyze the scores
let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);
let totalScore = scores.reduce((sum, score) => sum + score, 0);
let averageScore = totalScore / scores.length;

// Count students who passed
let passedStudents = scores.filter(score => score >= 50);

// Use map() to display each score with its student number
let studentResults = scores.map((score, index) => ({
    Student: index + 1,
    Score: score,
    Result: score >= 50 ? "Pass" : "Fail"
}));

// Display the report
console.table(studentResults);
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Average Score: ${averageScore.toFixed(2)}`);
console.log(`Students Passed: ${passedStudents.length}`);

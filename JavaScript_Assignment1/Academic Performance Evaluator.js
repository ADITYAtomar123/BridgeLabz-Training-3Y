
let marks = [90, 85, 78, 88, 92];
let totalMarks = 0;
let hasFailed = false;

// Calculate total and check for failed subjects
for (let mark of marks) {
    totalMarks += mark;

    if (mark < 35) {
        hasFailed = true;
    }
}

let average = totalMarks / marks.length;
let percentage = (totalMarks / (marks.length * 100)) * 100;

// Decide promotion status
if (hasFailed || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else {
    console.log("Promoted");
}

console.log(`Average: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);

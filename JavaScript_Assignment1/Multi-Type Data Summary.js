
let userName = "Aditya";
let age = 20;
let isStudent = true;
let subjects = ["Java", "JavaScript", "Python"];
let student = { name: "Aditya", age: 20 };
let address = null;
let phoneNumber;

let data = [
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects.join(", "), Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "Student Object", Value: JSON.stringify(student), Type: typeof student },
    { Label: "Address", Value: address, Type: "null" },
    { Label: "Phone Number", Value: phoneNumber, Type: typeof phoneNumber }
];

// Display all data in a single table
console.table(data);

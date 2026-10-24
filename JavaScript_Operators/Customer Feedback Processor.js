
let feedback = "Great product! Fast delivery and amazing sound quality!";

// Count words
let words = feedback.trim().split(/\s+/);
let wordCount = words.length;

// Convert feedback to lowercase for checking
let lowerFeedback = feedback.toLowerCase();

// Check for negative words
if (!lowerFeedback.includes("bad") && !lowerFeedback.includes("poor")) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}

// Display feedback details
console.log(`Feedback: ${feedback}`);
console.log(`Word Count: ${wordCount}`);

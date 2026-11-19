// Q9. Fitness App Analytics (filter + reduce + map + Error Handling)

const workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
    constructor(data) {
        if (!Array.isArray(data) || data.length === 0) {
            throw new Error("Workout dataset cannot be empty.");
        }

        this.data = data;
    }

    getActiveUsers() {
        return this.data.filter(person => person.steps > 7000);
    }

    getAverageCalories() {
        const totalCalories = this.data.reduce((total, person) => {
            return total + person.calories;
        }, 0);

        return totalCalories / this.data.length;
    }

    getUserSummary() {
        return this.data.map(person => {
            return `${person.user} walked ${person.steps} steps and burned ${person.calories} calories.`;
        });
    }
}

try {
    const analytics = new FitnessAnalytics(workoutData);

    console.log("Active users:", analytics.getActiveUsers());
    console.log("Average calories:", analytics.getAverageCalories());
    console.log("User summaries:", analytics.getUserSummary());
} catch (error) {
    console.log("Analytics error:", error.message);
}

// Empty dataset example:
// try {
//     const emptyAnalytics = new FitnessAnalytics([]);
// } catch (error) {
//     console.log("Analytics error:", error.message);
// }

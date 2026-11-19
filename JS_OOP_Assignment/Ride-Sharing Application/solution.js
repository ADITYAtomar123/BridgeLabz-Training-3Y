// Q5. Ride-Sharing Application (Inheritance + Error Handling)

class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle, vehicleNumber) {
        super(name, rating);
        this.vehicle = vehicle;
        this.vehicleNumber = vehicleNumber;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance === null || this.distance === "") {
            throw new Error("Trip distance was not provided.");
        }

        if (typeof this.distance !== "number" || this.distance < 0) {
            throw new Error("Trip distance must be a non-negative number.");
        }

        const ratePerKm = 12;
        return this.distance * ratePerKm;
    }
}

const driver = new Driver("Rahul", 4.8, "Car", "UP 85 AB 1234");
console.log(`Driver: ${driver.name}, ${driver.vehicle}, ${driver.vehicleNumber}`);

try {
    const trip = new Trip("GLA University", "Mathura Junction", 10);
    console.log("Fare: Rs.", trip.calculateFare());
} catch (error) {
    console.log("Unable to calculate fare:", error.message);
}

try {
    const invalidTrip = new Trip("Mathura", "Agra", -5);
    console.log("Fare: Rs.", invalidTrip.calculateFare());
} catch (error) {
    console.log("Unable to calculate fare:", error.message);
}

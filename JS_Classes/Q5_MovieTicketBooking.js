// Q5: Movie Ticket Booking with input validation.
document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const seats = Number(document.getElementById("seats").value);
    const namePattern = /^[A-Za-z]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!namePattern.test(name)) {
        alert("Name must contain alphabets only.");
        return;
    }
    if (!emailPattern.test(email)) {
        alert("Enter a valid email address.");
        return;
    }
    if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
        alert("Seats must be a whole number from 1 to 10.");
        return;
    }

    const booking = { name, email, seats };
    document.getElementById("result").textContent =
        `Booking Successful! Name: ${booking.name}, Email: ${booking.email}, Seats: ${booking.seats}`;
});

// Q2: Validate name, email, phone, and password using RegExp.
const form = document.getElementById("studentForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");

    const checks = [
        { input: name, valid: /^[A-Za-z]+$/.test(name.value.trim()), error: "Name must contain alphabets only." },
        { input: email, valid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()), error: "Enter a valid email address." },
        { input: phone, valid: /^\d{10}$/.test(phone.value.trim()), error: "Phone must contain exactly 10 digits." },
        { input: password, valid: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/.test(password.value), error: "Password needs an uppercase letter, number, and special character." }
    ];

    const errors = [];
    checks.forEach(check => {
        check.input.style.border = check.valid ? "2px solid green" : "2px solid red";
        if (!check.valid) errors.push(check.error);
    });

    message.textContent = errors.length ? errors.join(" ") : "Registration successful!";
    message.className = errors.length ? "error" : "success";
});

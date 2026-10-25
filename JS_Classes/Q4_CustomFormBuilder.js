// Q4: Build a form dynamically and return entered values as an object.
class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    createForm() {
        let html = '<form id="myForm">';
        this.fields.forEach(field => {
            html += `<label for="${field.name}">${field.label}</label><br>`;
            html += `<input type="${field.type}" id="${field.name}" name="${field.name}" required><br><br>`;
        });
        html += '<button type="submit">Submit</button></form>';

        document.getElementById("formContainer").innerHTML = html;
        document.getElementById("myForm").addEventListener("submit", event => {
            event.preventDefault();
            document.getElementById("result").textContent =
                JSON.stringify(this.getFormData(), null, 2);
        });
    }

    getFormData() {
        const form = document.getElementById("myForm");
        const data = {};
        this.fields.forEach(field => {
            data[field.name] = form.elements[field.name].value;
        });
        return data;
    }
}

const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" }
];

new FormBuilder(fields).createForm();

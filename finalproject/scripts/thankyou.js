const params = new URLSearchParams(window.location.search);

const name = params.get("name");
const email = params.get("email");
const budget = params.get("budget");
const message = params.get("message");

document.getElementById("submissionDetails").innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Budget:</strong> ${budget}</p>
    <p><strong>Message:</strong> ${message}</p>
`;

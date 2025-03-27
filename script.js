function toggleForm() {
    document.getElementById("login-form").style.display =
        document.getElementById("login-form").style.display === "none" ? "block" : "none";
    document.getElementById("signup-form").style.display =
        document.getElementById("signup-form").style.display === "none" ? "block" : "none";
}

async function signup() {
    let name = document.getElementById("signup-name").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    let response = await fetch("/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
    });

    let result = await response.json();
    alert(result.message);
}

async function login() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    let response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    let result = await response.json();
    alert(result.message);
}

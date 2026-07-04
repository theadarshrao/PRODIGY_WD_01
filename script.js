function register() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (name === "" || email === "" || password === "") {
        alert("Please fill all fields!");
        return;
    }

    const user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful!");

    window.location.href = "login.html";
}

function login() {

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
        alert("No user found! Please register first.");
        return;
    }

    if (email === savedUser.email && password === savedUser.password) {

        localStorage.setItem("loggedIn", "true");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid Email or Password");

    }

}


if (window.location.pathname.includes("dashboard.html")) {

    const isLoggedIn = localStorage.getItem("loggedIn");

    if (isLoggedIn !== "true") {
        window.location.href = "login.html";
    } else {

        const user = JSON.parse(localStorage.getItem("user"));

        document.getElementById("username").innerHTML =
            "Welcome, " + user.name + " 👋";

    }

}


function logout() {

    localStorage.removeItem("loggedIn");

    alert("Logged Out Successfully!");

    window.location.href = "login.html";

}

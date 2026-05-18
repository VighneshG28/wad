document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = {
        name: name,
        email: email,
        password: password
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(JSON.stringify(user));

    xhr.onload = function () {
        if (xhr.status == 201) {
            alert("Registration Successful");

            window.location.href = "display.html";
        }
    };
});
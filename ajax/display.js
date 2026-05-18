let users = JSON.parse(localStorage.getItem("users")) || [];

let output = "";

users.forEach(function(user) {

    output += `
      <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
      </tr>
    `;
});

document.getElementById("data").innerHTML = output;
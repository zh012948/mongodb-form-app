const API_URL = "https://mongodb-form-app-brfv.onrender.com";

document.getElementById("userForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const response = await fetch("/api/users/add-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
    });

    const data = await response.json();
    alert(data.message || data.error);
});

document.getElementById("getUsers").addEventListener("click", async () => {
    const response = await fetch("/api/users/get-users");
    const users = await response.json();

    const userList = document.getElementById("userList");
    userList.innerHTML = "";
    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} - ${user.email}`;
        userList.appendChild(li);
    });
});

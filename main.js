function addUser() {
    var user_name = document.getElementById("user_name");
    localStorage.setItem("UserName", user_name);

    window.location = "starter.html";
}
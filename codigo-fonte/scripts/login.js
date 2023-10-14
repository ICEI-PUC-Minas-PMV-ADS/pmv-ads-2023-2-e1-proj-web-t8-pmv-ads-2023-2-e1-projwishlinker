// @ts-nocheck

function itemExists(key) {
  return localStorage.getItem(key) !== null;
}

function getItem(key) {
  const itemJSON = localStorage.getItem(key);
  return itemJSON ? JSON.parse(itemJSON) : null;
}

function insertOrUpdateUser(userObject) {
  const users = itemExists("users") ? getItem("users") : {};
  users[userObject.username] = userObject;
  localStorage.setItem("users", JSON.stringify(users));
}

function checkLogin(username, password) {
  const usersJSON = localStorage.getItem("users");
  const users = usersJSON ? JSON.parse(usersJSON) : [];
  const foundUser = users.find(user => user.user === username);

  if (foundUser && foundUser.pass === password) {
    return foundUser;
  } else {
    return null;
  }
}

$(document).ready(function () {

  const loggedInUserJSON = localStorage.getItem("loggedInUser");
  if (loggedInUserJSON) {
    window.location.href = "dashboard.html";
  }

  $("#loginButton").click(function (event) {
    event.preventDefault();

    const username = $("#user").val();
    const password = $("#password").val();
    
    const loggedInUser = checkLogin(username, password);

    if (loggedInUser) {
      localStorage.setItem("loggedInUser", JSON.stringify({
        username: loggedInUser.user,
        firstname: loggedInUser.firstname,
        lastname: loggedInUser.lastname,
      }));
      window.location.href = "dashboard.html";
    } else {
      alert("Usuário ou senha incorretos. Por favor, tente novamente.");
    }
  });
});



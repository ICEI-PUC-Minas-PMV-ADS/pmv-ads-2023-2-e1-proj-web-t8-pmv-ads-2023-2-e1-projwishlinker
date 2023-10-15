function loadInitialData() {
  if (!localStorage.getItem("users")) {
    const userPasswords = [
      { id: 1, user: "thiago", pass: "wish", firstname: "Thiago", lastname: "Pires" },
      { id: 2, user: "rodolfo", pass: "wish", firstname: "Rodolfo", lastname: "Iannazzo" },
      { id: 3, user: "jozimar", pass: "wish", firstname: "Jozimar", lastname: "Santos" },
      { id: 4, user: "gabriela", pass: "wish", firstname: "Gabriela", lastname: "Almeida" },
      { id: 5, user: "leonidas", pass: "wish", firstname: "Leonidas", lastname: "Oliveira" },
      { id: 6, user: "gustavo", pass: "wish", firstname: "Gustavo", lastname: "Maciel" },
      { id: 7, user: "marco", pass: "wish", firstname: "Marco", lastname: "Rodrigo" },
    ];

    localStorage.setItem("users", JSON.stringify(userPasswords));
  }
}

loadInitialData();

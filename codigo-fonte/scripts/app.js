// @ts-nocheck
const projName = "WishLinker";

$(document).ready(function () {
  $("#updateButton").click(function () {
    $("#textToUpdate").text("Texto atualizado com jQuery!");
  });

  const sidebarToggle = document.body.querySelector('#sidebarToggle');


    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }
});

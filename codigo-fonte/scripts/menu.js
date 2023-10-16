// @ts-nocheck

$(document).ready(function () {
    const loggedInUserJSON = localStorage.getItem("loggedInUser");
    const loggedInUser = loggedInUserJSON ? JSON.parse(loggedInUserJSON) : null;

    if (loggedInUser) {
      const initials = loggedInUser.firstname.charAt(0) + loggedInUser.lastname.charAt(0);
      $(".initials").text(initials);
      $(".fullname").text(`${loggedInUser.firstname} ${loggedInUser.lastname}`);
    }

    $("a:contains('Sair')").click(function (event) {
        event.preventDefault();
        localStorage.removeItem("loggedInUser");
        localStorage.removeItem("users");
        window.location.href = "login.html";
    });

    const sidebarToggle = document.body.querySelector('#sidebarToggle');

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

    var currentUrl = window.location.href;
    var menuLinks = $(".list-group-item");

    menuLinks.each(function() {
        var link = $(this).attr("href");
        if (currentUrl.includes(link)) {
            $(this).addClass("menu-item-active");
        }
    });
});
  
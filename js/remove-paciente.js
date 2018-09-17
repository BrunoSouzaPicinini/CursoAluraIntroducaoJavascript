var tabelaPacientes = document.querySelector("tbody");

tabelaPacientes.addEventListener("dblclick", function (event) {
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function () {
        event.target.parentNode.remove();

    },500);
})

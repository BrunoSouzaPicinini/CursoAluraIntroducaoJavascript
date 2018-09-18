var campoInput = document.querySelector("#filtrar-tabela");

campoInput.addEventListener("input", function () {

    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {

        for (let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i];
            let tdNome = paciente.querySelector(".info-nome");
            let nome = tdNome.textContent;
            let expresao = new RegExp(this.value, "i");
            if (!expresao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }

        }
    } else {
        pacientes.forEach( function (p) {
            p.classList.remove("invisivel");
        })
    }

});
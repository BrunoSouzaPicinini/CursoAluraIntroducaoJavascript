var botaoAdicionar = document.querySelector("#buscar-pacientes");


botaoAdicionar.addEventListener("click", function () {

    var xhr = new  XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {
        var spanErro = document.querySelector("#erro-ajax");
        if ( xhr.status == 200) {
            spanErro.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function (p) {
                adicionaPacienteNaTabela(p);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);

            spanErro.textContent = ("Não foi possível buscar os pacientes Erro " + xhr.status);
            spanErro.classList.remove("invisivel");
        }


    });

    xhr.send();
});
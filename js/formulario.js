var botaoAdicionar = document.querySelector("#adicionar-paciente");

function obtemPacientesDoFormulario(form) {
    return {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };
}

function montaTd(dado, nomeClasse) {
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(nomeClasse);
    return td;
}

function montaTr(paciente) {
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaLi(conteudo) {
    let li = document.createElement("li");
    li.textContent = conteudo;
    return li;
}

function exibeMensagensDeErro(erros) {

    let ulErros = document.querySelector("#mensagens-erro");
    ulErros.innerHTML = "";
    erros.forEach(function (erro) {
        ulErros.appendChild(montaLi(erro));
    });
}

function adicionaPacienteNaTabela(paciente) {
    let pacienteTr = montaTr(paciente);
    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");
    let paciente = obtemPacientesDoFormulario(form);


    let erros = validaPaciente(paciente);

    if (erros.length > 0) {
        console.log("Paciente inválido");
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);
    form.reset();
    let ulErros = document.querySelector("#mensagens-erro");
    ulErros.innerHTML = "";
});

function validaPaciente(paciente) {
    let erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }
    if (!validaPeso(paciente.peso)) {
        erros.push("Pesso inválido");
    }
    if (paciente.peso.length == 0) {
        erros.push("Peso não pode ser em branco");
    }
    if (!validaAltura(paciente.altura)) {
        erros.push("Altura inválida");
    }
    if (paciente.altura.length == 0) {
        erros.push("Altura não pode ser em branco");
    }
    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    return erros;
}
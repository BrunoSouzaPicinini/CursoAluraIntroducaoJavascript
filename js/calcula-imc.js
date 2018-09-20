console.log("vim de fora");

var titulo = document.querySelector(".cssTitulo");
titulo.textContent = "Teste de JS";

var pacientes = document.querySelectorAll(".paciente");

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    }
    return false;
}

function validaAltura(altura) {
    return (altura >= 0 && altura <= 3.00);
}


function calculaImc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}


for (let i = 0; i < pacientes.length; i++) {

    let paciente = pacientes[i];
    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;


    let tdImc = paciente.querySelector(".info-imc");

    let pesoIsValido = validaPeso(peso);
    let alturaIsValido = validaAltura(altura);

    if (!pesoIsValido) {
        console.log("Peso inválido");
        pesoIsValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");

    }

    if (!alturaIsValido) {
        console.log("Altura inválida");
        alturaIsValido = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");

    }

    if (alturaIsValido && pesoIsValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
    console.log(imc);
}













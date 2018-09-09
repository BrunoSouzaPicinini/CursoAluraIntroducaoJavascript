console.log("vim de fora");

var titulo = document.querySelector(".cssTitulo");
titulo.textContent = "Teste do boi";

var pacientes = document.querySelectorAll(".paciente");

function calculaImc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;


    var tdImc = paciente.querySelector(".info-imc");

    var pesoIsValido = true;
    var alturaIsValido = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido");
        pesoIsValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");

    }

    if (altura <= 0 || altura >= 3.00) {
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













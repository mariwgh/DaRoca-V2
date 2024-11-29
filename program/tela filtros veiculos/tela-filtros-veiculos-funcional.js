window.addEventListener("load", () => {
    setTimeout(() => {
      const loadingScreen = document.getElementById("tela-carrega");
      loadingScreen.style.display = "none";
  
      const content = document.getElementById("tela-principal");
      content.style.display = "block";
    }, 1500);
});


function BuscarVeiculos() {

    let centroRequerido = document.getElementById("centroFiltrado").value;
    let dataRequerido = document.getElementById("dataFiltrado").value;

    fetch('https://cenoura.glitch.me/veiculos')
    .then(response => {
        return response.json();
    })
    .then( (dadosVeiculo) => {
        sentenca = ""

        for (ind in dadosVeiculo) {
            if (dadosVeiculo[ind].codigoCentroDistribuicao == "1") {
                muni = "Ribeirão Preto"
            }
            else if (dadosVeiculo[ind].codigoCentroDistribuicao == "2") {
                muni = "São Paulo"
            }
            else if (dadosVeiculo[ind].codigoCentroDistribuicao == "3") {
                muni = "Campinas"
            }

            if (centroRequerido != "0") {
                if (dadosVeiculo[ind].codigoCentroDistribuicao == parseInt(centroRequerido)) {
                    if (dataRequerido != "") {
                        if (dadosVeiculo[ind].ano == parseInt(dataRequerido)) {
                            sentenca += "<tr><td>" + dadosVeiculo[ind].codigoVeiculo + "</td>"
                            sentenca += "<td>" + dadosVeiculo[ind].codigoCentroDistribuicao + " - " + muni + "</td>"
                            sentenca += "<td>" + dadosVeiculo[ind].fabricante + "</td>"
                            sentenca += "<td>" + dadosVeiculo[ind].modelo + "</td>"
                            sentenca += "<td>" + dadosVeiculo[ind].ano + "</td>"
                            sentenca += "<td>" + dadosVeiculo[ind].placa + "</td>"
                            sentenca += "<td>" + dadosVeiculo[ind].velocidadeMedia + "</td></tr>"
                        }
                    }
                    else {
                        sentenca += "<tr><td>" + dadosVeiculo[ind].codigoVeiculo + "</td>"
                        sentenca += "<td>" + dadosVeiculo[ind].codigoCentroDistribuicao + " - " + muni + "</td>"
                        sentenca += "<td>" + dadosVeiculo[ind].fabricante + "</td>"
                        sentenca += "<td>" + dadosVeiculo[ind].modelo + "</td>"
                        sentenca += "<td>" + dadosVeiculo[ind].ano + "</td>"
                        sentenca += "<td>" + dadosVeiculo[ind].placa + "</td>"
                        sentenca += "<td>" + dadosVeiculo[ind].velocidadeMedia + "</td></tr>"
                    }
                }
            }
            else {
                if (dataRequerido != "") {
                    if (dadosVeiculo[ind].ano == parseInt(dataRequerido)) {
                        sentenca += "<tr><td>" + dadosVeiculo[ind].codigoVeiculo + "</td>"
                        sentenca += "<td>" + dadosVeiculo[ind].codigoCentroDistribuicao + " - " + muni + "</td>"
                        sentenca += "<td>" + dadosVeiculo[ind].fabricante + "</td>"
                        sentenca += "<td>" + dadosVeiculo[ind].modelo + "</td>"
                        sentenca += "<td>" + dadosVeiculo[ind].ano + "</td>"
                        sentenca += "<td>" + dadosVeiculo[ind].placa + "</td>"
                        sentenca += "<td>" + dadosVeiculo[ind].velocidadeMedia + "</td></tr>"
                    }
                }
                else {
                    sentenca += "<tr><td>" + dadosVeiculo[ind].codigoVeiculo + "</td>"
                    sentenca += "<td>" + dadosVeiculo[ind].codigoCentroDistribuicao + " - " + muni + "</td>"
                    sentenca += "<td>" + dadosVeiculo[ind].fabricante + "</td>"
                    sentenca += "<td>" + dadosVeiculo[ind].modelo + "</td>"
                    sentenca += "<td>" + dadosVeiculo[ind].ano + "</td>"
                    sentenca += "<td>" + dadosVeiculo[ind].placa + "</td>"
                    sentenca += "<td>" + dadosVeiculo[ind].velocidadeMedia + "</td></tr>"
                }
            }
        }

        document.querySelector("#tabela").innerHTML = sentenca
    })
}

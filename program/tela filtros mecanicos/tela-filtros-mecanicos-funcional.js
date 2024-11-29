window.addEventListener("load", () => {
    setTimeout(() => {
      const loadingScreen = document.getElementById("tela-carrega");
      loadingScreen.style.display = "none";
  
      const content = document.getElementById("tela-principal");
      content.style.display = "block";
    }, 1500);
});


function BuscarMecanicos() {

    let centroRequerido = document.getElementById("centroFiltrado").value;

    fetch('https://cenoura.glitch.me/mecanicos')
    .then(response => {
        return response.json();
    })
    .then( (dadosMecanico) => {
            sentenca = ""

            muni = ""

            for (ind in dadosMecanico) {
                if (dadosMecanico[ind].codigoCentroDistribuicao == "1") {
                    muni = "Ribeirão Preto"
                }
                else if (dadosMecanico[ind].codigoCentroDistribuicao == "2") {
                    muni = "São Paulo"
                }
                else if (dadosMecanico[ind].codigoCentroDistribuicao == "3") {
                    muni = "Campinas"
                }

                if (centroRequerido != "0") {
                    if (dadosMecanico[ind].codigoCentroDistribuicao == parseInt(centroRequerido)) {
                        sentenca += "<tr><td>" + dadosMecanico[ind].codigoMecanico + "</td>"
                        sentenca += "<td>" + dadosMecanico[ind].codigoCentroDistribuicao + " - " + muni + "</td>"
                        sentenca += "<td>" + dadosMecanico[ind].nome + "</td>"
                        sentenca += "<td>" + dadosMecanico[ind].inicioTurno + "</td>"
                        sentenca += "<td>" + dadosMecanico[ind].fimTurno + "</td>"
                        sentenca += "<td>" + dadosMecanico[ind].inicioAlmoco + "</td>"
                        sentenca += "<td>" + dadosMecanico[ind].fimAlmoco + "</td></tr>"
                    }
                }
                else {
                    sentenca += "<tr><td>" + dadosMecanico[ind].codigoMecanico + "</td>"
                    sentenca += "<td>" + dadosMecanico[ind].codigoCentroDistribuicao + " - " + muni + "</td>"
                    sentenca += "<td>" + dadosMecanico[ind].nome + "</td>"
                    sentenca += "<td>" + dadosMecanico[ind].inicioTurno + "</td>"
                    sentenca += "<td>" + dadosMecanico[ind].fimTurno + "</td>"
                    sentenca += "<td>" + dadosMecanico[ind].inicioAlmoco + "</td>"
                    sentenca += "<td>" + dadosMecanico[ind].fimAlmoco + "</td></tr>"
            }
        }

        document.querySelector("#tabela").innerHTML = sentenca
    })
}

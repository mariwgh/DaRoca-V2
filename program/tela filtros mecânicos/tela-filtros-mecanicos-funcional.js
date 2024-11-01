function BuscarMecanicos() {

    let centroRequerido = document.getElementById("centroFiltrado").value;

    fetch('https://cenoura.glitch.me/mecanicos')
    .then(response => {
        return response.json();
    })
    .then( (dadosMecanico) => {
            sentenca = ""

            for (ind in dadosMecanico) {
                if (centroRequerido != "0") {
                    if (dadosMecanico[ind].codigoCentroDistribuicao == parseInt(centroRequerido)) {
                        sentenca += "<tr><td>" + dadosMecanico[ind].codigoMecanico + "</td>"
                        sentenca += "<td>" + dadosMecanico[ind].codigoCentroDistribuicao + "</td>"
                        sentenca += "<td>" + dadosMecanico[ind].nome + "</td>"
                        sentenca += "<td>" + dadosMecanico[ind].inicioTurno + "</td>"
                        sentenca += "<td>" + dadosMecanico[ind].fimTurno + "</td>"
                        sentenca += "<td>" + dadosMecanico[ind].inicioAlmoco + "</td>"
                        sentenca += "<td>" + dadosMecanico[ind].fimAlmoco + "</td></tr>"
                    }
                }
                else {
                    sentenca += "<tr><td>" + dadosMecanico[ind].codigoMecanico + "</td>"
                    sentenca += "<td>" + dadosMecanico[ind].codigoCentroDistribuicao + "</td>"
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

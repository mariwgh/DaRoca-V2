function buscaMecanico() {    
    fetch('https://cenoura.glitch.me/mecanicos')
    .then(response => {
        return response.json();
    })
    .then( (dadosMecanico) => {
        fetch('https://cenoura.glitch.me/ordensservico')
        .then(response => {
            return response.json();
        })
        .then( (dadosOrdem) => {
            sentenca = ""
            for (lento in dadosMecanico) {
                sentenca += '<h1 id="titulo-mecanico">Mecanico ' + dadosMecanico[lento].codigoMecanico + ' - ' + dadosMecanico[lento].nome + '</h1>'
                sentenca += '<table id="tabela-mecanico"><tr><td>Início</td>'
                sentenca += '<td>Fim</td>'
                sentenca += '<td>Ordem de Serviço</td>'
                sentenca += '<td>Veículo</td>'
                sentenca += '<td>Tipo</td></tr>'
                muni = dadosMecanico[lento].codigoCentroDistribuicao
                for (rapido in dadosOrdem) {
                    if (dadosOrdem[rapido].codigoCentroDistribuicao == muni) {
                        sentenca += '<tr><td>' + dadosMecanico[lento].inicioTurno + '</td>'
                        sentenca += '<td>' + dadosOrdem[rapido].tempoEstimado + '</td>'
                        sentenca += '<td>' + dadosOrdem[rapido].numeroOrdemServico + '</td>'
                        sentenca += '<td>' + dadosOrdem[rapido].codigoVeiculo + '</td>'
                        sentenca += '<td>' + dadosOrdem[rapido].tipoManutencao + '</td></tr>'
                    }
                }
                sentenca += '</table>'
            }
            document.querySelector("#mecanico").innerHTML = sentenca
        })
    })
}

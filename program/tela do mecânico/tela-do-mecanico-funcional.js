const feito = []
var ind = 0

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
                sentenca += '<td>Tempo Estimado</td>'
                sentenca += '<td>Ordem de Serviço</td>'
                sentenca += '<td>Veículo</td>'
                sentenca += '<td>Tipo</td></tr>'
                muni = dadosMecanico[lento].codigoCentroDistribuicao
                horas = 0.0
                for (rapido in dadosOrdem) {
                    if (dadosOrdem[rapido].codigoCentroDistribuicao == muni && horas <= 8) {
                        sentenca += '<tr><td>' + dadosMecanico[lento].inicioTurno + '</td>'
                        sentenca += '<td>' + dadosOrdem[rapido].tempoEstimado + '</td>'
                        sentenca += '<td>' + dadosOrdem[rapido].numeroOrdemServico + '</td>'
                        sentenca += '<td>' + dadosOrdem[rapido].codigoVeiculo + '</td>'
                        sentenca += '<td>' + dadosOrdem[rapido].tipoManutencao + '</td></tr>'

                        if (dadosOrdem[rapido].tempoEstimado == "01:00:00") {
                            horas += 1.0
                        }
                        else if (dadosOrdem[rapido].tempoEstimado == "01:30:00") {
                            horas += 1.5
                        }
                        else if (dadosOrdem[rapido].tempoEstimado == "02:00:00") {
                            horas += 2.0
                        }

                        feito[ind] = dadosOrdem[rapido].numeroOrdemServico
                        ind += 1
                    } 
                }
                sentenca += '</table>'
            }
            document.querySelector("#mecanico").innerHTML = sentenca
            console.log(feito)
        })
    })
}

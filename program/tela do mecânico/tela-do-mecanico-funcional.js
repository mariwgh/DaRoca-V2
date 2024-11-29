window.addEventListener("load", () => {
    setTimeout(() => {
      const loadingScreen = document.getElementById("tela-carrega");
      loadingScreen.style.display = "none";
  
      const content = document.getElementById("tela-principal");
      content.style.display = "block";
    }, 1500); 
});


const feito = []
var ind = 0

function buscaMecanico(pagina = 1) {    
    const feito = []
    var ind = 0

    let centroRequerido = document.getElementById("centroFiltrado").value;

    // quantidade de mecânicos a ser mostrada
    const quantidade = 5;
    const codigoMecanico = (pagina - 1) * quantidade + 1; 

    fetch(`https://cenoura.glitch.me/mecanicos/${codigoMecanico}/${quantidade}`)
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
                if (centroRequerido != "0") {
                    if (dadosMecanico[lento].codigoCentroDistribuicao == parseInt(centroRequerido)) {
                        sentenca += '<h1 id="titulo-mecanico">Mecânico ' + dadosMecanico[lento].codigoMecanico + ' - ' + dadosMecanico[lento].nome + '</h1>'
                        sentenca += '<table id="tabela-mecanico"><tr><th>Início</th>'
                        sentenca += '<th>Tempo Estimado</th>'
                        sentenca += '<th>Ordem de Serviço</th>'
                        sentenca += '<th>Veículo</th>'
                        sentenca += '<th>Tipo</th></tr>'

                        horas = 0.0

                        for (rapido in dadosOrdem) {
                            let concluido = feito.includes(dadosOrdem[rapido].numeroOrdemServico)

                            if (dadosOrdem[rapido].codigoCentroDistribuicao == parseInt(centroRequerido) && horas <= 9 && !concluido) {
                                if (horas + 8 < 11) {
                                    if ((horas - Math. floor(horas)) !== 0) {
                                        sentenca += '<tr><td>' + (horas + 7.5) + ':30:00</td>'
                                    }
                                    else {
                                        sentenca += '<tr><td>' + (horas + 8) + ':00:00</td>'
                                    }
                                    sentenca += '<td>' + dadosOrdem[rapido].tempoEstimado + '</td>'
                                    sentenca += '<td>' + dadosOrdem[rapido].numeroOrdemServico + '</td>'
                                    sentenca += '<td>' + dadosOrdem[rapido].codigoVeiculo + '</td>'
                                    sentenca += '<td>' + dadosOrdem[rapido].tipoManutencao + '</td></tr>'
                                }
                                else if (horas + 8 >= 14) {
                                    if ((horas - Math. floor(horas)) !== 0) {
                                        sentenca += '<tr><td>' + (horas + 7.5) + ':30:00</td>'
                                    }
                                    else {
                                        sentenca += '<tr><td>' + (horas + 8) + ':00:00</td>'
                                    }
                                    sentenca += '<td>' + dadosOrdem[rapido].tempoEstimado + '</td>'
                                    sentenca += '<td>' + dadosOrdem[rapido].numeroOrdemServico + '</td>'
                                    sentenca += '<td>' + dadosOrdem[rapido].codigoVeiculo + '</td>'
                                    sentenca += '<td>' + dadosOrdem[rapido].tipoManutencao + '</td></tr>'
                                }
                                else if (horas + 8 >= 12) {
                                    sentenca += '<tr><td>' + dadosMecanico[lento].inicioAlmoco + '</td>'
                                    sentenca += '<td> 02:00:00 </td>'
                                    sentenca += '<td> - </td>'
                                    sentenca += '<td> - </td>'
                                    sentenca += '<td> - </td></tr>'

                                    horas = 5
                                }

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
                    }
                }
                else {
                    sentenca += '<h1 id="titulo-mecanico">Mecânico ' + dadosMecanico[lento].codigoMecanico + ' - ' + dadosMecanico[lento].nome + '</h1>'
                    sentenca += '<table id="tabela-mecanico"><tr><th>Início</th>'
                    sentenca += '<th>Tempo Estimado</th>'
                    sentenca += '<th>Ordem de Serviço</th>'
                    sentenca += '<th>Veículo</th>'
                    sentenca += '<th>Tipo</th></tr>'

                    muni = dadosMecanico[lento].codigoCentroDistribuicao

                    horas = 0.0

                    for (rapido in dadosOrdem) {
                        let concluido = feito.includes(dadosOrdem[rapido].numeroOrdemServico)

                        if (dadosOrdem[rapido].codigoCentroDistribuicao == muni && horas <= 9 && !concluido) {
                            if (horas + 8 < 11) {
                                if ((horas - Math. floor(horas)) !== 0) {
                                    sentenca += '<tr><td>' + (horas + 7.5) + ':30:00</td>'
                                }
                                else {
                                    sentenca += '<tr><td>' + (horas + 8) + ':00:00</td>'
                                }
                                sentenca += '<td>' + dadosOrdem[rapido].tempoEstimado + '</td>'
                                sentenca += '<td>' + dadosOrdem[rapido].numeroOrdemServico + '</td>'
                                sentenca += '<td>' + dadosOrdem[rapido].codigoVeiculo + '</td>'
                                sentenca += '<td>' + dadosOrdem[rapido].tipoManutencao + '</td></tr>'
                            }
                            else if (horas + 8 >= 14) {
                                if ((horas - Math. floor(horas)) !== 0) {
                                    sentenca += '<tr><td>' + (horas + 7.5) + ':30:00</td>'
                                }
                                else {
                                    sentenca += '<tr><td>' + (horas + 8) + ':00:00</td>'
                                }
                                sentenca += '<td>' + dadosOrdem[rapido].tempoEstimado + '</td>'
                                sentenca += '<td>' + dadosOrdem[rapido].numeroOrdemServico + '</td>'
                                sentenca += '<td>' + dadosOrdem[rapido].codigoVeiculo + '</td>'
                                sentenca += '<td>' + dadosOrdem[rapido].tipoManutencao + '</td></tr>'
                            }
                            else if (horas + 8 >= 12) {
                                sentenca += '<tr><td>' + dadosMecanico[lento].inicioAlmoco + '</td>'
                                sentenca += '<td> 02:00:00 </td>'
                                sentenca += '<td> - </td>'
                                sentenca += '<td> - </td>'
                                sentenca += '<td> - </td></tr>'

                                horas = 5
                            }

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
                }
            sentenca += '</table>'

            
        }
        document.querySelector("#mecanico").innerHTML = sentenca

        document.querySelector("#mecanico").innerHTML += `<button id="butaoVeiculosMec" onclick="buscaMecanico(${pagina + 1})">Próxima Página</button>`;
        })
    })
}

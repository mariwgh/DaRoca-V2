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
        fetch('https://localhost:8888/horarios')
        .then(response => {
            return response.json();
        })
        .then( (dadosHorarios) => {
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

                        for (rapido in dadosHorarios) {
                            let concluido = feito.includes(dadosHorarios[rapido].idProgramacao)

                            if (horas <= 9 && !concluido && dadosHorarios[rapido].idMecanico == dadosMecanico[lento].idMecanico) {
                                sentenca += '<td>' + dadosHorarios[rapido].horario + '</td>'
                                sentenca += '<td>' + dadosHorarios[rapido].tempoEstimado + '</td>'
                                sentenca += '<td>' + dadosHorarios[rapido].idProgramacao + '</td>'
                                sentenca += '<td>' + dadosHorarios[rapido].idVeiculo + '</td>'
                                sentenca += '<td>' + dadosHorarios[rapido].descricao + '</td></tr>'
                            }
                            else if (horas + 8 >= 14) {
                                sentenca += '<td>' + dadosHorarios[rapido].horario + '</td>'
                                sentenca += '<td>' + dadosHorarios[rapido].tempoEstimado + '</td>'
                                sentenca += '<td>' + dadosHorarios[rapido].idProgramacao + '</td>'
                                sentenca += '<td>' + dadosHorarios[rapido].idVeiculo + '</td>'
                                sentenca += '<td>' + dadosHorarios[rapido].descricao + '</td></tr>'
                            }
                            else if (horas + 8 >= 12) {
                                sentenca += '<tr><td>' + dadosMecanico[lento].inicioAlmoco + '</td>'
                                sentenca += '<td> 02:00:00 </td>'
                                sentenca += '<td> - </td>'
                                sentenca += '<td> - </td>'
                                sentenca += '<td> - </td></tr>'

                                horas = 5
                            }

                            if (dadosHorarios[rapido].tempoEstimado == "01:00:00") {
                                horas += 1.0
                            }
                            else if (dadosHorarios[rapido].tempoEstimado == "01:30:00") {
                                horas += 1.5
                            }
                            else if (dadosHorarios[rapido].tempoEstimado == "02:00:00") {
                                horas += 2.0
                            }

                            feito[ind] = dadosHorarios[rapido].numeroOrdemServico
                            ind += 1
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

                    horas = 0.0

                    for (rapido in dadosHorarios) {
                        let concluido = feito.includes(dadosHorarios[rapido].idProgramacao)

                        if (horas <= 9 && !concluido && dadosHorarios[rapido].idMecanico == dadosMecanico[lento].idMecanico) {
                            sentenca += '<td>' + dadosHorarios[rapido].horario + '</td>'
                            sentenca += '<td>' + dadosHorarios[rapido].tempoEstimado + '</td>'
                            sentenca += '<td>' + dadosHorarios[rapido].idProgramacao + '</td>'
                            sentenca += '<td>' + dadosHorarios[rapido].idVeiculo + '</td>'
                            sentenca += '<td>' + dadosHorarios[rapido].descricao + '</td></tr>'
                        }
                        else if (horas + 8 >= 14) {
                            sentenca += '<td>' + dadosHorarios[rapido].horario + '</td>'
                            sentenca += '<td>' + dadosHorarios[rapido].tempoEstimado + '</td>'
                            sentenca += '<td>' + dadosHorarios[rapido].idProgramacao + '</td>'
                            sentenca += '<td>' + dadosHorarios[rapido].idVeiculo + '</td>'
                            sentenca += '<td>' + dadosHorarios[rapido].descricao + '</td></tr>'
                        }
                        else if (horas + 8 >= 12) {
                            sentenca += '<tr><td>' + dadosMecanico[lento].inicioAlmoco + '</td>'
                            sentenca += '<td> 02:00:00 </td>'
                            sentenca += '<td> - </td>'
                            sentenca += '<td> - </td>'
                            sentenca += '<td> - </td></tr>'

                            horas = 5
                        }

                        if (dadosHorarios[rapido].tempoEstimado == "01:00:00") {
                            horas += 1.0
                        }
                        else if (dadosHorarios[rapido].tempoEstimado == "01:30:00") {
                            horas += 1.5
                        }
                        else if (dadosHorarios[rapido].tempoEstimado == "02:00:00") {
                            horas += 2.0
                        }

                    feito[ind] = dadosHorarios[rapido].numeroOrdemServico
                    ind += 1
                }
            }
            sentenca += '</table>' 
        }
        document.querySelector("#mecanico").innerHTML = sentenca

        document.querySelector("#mecanico").innerHTML += `<button id="butaoVeiculosMec" onclick="buscaMecanico(${pagina + 1})">Próxima Página</button>`;
        })
    })
}

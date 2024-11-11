function MostrarOrdens() {
    let espaco = document.getElementById("tabela");
    espaco.innerHTML = ""; 

    // buscar ordens de serviço
    fetch("https://cenoura.glitch.me/ordensservico")
        .then(response => response.json())
        .then(ordens => { 
            ordens.forEach(ordem => {
                if (ordem.codigoCentroDistribuicao == "1") {
                    muni = "Ribeirão Preto"
                }
                else if (ordem.codigoCentroDistribuicao == "2") {
                    muni = "São Paulo"
                }
                else if (ordem.codigoCentroDistribuicao == "3") {
                    muni = "Campinas"
                }

                espaco.innerHTML += "<tr>" + 
                                        "<td>" + ordem.criadaEm + "</td>" +
                                        "<td>" + ordem.codigoCentroDistribuicao + " - " + muni + "</td>" +
                                        "<td id='nomeMecAllign'>Exemplo</td>" +
                                    "</tr>";
                });
        })
}

function FiltroCentro() {
    
    let centroRequerido = document.getElementById("centroFiltrado").value;
    let dataRequerido = document.getElementById("dataFiltrado").value;
  
    let espaco = document.getElementById("tabela");
    espaco.innerHTML = ""; 

    // buscar veículos
    fetch("https://cenoura.glitch.me/veiculos")
        .then(response => response.json())
        .then(veiculos => {
            // buscar ordens de serviço
            fetch("https://cenoura.glitch.me/ordensservico")
                .then(response => response.json())
                .then(ordens => {
                    let ordensFiltradas = ordens;

                    // filtrar as ordens de acordo com o centro e data, se ambos forem fornecidos
                    if (centroRequerido != 0 && dataRequerido) {
                        ordensFiltradas = ordensFiltradas.filter(ordem => {
                            let veiculoCorrespondente = veiculos.find(veiculo => veiculo.codigoVeiculo == ordem.codigoVeiculo);
                            let dataOrdem = ordem.criadaEm.split('T')[0];
                            // filtra as ordens se o centro e a data corresponderem
                            return veiculoCorrespondente && 
                                   veiculoCorrespondente.codigoCentroDistribuicao == centroRequerido && 
                                   dataOrdem === dataRequerido;
                        });
                    } else if (dataRequerido) {
                        // caso só a data seja fornecida
                        ordensFiltradas = ordensFiltradas.filter(ordem => {
                            let dataOrdem = ordem.criadaEm.split('T')[0];
                            return dataOrdem === dataRequerido;
                        });
                    } else if (centroRequerido != 0) {
                        // caso só o centro seja fornecido
                        ordensFiltradas = ordensFiltradas.filter(ordem => {
                            let veiculoCorrespondente = veiculos.find(veiculo => veiculo.codigoVeiculo == ordem.codigoVeiculo);
                            return veiculoCorrespondente && veiculoCorrespondente.codigoCentroDistribuicao == centroRequerido;
                        });
                    } 

                    // exibir as ordens na tabela
                    if (ordensFiltradas.length > 0) {
                        ordensFiltradas.forEach(ordem => {
                            if (ordem.codigoCentroDistribuicao == "1") {
                                muni = "Ribeirão Preto"
                            }
                            else if (ordem.codigoCentroDistribuicao == "2") {
                                muni = "São Paulo"
                            }
                            else if (ordem.codigoCentroDistribuicao == "3") {
                                muni = "Campinas"
                            }

                            espaco.innerHTML += "<tr>" + 
                                                    "<td>" + ordem.criadaEm + "</td>" +
                                                    "<td>" + ordem.codigoCentroDistribuicao + " - " + muni + "</td>" +
                                                    "<td id='nomeMecAllign'>Exemplo</td>" +
                                                "</tr>";
                        });
                    } else {
                        espaco.innerHTML += "<tr>" + 
                                                "<td colspan='3'>Nenhuma ordem encontrada</td>" + 
                                            "</tr>";
                    }
                })
                .catch(error => {
                    console.error('Erro ao buscar ordens de serviço:', error);
                });
        })
        .catch(error => {
            console.error('Erro ao buscar veículos:', error);
        });
}
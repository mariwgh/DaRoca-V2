function FiltroCentro() {
    
    let centroRequerido = document.getElementById("centroFiltrado").value;
    let dataRequerido = document.getElementById("dataFiltrado").value;
    let espaco = document.getElementById("tabela");
    espaco.innerHTML = ""; 

    //  buscar veículos
    fetch("https://cenoura.glitch.me/veiculos")
        .then(response => response.json())
        .then(veiculos => {
            // buscar ordens de serviço
            fetch("https://cenoura.glitch.me/ordensservico")
                .then(response => response.json())
                .then(ordens => {
                    let ordensFiltradas = [];

                    // filtrar as ordens de acordo com o centro e veículo, se estiver selecionado
                    if (centroRequerido) {
                        veiculos.forEach(veiculo => {
                            if (veiculo.codigoCentroDistribuicao == centroRequerido) {
                                // ordens associadas a esse veículo
                                let ordensDoVeiculo = ordens.filter(ordem => ordem.codigoVeiculo == veiculo.codigoVeiculo);
                                ordensFiltradas.push(ordensDoVeiculo);
                            }
                        });
                    } else {
                        // se nenhum centro foi especificado, mostrar todas as ordens de todos os veículos
                        ordensFiltradas = ordens;
                    }

                    // exibir as ordens na tabela
                    if (ordensFiltradas.length > 0) {
                        console.log(ordensFiltradas)

                        ordensFiltradas.forEach(ordem => {
                            let veiculoCorrespondente = veiculos.find(veiculo => veiculo.codigoVeiculo == ordem.codigoVeiculo);
                            let centroDistribuicao = veiculoCorrespondente ? veiculoCorrespondente.codigoCentroDistribuicao : "Centro não encontrado";

                            espaco.innerHTML += "<tr>" + 
                                                    "<td>" + (dataRequerido || ordem.criadaEm) + "</td>" +
                                                    "<td>" + centroDistribuicao + "</td>" +
                                                    "<td>Exemplo</td>" +
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
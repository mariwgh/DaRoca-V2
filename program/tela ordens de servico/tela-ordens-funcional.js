function BuscarOrdens() {

    let dataFiltrada = document.getElementById("dataFiltrado").value;
    let duracaoFiltrado = document.getElementById("duracaoFiltrado").value;

    let espaco = document.getElementById("tabela");
    espaco.innerHTML = "";

    fetch("https://cenoura.glitch.me/ordensservico")
        .then(response => response.json())    
        .then(data => {

            let ordensFiltradas = data

            if (dataFiltrada && duracaoFiltrado) {
                //pega as ordens em que a data e a duracao requeridos correspondem as da api
                ordensFiltradas = data.filter(ordem => {
                    const ordemData = ordem.criadaEm.split('T')[0];
                    const ordemDuracao = parseFloat(ordem.tempoEstimado); 
                    
                    return (ordemData === dataFiltrada)
                            && (ordemDuracao <= parseFloat(duracaoFiltrado));
                });
            } else if (dataFiltrada) {
                //pega as ordens em que a data requerida corresponde as da api
                ordensFiltradas = data.filter(ordem => {
                    const ordemData = ordem.criadaEm.split('T')[0];
                    return (ordemData === dataFiltrada);
                });
            } else if (duracaoFiltrado) {
                //pega as ordens em que a duracao requerida corresponde as da api
                ordensFiltradas = data.filter(ordem => {
                    const ordemDuracao = parseFloat(ordem.tempoEstimado);
                    return (ordemDuracao <= parseFloat(duracaoFiltrado));
                });
            }

            if (ordensFiltradas.length > 0) {
                ordensFiltradas.forEach(ordem => {
                    // data é um array de objetos

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
                                            "<td>" + ordem.numeroOrdemServico + "</td>" +
                                            "<td>" + ordem.criadaEm + "</td>" +
                                            "<td>" + ordem.codigoCentroDistribuicao + " - " + muni + "</td>" +
                                            "<td>" + ordem.tempoEstimado + "</td>" +
                                            "<td><input type='checkbox' id='selecionados'></td>" +
                                        "</tr>";
                })
            } else {
                espaco.innerHTML += "<tr>" + 
                                    "<td colspan='5'>Nenhuma ordem encontrada</td>"
            }
        })

        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
        });
}

function BuscarOrdens() {
    
    let espaco = document.getElementById("tabela");

    fetch("https://cenoura.glitch.me/ordensservico")
        .then(response => {
            return response.json();
        })   
        .then(data => {
            data.forEach(ordem => {
                // data é um array de objetos

                espaco.innerHTML += "<tr>" + 
                                        "<td>" + ordem.numeroOrdemServico + "</td>" +
                                        "<td>" + ordem.criadaEm + "</td>" +
                                        "<td>" + ordem.codigoCentroDistribuicao + "</td>" +
                                        "<td>" + ordem.tempoEstimado + "</td>" +
                                        "<td><input type='checkbox' id='selecionados'></td>"
                                    "</tr>";
            })
        })

        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
        });
}

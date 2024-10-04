function FiltroCentro() {
    
    let centroRequerido = document.getElementById("centroFiltrado").value;
    let espaco = document.getElementById("tabela");

    fetch("https://run.mocky.io/v3/cdf40161-3fda-476e-9641-9be412fba4dc")
        .then(response => response.json())    
        .then(data => {
            let centros = data.codigoCentroDistribuicao;
            let centroEncontrado = centros.find(centro => centro.codigoCentroDistribuicao == centroRequerido);

            if (centroEncontrado) {
                espaco.innerHTML = "<tr>" + 
                                        "<td>Exemplo</td>" +
                                        "<td>" + centroEncontrado.cidade + "</td>" +
                                        "<td>Exemplo</td>" +
                                    "</tr>";
            } 
            else {
                espaco.innerHTML = "<tr>" + 
                                        "<td colspan='3'>Centro não encontrado</td>" + 
                                    "</tr>";
            }
        })

        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
        });
}
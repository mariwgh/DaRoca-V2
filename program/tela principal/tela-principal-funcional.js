function FiltroCentro() {
    
    let centroRequerido = document.getElementById("centroFiltrado").value;
    let espaco = document.getElementById("tabela");
    espaco.innerHTML = ""; 

    fetch("https://cenoura.glitch.me/centrosdistribuicao")
        .then(response => {
            return response.json();
        })   
        .then(data => {
            // data é um array de objetos
            let centroEncontrado = data.find(centro => centro.codigoCentroDistribuicao == centroRequerido);

            if (centroEncontrado) {
                espaco.innerHTML += "<tr>" + 
                                        "<td>Exemplo</td>" +
                                        "<td>" + centroEncontrado.cidade + "</td>" +
                                        "<td>Exemplo</td>" +
                                    "</tr>";
            } 
            else {
                espaco.innerHTML += "<tr>" + 
                                        "<td colspan='3'>Centro não encontrado</td>" + 
                                    "</tr>";
            }
        })

        .catch(error => {
            console.error('Erro ao buscar os dSados:', error);
        });
}

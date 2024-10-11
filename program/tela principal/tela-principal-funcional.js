function FiltroCentro() {
    
    let centroRequerido = document.getElementById("centroFiltrado").value;
    let dataRequerido = document.getElementById("dataFiltrado").value;
    let espaco = document.getElementById("tabela");
    espaco.innerHTML = ""; 

    fetch("https://cenoura.glitch.me/centrosdistribuicao")
        .then(response => {
            return response.json();
        })   
        .then(data => {
            console.log(centroRequerido)
            if (centroRequerido) {
                data.forEach(centro => {
                    // data é um array de objetos
                    let centroEncontrado = data.find(centro => centro.codigoCentroDistribuicao == centroRequerido);

                    if (centroEncontrado != "") {
                        espaco.innerHTML += "<tr>" + 
                                                "<td>" + dataRequerido + "</td>" +
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
            }

            else {
                // o usuário não escolheu nenhum centro, mostrar todos os centros
                data.forEach(centro => {
                    espaco.innerHTML += "<tr>" +
                                            "<td>" + dataRequerido + "</td>" +
                                            "<td>" + centro.cidade + "</td>" +
                                            "<td>Exemplo</td>" +
                                        "</tr>";
                });
            }
        })

        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
        });
}

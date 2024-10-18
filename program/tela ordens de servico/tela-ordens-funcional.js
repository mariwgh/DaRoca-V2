function BuscarOrdens() {
    let centroRequerido = document.getElementById("centroFiltrado").value;
    let dataRequerido = document.getElementById("dataFiltrado").value;
    let espaco = document.getElementById("tabela");
    espaco.innerHTML = ""; 

    fetch("https://cenoura.glitch.me/ordensservico")
        .then(response => response.json())   
        .then(data => {
            // data é um array de objetos
            let ordensFiltradas = data;

            // filtrar as ordens de acordo com o centro e data, se estiver selecionado
            if (centroRequerido && dataRequerido) {
                //filtrar por ambos centro e data
                ordensFiltradas = ordensFiltradas.filter(ordem => 
                    ordem.codigoCentroDistribuicao == centroRequerido &&
                    ordem.criadaEm.split('T')[0] === dataRequerido
                );
            } else if (centroRequerido) {
                //filtrar apenas pelo centro
                ordensFiltradas = ordensFiltradas.filter(ordem => ordem.codigoCentroDistribuicao == centroRequerido);
            } else if (dataRequerido) {
                //filtrar apenas pela data
                ordensFiltradas = ordensFiltradas.filter(ordem => ordem.criadaEm.split('T')[0] === dataRequerido);
            }

            
            // exibir as ordens na tabela
            if (ordensFiltradas.length > 0) {
                ordensFiltradas.forEach((ordem, index) => {
                    espaco.innerHTML += "<tr>" + 
                                            "<td>" + ordem.numeroOrdemServico + "</td>" +
                                            "<td>" + ordem.criadaEm + "</td>" +
                                            "<td>" + ordem.codigoCentroDistribuicao + "</td>" +
                                            "<td>" + ordem.tempoEstimado + "</td>" +
                                            "<td><input type='checkbox' id='selecionados-" + index + "'></td>" +
                                        "</tr>";
                })
            } else {
                espaco.innerHTML += "<tr>" + 
                                        "<td colspan='5'>Nenhuma ordem encontrada</td>" + 
                                    "</tr>";
            }
        })
        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
        });
}
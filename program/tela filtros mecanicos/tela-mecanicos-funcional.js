function BuscarMecanicos() {
    
    let espaco = document.getElementById("tabela");

    fetch("https://cenoura.glitch.me/mecanicos")
        .then(response => {
            return response.json();
        })   
        .then(data => {
            data.forEach(veiculo => {
                // data é um array de objetos

                espaco.innerHTML += "<tr>" + 
                                        "<td>" + veiculo.codigoMecanico + "</td>" +
                                        "<td>" + veiculo.codigoCentroDistribuicao + "</td>" +
                                        "<td>" + veiculo.nome + "</td>" +
                                        "<td>" + veiculo.inicioTurno + "</td>" +
                                        "<td>" + veiculo.fimTurno + "</td>" +
                                        "<td>" + veiculo.inicioAlmoco + "</td>" +
                                        "<td>" + veiculo.fimAlmoco + "</td>" +
                                    "</tr>";
                
            })
        })

        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
        });
}

function BuscarVeiculos() {
    
    let espaco = document.getElementById("tabela");

    fetch("https://cenoura.glitch.me/veiculos")
        .then(response => {
            return response.json();
        })   
        .then(data => {
            data.forEach(veiculo => {
                // data é um array de objetos

                espaco.innerHTML += "<tr>" + 
                                        "<td>" + veiculo.codigoVeiculo + "</td>" +
                                        "<td>" + veiculo.codigoCentroDistribuicao + "</td>" +
                                        "<td>" + veiculo.fabricante + "</td>" +
                                        "<td>" + veiculo.modelo + "</td>" +
                                        "<td>" + veiculo.ano + "</td>" +
                                        "<td>" + veiculo.placa + "</td>" +
                                        "<td>" + veiculo.velocidadeMedia + "</td>" +
                                    "</tr>";
                
            })
        })

        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
        });
}

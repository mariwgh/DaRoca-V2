function buscaVeiculo() {    
    fetch('https://cenoura.glitch.me/veiculos')
    .then(response => {
        return response.json();
    })
    .then( (dados) => {
        sentenca = ""
        for (indice in dados) {
            if (dados[indice].placa == 'D00B2DB') {
                sentenca += '<p><b>Fabricante: </b></p>' 
                sentenca += '<p>' + dados[indice].fabricante + '</p>'
                sentenca += '<p><b>Modelo: </b></p>' 
                sentenca += '<p>' + dados[indice].modelo + '</p>'
                sentenca += '<p><b>Velocidade Média: </b></p>' 
                sentenca += '<p>' + dados[indice].velocidadeMedia + '</p>'
                sentenca += '<p><b>Ano: </b></p>' 
                sentenca += '<p>' + dados[indice].ano + '</p>'
            }
        }
        document.querySelector("#veiculo").innerHTML = sentenca
    })
}

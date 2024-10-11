function buscaMecanico() {    
    fetch('https://cenoura.glitch.me/mecanicos')
    .then(response => {
        return response.json();
    })
    .then( (dados) => {
        sentenca = ""
        for (indice in dados) {
            if (dados[indice].nome == 'Murilo Correia Sousa') {
                sentenca += '<p><b>' + dados[indice].inicioTurno + ' - ' + dados[indice].inicioAlmoco + '</b></p>'
                sentenca += '<p>Preparação</p>' 
                sentenca += '<p><b>' + dados[indice].inicioAlmoco + ' - ' + dados[indice].fimAlmoco + '</b></p>'
                sentenca += '<p>Almoço</p>'
                sentenca += '<p><b>' + dados[indice].fimAlmoco + ' - ' + dados[indice].fimTurno + '</b></p>'
                sentenca += '<p>Trabalho</p>'
            }
        }
        document.querySelector("#mecanico").innerHTML = sentenca
    })
}

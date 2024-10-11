function buscaMecanico() {    
    fetch('https://cenoura.glitch.me/mecanicos')
    .then(response => {
        return response.json();
    })
    .then( (dados) => {
        sentenca = ""
        for (indice in dados) {
            sentenca += '<h1 id="titulo-mecanico">Mecanico ' + dados[indice].codigoMecanico + '</h1>'
            sentenca += '<table id="tabela-mecanico"><tr><td>Início</td>'
            sentenca += '<td>Fim</td>'
            sentenca += '<td>Ordem de Serviço</td>'
            sentenca += '<td>Veículo</td>'
            sentenca += '<td>Tipo</td></tr>'
            sentenca += '<tr><td>' + dados[indice].inicioTurno + '</td>'
            sentenca += '<td>' + dados[indice].fimTurno + '</td>'
            sentenca += '<td></td>'
            sentenca += '<td></td>'
            sentenca += '<td></td></tr></table>'
        }
        document.querySelector("#mecanico").innerHTML = sentenca
    })
}

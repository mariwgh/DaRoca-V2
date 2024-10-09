let sentenca = "";

function buscaMecanico(id) {    
    fetch('https://run.mocky.io/v3/cdf40161-3fda-476e-9641-9be412fba4dc')
    .then(response => {
        return response.json();
    })
    .then( (dados) => {
        if (dados.codigoMecanino == id) {
            sentenca += '<p>' + dados.inicioTurno + dados.inicioAlmoco + '</p>'
            sentenca += '<p>Preparação</p>' 
            sentenca += '<p>' + dados.inicioAlmoco + dados.fimAlmoco + '</p>'
            sentenca += '<p>Almoço</p>'
            sentenca += '<p>' + dados.fimAlmoço + dados.fimTurno + '</p>'
            sentenca += '<p>Trabalho</p>'
        }
    })
    .catch(error => {
        console.error('Erro ao buscar os dados:', error);
    });
}

function Escrever() {
    document.querySelector("#mecanico").innerHTML = sentenca
}

function pegaId() {
    var numero = document.getElementById("idMecanico").value
    return numero 
}

function buscaMecanico() {    
    fetch('')
    .then(resposta => {
        return resposta.json();
    })
    .then( (dados) => {
        if (dados.codigoMecanino == pegaId()) {
            sentenca += "<h1>" + dados.nome + "</h1>"
            sentenca += "<p>" + dados.inicioTurno + dados.inicioAlmoco + "</p>"
        }
        document.querySelector("#mecanico").innerHTML = sentenca
    })
}

function BuscarMecanicos() {
    
    let espaco = document.getElementById("tabela");

    fetch("https://cenoura.glitch.me/mecanicos")
        .then(response => {
            return response.json();
        })   
        .then(data => {
            data.forEach(mecanico => {
                // data é um array de objetos

                espaco.innerHTML += "<tr>" + 
                                        "<td>" + mecanico.codigoMecanico + "</td>" +
                                        "<td>" + mecanico.codigoCentroDistribuicao + "</td>" +
                                        "<td id='nomeMecAllign'>" + mecanico.nome + "</td>" +
                                        "<td>" + mecanico.inicioTurno + "</td>" +
                                        "<td>" + mecanico.fimTurno + "</td>" +
                                        "<td>" + mecanico.inicioAlmoco + "</td>" +
                                        "<td>" + mecanico.fimAlmoco + "</td>" +
                                    "</tr>";
                
            })
        })

        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
        });
}

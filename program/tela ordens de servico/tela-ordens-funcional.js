window.addEventListener("load", () => {
    setTimeout(() => {
      const loadingScreen = document.getElementById("tela-carrega");
      loadingScreen.style.display = "none";
  
      const content = document.getElementById("tela-principal");
      content.style.display = "block";
    }, 1500);
});


let espaco = document.getElementById("tabela");

let paginaAtual = 1;
let totalDePaginas = 1;
let ordensFiltradas = [];
const ordensPorPagina = 5;

function BuscarOrdens() {
    let dataFiltrada = document.getElementById("dataFiltrado").value;
    let duracaoFiltrado = document.getElementById("duracaoFiltrado").value;

    espaco.innerHTML = "";

    fetch("https://cenoura.glitch.me/ordensservico")
        .then(response => response.json())    
        .then(data => {

            ordensFiltradas = data

            if (dataFiltrada && duracaoFiltrado) {
                //pega as ordens em que a data e a duracao requeridos correspondem as da api
                ordensFiltradas = data.filter(ordem => {
                    const ordemData = ordem.criadaEm.split('T')[0];
                    const ordemDuracao = parseFloat(ordem.tempoEstimado); 
                    
                    
                    return (ordemData === dataFiltrada)
                            && (ordemDuracao <= parseFloat(duracaoFiltrado));
                });
            } else if (dataFiltrada) {
                //pega as ordens em que a data requerida corresponde as da api
                ordensFiltradas = data.filter(ordem => {
                    const ordemData = ordem.criadaEm.split('T')[0];
                    return (ordemData === dataFiltrada);
                });
            } else if (duracaoFiltrado) {
                //pega as ordens em que a duracao requerida corresponde as da api
                ordensFiltradas = data.filter(ordem => {
                    const ordemDuracao = parseFloat(ordem.tempoEstimado);
                    return (ordemDuracao <= parseFloat(duracaoFiltrado));
                });
            }

            totalDePaginas = Math.ceil(ordensFiltradas.length / ordensPorPagina);
            mostrarOrdens();
            atualizarControlePaginas();
        })

        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
        });
}


function mostrarOrdens() {
    const inicio = (paginaAtual - 1) * ordensPorPagina;
    const fim = inicio + ordensPorPagina;
    const ordensParaMostrar = ordensFiltradas.slice(inicio, fim);

    espaco.innerHTML = ""

    if (ordensParaMostrar.length > 0) {
        ordensParaMostrar.forEach(ordem => {

            if (ordem.codigoCentroDistribuicao == "1") {
                muni = "Ribeirão Preto"
            }
            else if (ordem.codigoCentroDistribuicao == "2") {
                muni = "São Paulo"
            }
            else if (ordem.codigoCentroDistribuicao == "3") {
                muni = "Campinas"
            }

            espaco.innerHTML += "<tr>" + 
                        "<td>" + ordem.numeroOrdemServico + "</td>" +
                        "<td>" + ordem.criadaEm + "</td>" +
                        "<td>" + ordem.codigoCentroDistribuicao + " - " + muni + "</td>" +
                        "<td>" + ordem.tempoEstimado + "</td>" +
                        "<td><input type='checkbox' id='selecionados'></td>" +
                    "</tr>";
        });
    } else {
        espaco.innerHTML += "<tr>" + 
                            "<td colspan='5'>Nenhuma ordem encontrada</td>"
    }    
}


function navegarPagina(direcao) {
    paginaAtual += direcao;
    mostrarOrdens();
    atualizarControlePaginas();
}


function atualizarControlePaginas() {
    document.getElementById("paginaAtual").innerHTML = `Página ${paginaAtual} de ${totalDePaginas}`;
    document.getElementById("butonAnterior").disabled = 
                                                        paginaAtual === 1;
    document.getElementById("butonProxima").disabled = 
                                                    paginaAtual === totalDePaginas;
}

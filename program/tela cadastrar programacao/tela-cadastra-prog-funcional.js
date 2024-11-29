window.addEventListener("load", () => {
    setTimeout(() => {
      const loadingScreen = document.getElementById("tela-carrega");
      loadingScreen.style.display = "none";
  
      const content = document.getElementById("tela-principal");
      content.style.display = "block";
    }, 1500); 
});


const { login } = require("../tela de login/tela-de-login-funcional.js");

function cadastrarProg(event) {
    event.preventDefault();

    let dataRequerido = document.getElementById("input-data").value;
    let centroRequerida = document.getElementById("input-centro").value;

    let espaco = document.getElementById("message");

    const dados = require("./tela-de-login-funcional.js")

    let dados = {
        datas: dataRequerido,
        centro: centroRequerida,
        usuario: dados[login]
    }

    fetch("https://", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(data => {
        if (data.ok) {
            location.replace("../tela ordens de servico/tela-ordens.html")
            return true
        } 
        else {
            espaco.innerHTML = "Erro ao fazer o cadastro. Tente novamente.";
            return false
        }
    })
}
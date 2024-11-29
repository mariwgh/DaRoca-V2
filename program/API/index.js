require("dotenv").config();
const port = process.env.PORT;
const sqlConnection = process.env.CONNECTION_STRING;

const mssql = require("mssql");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

async function conectaBD() {
    try {
        await mssql.connect(sqlConnection);
        console.log("Conexão com o BD realizada com sucesso.");
    }
    catch (error) {
        console.log("Erro na conexão com o BD.", error);
    }
} 

conectaBD()

async function execQuery(querySQL) {
    const { recordset } = await mssql.query(querySQL);
    console.log("recordset", recordset);
    return recordset;
}

app.get("/horarios", async (req, res) => {
    try {
        let result = await execQuery(`SELECT * FROM da_roca.Horarios`);
        res.json(result);
    } catch (erro) {
        console.error('Erro ao buscar os dados do banco:', erro);
    }
});

// executa uma consulta SQL no banco de dados, é usada nas rotas
async function execQuery(querySQL) {
    // instância é responsável por configurar e enviar uma consulta ao bd
    const request = new mssql.Request()
    // executa a consulta, recordset é a resposta
    const {recordset} = await request.query(querySQL)
    // as chaves extrai o valor recordset
    return recordset
}


async function carregarDadosAPI(urlAPI, identificadorTela) {
    // verificar se os dados já estão no banco de dados para essa tela específica
    const dadosNoBanco = await buscarDadosBancoDeDados(identificadorTela);

    if (dadosNoBanco.length > 0) {
        // se já há dados no banco, carregá-los ao inves de chamar a api
        return dadosNoBanco;
    } else {
        // se não há dados, fazer a requisição à API
        fetch(urlAPI)
            .then(response => response.json())
            .then(dadosApi => {
                // salvar os dados no banco de dados com o identificador da tela
                salvarDadosNoBancoDeDados(identificadorTela, dadosApi);
                return dadosApi;
            })
            .catch(error => 
                console.error('Erro ao carregar dados da API:', error)
            );
    }
}


// implementação da busca de dados pré-existentes no banco de dados
async function buscarDadosBancoDeDados(identificadorTela) {
    try {
        const query = `SELECT * FROM da_roca.${identificadorTela}`;
        const resultado = await execQuery(query);

        // verifica se encontrou dados e retorna
        if (recordset.length > 0) {
            return JSON.parse(recordset[0].dados_json);
        } else {
            return [];  // ira cair em dadosNoBanco.length > 0
        }
    } catch (error) {
        console.error("Erro ao buscar dados do banco:", error);
        return [];
    }
}

// implementação da função para salvar dados no banco de dados
async function salvarDadosNoBancoDeDados(identificadorTela, dadosApi) {
    
    if (identificadorTela == 'mecanicos') {
        try {
            for (let i = 0; i < dadosApi.length; i++) {
                const query = `INSERT INTO da_roca.${identificadorTela} (codigoMecanico, codigoCentroDistribuicao, nome, inicioTurno, fimTurno, inicioAlmoco, fimAlmoco)
                    VALUES (${dadosApi[i].codigoMecanico}, ${dadosApi[i].codigoCentroDistribuicao}, ${dadosApi[i].nome}, ${dadosApi[i].inicioTurno}, ${dadosApi[i].fimTurno}, ${dadosApi[i].inicioAlmoco}, ${dadosApi[i].fimAlmoco})`;
            
                const resultado = await execQuery(query);
            }
        } 
        catch (error) {
            console.error("Erro ao buscar dados do banco:", error);
        }
    }

    if (identificadorTela == 'veiculos') {
        try {
            for (let i = 0; i < dadosApi.length; i++) {
                const query = `INSERT INTO da_roca.${identificadorTela} (codigoVeiculo, codigoCentroDistribuicao, fabricante, modelo, ano, placa, velocidadeMedia)
                    VALUES (${dadosApi[i].codigoVeiculo}, ${dadosApi[i].codigoCentroDistribuicao}, ${dadosApi[i].fabricante}, ${dadosApi[i].modelo}, ${dadosApi[i].ano}, ${dadosApi[i].placa}, ${dadosApi[i].velocidadeMedia})`;
            
                const resultado = await execQuery(query);
            }
        } 
        catch (error) {
            console.error("Erro ao buscar dados do banco:", error);
        }
    }

    if (identificadorTela == 'ordensservico') {
        try {
            for (let i = 0; i < dadosApi.length; i++) {
                const query = `INSERT INTO da_roca.${identificadorTela} (numeroOrdemServico, codigoCentroDistribuicao, codigoVeiculo, tipoManutencao, criadaEm, tempoEstimado, status)
                    VALUES (${dadosApi[i].numeroOrdemServico}, ${dadosApi[i].codigoCentroDistribuicao}, ${dadosApi[i].codigoVeiculo}, ${dadosApi[i].tipoManutencao}, ${dadosApi[i].criadaEm}, ${dadosApi[i].tempoEstimado}, ${dadosApi[i].status})`;
            
                const resultado = await execQuery(query);
            }
        } 
        catch (error) {
            console.error("Erro ao buscar dados do banco:", error);
        }
    }
}

async function inserirProgramacao(data, centro, usuario) {
    try {
        const query = 
        `INSERT INTO da_roca.programacoes
        (datas, centro, usuario)
        VALUES 
        (${data}, ${centro}, ${usuario}`;
    
        const resultado = await execQuery(query);
    } 
    catch (error) {
        console.error("Erro ao inserir dados no banco:", error);
    }
}

async function retornarProgramacoes() {
    try {
        const query = `SELECT * FROM da_roca.programacoes`;
        const resultado = await execQuery(query);

        // verifica se encontrou dados e retorna
        if (recordset.length > 0) {
            return JSON.parse(recordset[0].dados_json);
        } else {
            return [];  // ira cair em dadosNoBanco.length > 0
        }
    } catch (error) {
        console.error("Erro ao buscar dados do banco:", error);
        return [];
    }
}


module.exports = {
    conectaBD,
    execQuery,
    buscarDadosBancoDeDados,
    salvarDadosNoBancoDeDados,
    carregarDadosAPI
};

app.use("/", (req, res) => {
    res.json({ messagem: "Servidor em execução." })
})

// inicia o servidor
app.listen(port, () => { console.log("API funcionando na porta: ", port) })

//no outro arquivo, para usar essas funcoes, colocar:

//const { carregarDadosAPI } = require('./checkcache.js');
//carregarDadosAPI('url-da-api', 'identificador-tela');

//cache:
//ao chamar a funcao sera retornado uma lista de dados, que devera ser impressa na tela

//programacoes:
//a tela de cad prog so usara a conexao com o bd, e tera sua funcao de inserir no bd, 
//a tela principal/de prog retornar oq tem na tabela, mas n insere
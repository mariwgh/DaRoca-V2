const mssql = require("mssql");

const stringSQL = {
    server: 'regulus.cotuca.unicamp.br',
    database: 'BD24140',
    user: 'BD24140',
    password: 'BD24140',
    options: {
        trustServerCertificate: true,
    }
};

async function conectaBD() {
    try {
        await mssql.connect(stringSQL);
        console.log("Conexão com o BD realizada com sucesso.");
    }
    catch (error) {
        console.log("Erro na conexão com o BD.", error);
    }
} conectaBD()

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


module.exports = {
    conectaBD,
    execQuery,
    buscarDadosBancoDeDados,
    salvarDadosNoBancoDeDados,
    carregarDadosAPI
};

//no outro arquivo, para usar essas funcoes, colocar:

//const { carregarDadosAPI } = require('./checkcache.js');
//carregarDadosAPI('url-da-api', 'identificador-tela');
create schema da_roca

delete da_roca.Mecanicos
delete da_roca.OrdemServico
delete da_roca.CentroDistribuicao
delete da_roca.Veiculo
delete da_roca.Usuarios
drop schema da_roca

SELECT * FROM daroca.produtos


INSERT INTO da_roca.Mecanicos 
(codigoMecanico, codigoCentroDistribuicao, nome, inicioTurno, fimTurno, inicioAlmoco, fimAlmoco)
VALUES
(1, 1, 'Murilo Correia Sousa', '08:00:00', '18:00:00', '12:00:00', '14:00:00'),
(2, 1, 'Enzo Azevedo Sousa', '08:00:00', '18:00:00', '12:00:00', '14:00:00'),
(3, 1, 'Luis Costa Melo', '08:00:00', '18:00:00', '12:00:00', '14:00:00'),
(4, 1, 'Pedro Rocha Cardoso', '08:00:00', '18:00:00', '12:00:00', '14:00:00'),
(5, 1, 'Lucas Cardoso Ferreira', '08:00:00', '18:00:00', '12:00:00', '14:00:00'),
(6, 1, 'Matheus Dias Alves', '08:00:00', '18:00:00', '12:00:00', '14:00:00'),
(7, 1, 'Kauan Carvalho Barros', '08:00:00', '18:00:00', '12:00:00', '14:00:00'),
(8, 2, 'Gustavo Ribeiro Martins', '08:00:00', '18:00:00', '12:00:00', '14:00:00'),
(9, 2, 'Arthur Oliveira Barbosa', '08:00:00', '18:00:00', '12:00:00', '14:00:00'),
(10, 2, 'Douglas Gomes Barbosa', '08:00:00', '18:00:00', '12:00:00', '14:00:00'),
(11, 2, 'Guilherme Correia Azevedo', '08:00:00', '18:00:00', '12:00:00', '14:00:00'),
(12, 2, 'Vinicius Araujo Barros', '08:00:00', '18:00:00', '12:00:00', '14:00:00'),
(13, 3, 'Pedro Rodrigues Cunha', '08:00:00', '18:00:00', '12:00:00', '14:00:00'),
(14, 3, 'Alex Pinto Lima', '08:00:00', '18:00:00', '12:00:00', '14:00:00'),
(15, 3, 'Kauan Rodrigues Barbosa', '08:00:00', '18:00:00', '12:00:00', '14:00:00'),
(16, 3, 'Miguel Cavalcanti Barros', '08:00:00', '18:00:00', '12:00:00', '14:00:00'),
(17, 3, 'Pedro Dias Azevedo', '08:00:00', '18:00:00', '12:00:00', '14:00:00'),
(18, 3, 'Gabriel Cavalcanti Melo', '08:00:00', '18:00:00', '12:00:00', '14:00:00'),
(19, 3, 'Miguel Silva Barros', '08:00:00', '18:00:00', '12:00:00', '14:00:00');

INSERT INTO da_roca.OrdemServico (numeroOrdemServico, codigoVeiculo, tipoManutencao, criadaEm, tempoEstimado, status) VALUES
(18199, 1, 'Manutenção preventiva', '2024-10-03 09:52:13', '01:30:00', 'APROG'),
(20613, 3, 'Manutenção corretiva', '2024-10-03 11:13:13', '02:00:00', 'APROG'),
(27931, 7, 'Manutenção corretiva', '2024-10-03 11:13:13', '02:00:00', 'APROG'),
(28953, 9, 'Manutenção corretiva', '2024-10-03 11:13:13', '02:00:00', 'APROG'),
(32705, 13, 'Manutenção corretiva', '2024-10-03 11:16:17', '02:00:00', 'APROG'),
(24490, 17, 'Manutenção corretiva', '2024-10-03 11:16:17', '02:00:00', 'APROG'),
(26858, 19, 'Manutenção corretiva', '2024-10-03 11:16:17', '02:00:00', 'APROG'),
(13991, 11, 'Manutenção preventiva', '2024-10-03 11:16:17', '01:00:00', 'APROG'),
(36902, 20, 'Manutenção preventiva', '2024-10-03 11:16:17', '01:00:00', 'APROG'),
(28868, 52, 'Manutenção preventiva', '2024-10-03 11:16:17', '01:00:00', 'APROG'),
(23166, 23, 'Manutenção preventiva', '2024-10-03 11:16:17', '01:00:00', 'APROG'),
(26277, 60, 'Manutenção preventiva', '2024-10-03 11:16:17', '01:00:00', 'APROG'),
(23096, 61, 'Manutenção preventiva', '2024-10-03 11:16:17', '01:00:00', 'APROG'),
(35307, 48, 'Manutenção preventiva', '2024-10-03 11:16:17', '01:00:00', 'APROG'),
(27053, 73, 'Manutenção preventiva', '2024-10-03 11:16:17', '01:00:00', 'APROG'),
(23694, 91, 'Manutenção preventiva', '2024-10-03 11:16:17', '01:00:00', 'APROG'),
(30245, 89, 'Manutenção preventiva', '2024-10-03 11:16:17', '01:00:00', 'APROG'),
(14804, 94, 'Manutenção preventiva', '2024-10-03 11:16:17', '01:00:00', 'APROG'),
(29866, 98, 'Manutenção preventiva', '2024-10-03 11:16:17', '01:00:00', 'APROG'),
(16488, 31, 'Manutenção preventiva', '2024-10-03 11:16:17', '01:00:00', 'APROG'),
(17927, 37, 'Manutenção preventiva', '2024-10-03 11:16:17', '01:00:00', 'APROG'),
(22517, 45, 'Manutenção preventiva', '2024-10-03 11:16:17', '01:00:00', 'APROG'),
(29775, 34, 'Manutenção preventiva', '2024-10-03 11:16:17', '01:00:00', 'APROG'),
(39447, 39, 'Manutenção preventiva', '2024-10-03 11:16:17', '01:00:00', 'APROG'),
(12196, 57, 'Manutenção preventiva', '2024-10-03 11:16:17', '01:00:00', 'APROG'),
(25614, 51, 'Manutenção preventiva', '2024-10-03 11:16:17', '01:00:00', 'APROG');

INSERT INTO da_roca.Veiculo 
(codigoVeiculo, codigoCentroDistribuicao, fabricante, modelo, ano, placa, velocidadeMedia) 
VALUES
(1, 1, 'Renault', 'L2H2', 2023, 'D00B2DB', 45),
(2, 1, 'Renault', 'L2H2', 2023, 'BB27EF4', 45),
(3, 1, 'Renault', 'L2H2', 2023, 'C225E08', 45),
(4, 3, 'Renault', 'L2H2', 2023, 'AD5ED5B', 45),
(5, 2, 'Renault', 'L2H2', 2023, '4B62D6F', 45),
(6, 2, 'Renault', 'L2H2', 2023, 'C116227', 45),
(7, 3, 'Renault', 'L2H2', 2023, '4639904', 45),
(8, 2, 'Renault', 'L2H2', 2023, '0086A89', 45),
(9, 2, 'Renault', 'L2H2', 2023, '2156C57', 45),
(10, 1, 'Renault', 'L2H2', 2023, '543A984', 45),
(11, 3, 'Renault', 'L2H2', 2023, 'F4A5FBB', 45),
(12, 2, 'Renault', 'L2H2', 2023, 'AC02E09', 45),
(13, 3, 'Renault', 'L2H2', 2023, 'F64CAE8', 45),
(14, 2, 'Renault', 'L2H2', 2023, 'EA04408', 45),
(15, 3, 'Renault', 'L2H2', 2023, 'F9E9A0C', 45),
(16, 3, 'Renault', 'L2H2', 2023, 'E5ACEEA', 45),
(17, 3, 'Renault', 'L2H2', 2023, '5EF4049', 45),
(18, 3, 'Renault', 'L2H2', 2023, '47F85D7', 45),
(19, 1, 'Renault', 'L2H2', 2023, 'DF5A412', 45),
(20, 2, 'Renault', 'L2H2', 2023, 'BB57D6F', 45),
(21, 2, 'Renault', 'L2H2', 2023, '897B18B', 45),
(22, 2, 'Renault', 'L2H2', 2023, '13E7329', 45),
(23, 1, 'Renault', 'L2H2', 2023, '294E289', 45),
(24, 3, 'Renault', 'L2H2', 2023, 'E1F924B', 45),
(25, 2, 'Renault', 'L2H2', 2023, '02F1683', 45),
(26, 3, 'Renault', 'L2H2', 2023, '1C8E347', 45),
(27, 1, 'Renault', 'L2H2', 2023, 'BD927D0', 45),
(28, 3, 'Renault', 'L2H2', 2023, '2B137E3', 45),
(29, 1, 'Renault', 'L2H2', 2023, 'F8189EC', 45),
(30, 1, 'Renault', 'L2H2', 2023, '64BD788', 45),
(31, 2, 'Renault', 'L2H2', 2023, 'E68C5B6', 45),
(32, 2, 'Renault', 'L2H2', 2023, 'FB3150E', 45),
(33, 2, 'Renault', 'L2H2', 2023, '634E41B', 45),
(34, 2, 'Renault', 'L2H2', 2023, 'FB29CB4', 45),
(35, 2, 'Renault', 'L2H2', 2023, 'FD9E6E6', 45),
(36, 3, 'Renault', 'L2H2', 2023, '9C15F4D', 45),
(37, 2, 'Renault', 'L2H2', 2023, 'CE448E6', 45),
(38, 2, 'Renault', 'L2H2', 2023, 'E45DA49', 45),
(39, 3, 'Renault', 'L2H2', 2023, '559D6F0', 45),
(40, 3, 'Renault', 'L2H2', 2023, '113A8B7', 45),
(41, 2, 'Renault', 'L2H2', 2023, 'A120033', 45),
(42, 3, 'Renault', 'L2H2', 2023, 'F51FDB3', 45),
(43, 1, 'Renault', 'L2H2', 2023, '19B16CF', 45),
(44, 2, 'Renault', 'L2H2', 2023, '441FC1C', 45),
(45, 1, 'Renault', 'L2H2', 2023, 'BE68FE5', 45),
(46, 3, 'Renault', 'L2H2', 2023, 'E7BADDB', 45),
(47, 1, 'Renault', 'L2H2', 2023, 'A2C22ED', 45),
(48, 1, 'Renault', 'L2H2', 2023, '78D135B', 45),
(49, 2, 'Renault', 'L2H2', 2023, '4D7C2C9', 45),
(50, 3, 'Renault', 'L2H2', 2023, 'EDE57B9', 45),
(51, 3, 'Renault', 'L2H2', 2023, 'BBBFEEC', 45),
(52, 2, 'Renault', 'L2H2', 2023, '6F35FBF', 45),
(53, 3, 'Renault', 'L2H2', 2023, '13ADE25', 45),
(54, 2, 'Renault', 'L2H2', 2023, '94D9DCE', 45);

INSERT INTO da_roca.Veiculo 
(codigoVeiculo, codigoCentroDistribuicao, fabricante, modelo, ano, placa, velocidadeMedia)
VALUES
(55, 3, 'Renault', 'L2H2', 2023, '2057762', 45),
(56, 2, 'Renault', 'L2H2', 2023, 'F2B544F', 45),
(57, 1, 'Renault', 'L2H2', 2023, '4B0B486', 45),
(58, 3, 'Renault', 'L2H2', 2023, '43FE9C7', 45),
(59, 1, 'Renault', 'L2H2', 2023, 'F323328', 45),
(60, 2, 'Renault', 'L2H2', 2023, 'B4AE963', 45),
(61, 3, 'Renault', 'L2H2', 2023, '7C98BE0', 45),
(62, 1, 'Renault', 'L2H2', 2023, '8522E58', 45),
(63, 3, 'Renault', 'L2H2', 2023, '56EBF0B', 45),
(64, 2, 'Renault', 'L2H2', 2023, 'D4D1B84', 45),
(65, 2, 'Renault', 'L2H2', 2023, '7311D87', 45),
(66, 2, 'Renault', 'L2H2', 2023, '074B0DB', 45),
(67, 2, 'Renault', 'L2H2', 2023, 'EDF377E', 45),
(68, 1, 'Renault', 'L2H2', 2023, '9CDE0CA', 45),
(69, 2, 'Renault', 'L2H2', 2023, '58ABFF9', 45),
(70, 2, 'Renault', 'L2H2', 2023, '491E3B7', 45),
(71, 3, 'Renault', 'L2H2', 2023, '372DFDD', 45),
(72, 3, 'Renault', 'L2H2', 2023, '8DA5F3A', 45),
(73, 2, 'Renault', 'L2H2', 2023, 'C2D258B', 45),
(74, 1, 'Renault', 'L2H2', 2023, 'FC2AFC5', 45),
(75, 2, 'Renault', 'L2H2', 2023, '5C06BA8', 45),
(76, 3, 'Renault', 'L2H2', 2023, '23BD4A2', 45),
(77, 1, 'Renault', 'L2H2', 2023, '4FEB784', 45),
(78, 1, 'Renault', 'L2H2', 2023, '18138B0', 45),
(79, 2, 'Renault', 'L2H2', 2023, 'DC8645A', 45),
(80, 2, 'Renault', 'L2H2', 2023, '6CCC2EF', 45),
(81, 3, 'Renault', 'L2H2', 2023, '0159390', 45),
(82, 2, 'Renault', 'L2H2', 2023, 'B29A554', 45),
(83, 1, 'Renault', 'L2H2', 2023, '0362A1C', 45),
(84, 1, 'Renault', 'L2H2', 2023, '6249BF6', 45),
(85, 3, 'Renault', 'L2H2', 2023, '799F8DD', 45),
(86, 1, 'Renault', 'L2H2', 2023, 'A632833', 45),
(87, 2, 'Renault', 'L2H2', 2023, '79E4D9D', 45),
(88, 3, 'Renault', 'L2H2', 2023, '74B6854', 45),
(89, 3, 'Renault', 'L2H2', 2023, '7F365ED', 45),
(90, 2, 'Renault', 'L2H2', 2023, '6E97378', 45),
(91, 3, 'Renault', 'L2H2', 2023, '2090033', 45),
(92, 3, 'Renault', 'L2H2', 2023, '5BBB1CB', 45),
(93, 3, 'Renault', 'L2H2', 2023, 'E434FAE', 45),
(94, 1, 'Renault', 'L2H2', 2023, 'F6A5F29', 45),
(95, 2, 'Renault', 'L2H2', 2023, '3CBB53C', 45),
(96, 1, 'Renault', 'L2H2', 2023, '84F6B15', 45),
(97, 2, 'Renault', 'L2H2', 2023, '8FC80A1', 45),
(98, 2, 'Renault', 'L2H2', 2023, 'D3A2D55', 45),
(99, 1, 'Renault', 'L2H2', 2023, 'E7CE5FB', 45),
(100, 3, 'Renault', 'L2H2', 2023, 'AE8012A', 45),
(101, 1, 'Renault', 'L2H2', 2023, 'DEB41FA', 45),
(102, 1, 'Renault', 'L2H2', 2023, '36532BA', 45),
(103, 3, 'Renault', 'L2H2', 2023, 'DEBFDB4', 45),
(104, 1, 'Renault', 'L2H2', 2023, 'B9FEF1B', 45),
(105, 2, 'Renault', 'L2H2', 2023, '1FEDB0B', 45),
(106, 2, 'Renault', 'L2H2', 2023, '6D6ED4D', 45),
(107, 1, 'Renault', 'L2H2', 2023, '9C31108', 45),
(108, 1, 'Renault', 'L2H2', 2023, '0822E1C', 45),
(109, 2, 'Renault', 'L2H2', 2023, 'C6EE51A', 45),
(110, 2, 'Renault', 'L2H2', 2023, 'A9CFC43', 45),
(111, 1, 'Renault', 'L2H2', 2023, 'BB26E22', 45),
(112, 3, 'Renault', 'L2H2', 2023, '7870DE9', 45);


CREATE TABLE daroca.centrodistribuicao (
    codigoCentroDistribuicao INT PRIMARY KEY,
    nome VARCHAR(100),
    cidade VARCHAR(50),
    estado VARCHAR(50)
);

INSERT INTO da_roca.CentroDistribuicao (codigoCentroDistribuicao, nome, cidade, estado) VALUES
(1, 'Centro de distribuição 3', 'Ribeirão Preto', 'São Paulo'),
(2, 'Centro de distribuição 2', 'São Paulo', 'São Paulo'),
(3, 'Centro de distribuição 1', 'Campinas', 'São Paulo');


CREATE TABLE daroca.usuarios (
    codigoUsuario INT PRIMARY KEY,
    nome VARCHAR(100),
    login VARCHAR(50) UNIQUE,
    senha VARCHAR(255)
);

INSERT INTO da_roca.Usuarios 
(codigoUsuario, nome, login, senha) 
VALUES
(1, 'Guilherme Macedo', 'gmacedo', 'paocomovo#15'),
(2, 'Nathália Martins', 'nmartins', 'cazaVerde@13'),
(3, 'Elisabeth Araújo', 'earaujo', 'fermento#56!'),
(4, 'Fernando Gomide', 'fgomide', 'xpto12#$'),
(5, 'Rodrigo Gonçalves', 'rgoncalves', 'mOntAnhA%12#13');


--COMECA AQUI

CREATE TABLE da_roca.mecanicos (
    codigoMecanico INT PRIMARY KEY,
    codigoCentroDistribuicao INT,
    nome VARCHAR(255),
    inicioTurno TIME,
    fimTurno TIME,
    inicioAlmoco TIME,
    fimAlmoco TIME
);

CREATE TABLE da_roca.veiculos (
    codigoVeiculo INT PRIMARY KEY,
    codigoCentroDistribuicao INT,
    fabricante VARCHAR(50),
    modelo VARCHAR(50),
    ano INT,
    placa VARCHAR(10),
    velocidadeMedia INT
);

CREATE TABLE da_roca.ordensservico (
    numeroOrdemServico INT PRIMARY KEY,
	codigoCentroDistribuicao INT,
    codigoVeiculo INT,
    tipoManutencao VARCHAR(50),
    criadaEm TIMESTAMP,
    tempoEstimado TIME,
    status VARCHAR(10)
);

CREATE TABLE da_roca.programacoes (
    datas date,
    centro int,
    usuario varchar(20)
)


--exemplo de cadastrar programacao 
--(so sera ultilizada quando clicar no botao, diferente das outrras, n e cache):
/*
INSERT INTO da_roca.programacoes 
(datas, centro, usuario)
values
('00-00-0000', 0, 'chico')
*/


--exemplos de inserts das telas de cache:
/*
INSERT INTO da_roca.mecanicos 
(codigoMecanico, codigoCentroDistribuicao, nome, inicioTurno, fimTurno, inicioAlmoco, fimAlmoco)
VALUES 
(1, 1, 'Carlos Silva', '08:00:00', '17:00:00', '12:00:00', '13:00:00');

INSERT INTO da_roca.veiculos 
(codigoVeiculo, codigoCentroDistribuicao, fabricante, modelo, ano, placa, velocidadeMedia)
VALUES 
(1, 1, 'Ford', 'F-250', 2020, 'ABC-1234', 80);

INSERT INTO da_roca.ordensservico 
(numeroOrdemServico, codigoCentroDistribuicao, codigoVeiculo, tipoManutencao, criadaEm, tempoEstimado, status)
VALUES 
(1002, 2, 2, 'Reparo no motor', CURRENT_TIMESTAMP, '04:00:00', 'Pendente');
*/
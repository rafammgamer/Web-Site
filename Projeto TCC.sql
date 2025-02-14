CREATE DATABASE PROJETO
USE PROJETO

SET DATEFORMAT DMY
USE master
DROP DATABASE PROJETO
DROP TABLE Cliente
drop table Orcamento

CREATE TABLE Cliente(
    idCliente INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    NomeCliente VARCHAR(40) NOT NULL,
    TelCliente VARCHAR(11) NOT NULL,
    Endereco VARCHAR(50) NOT NULL,
    EmailCliente VARCHAR(25) NOT NULL,
    Bairro VARCHAR(50) NOT NULL,
    Cidade VARCHAR(50) NOT NULL,
    Regiao VARCHAR(15) NOT NULL,
    --TipoCliente VARCHAR(20) NOT NULL
)

CREATE TABLE Orcamento(
    idOrcamento INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    --idCliente INT NOT NULL FOREIGN KEY REFERENCES Cliente(idCliente),
    Descricao CHAR(500) NOT NULL,
    Dia DATE NOT NULL
)

CREATE TABLE Fornecedor(
    --idFornecedor INT NOT NULL PRIMARY KEY,
    NomeFornecedor VARCHAR(50) NOT NULL,
    TelFornecedor VARCHAR(11) NOT NULL,
    CNPJ NUMERIC(12) NOT NULL,
    EmailFornecedor VARCHAR(50) NOT NULL
)

CREATE TABLE Produto(
    --idProduto INT NOT NULL PRIMARY KEY,
    --idFornecedor INT NOT NULL FOREIGN KEY REFERENCES Fornecedor(idFornecedor),
    DescricaoProduto CHAR(100) NOT NULL,
    QuantProduto INT NOT NULL,
    Servico TINYINT
)

CREATE TABLE OrcamentoProduto(
    --idProduto INT NOT NULL FOREIGN KEY REFERENCES Produto(idProduto),
    --idOrcamento INT NOT NULL FOREIGN KEY REFERENCES Orcamento(idOrcamento),
    Quantidade INT NOT NULL,
)

CREATE TABLE Funcionario(
    idFunc INT NOT NULL PRIMARY KEY,
    NomeFunc VARCHAR(15) NOT NULL,
    SobrenomeFunc VARCHAR(30) NOT NULL,
    Sexo CHAR(1) NOT NULL,
    DataNasc DATE NOT NULL,
    EnderecoFunc VARCHAR(50) NOT NULL,
    BairroFunc VARCHAR(50) NOT NULL,
    CidadeFunc VARCHAR(50) NOT NULL,
    TelFunc VARCHAR(11) NOT NULL,
    CPF NUMERIC(11) NOT NULL,
    QuantDependentes INT NULL
)

SELECT * FROM Cliente
SELECT * FROM Orcamento
DELETE FROM Cliente WHERE NomeCliente = '1120'
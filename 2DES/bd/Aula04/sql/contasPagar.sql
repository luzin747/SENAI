drop DATABASE if exists contasPagar;
create database contasPagar charset=UTF8 collate utf8_general_ci;
use contasPagar;

create table cliente (
    cod_cli INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR
(60) NOT NULL,
    endereco VARCHAR
(50) NOT NULL,
    bairro VARCHAR
(30) NOT NULL,
    cidade VARCHAR
(30) NOT NULL,
    uf CHAR
(2) NOT NULL
);

CREATE TABLE telefones
(
    cod_cli INTEGER NOT NULL,
    telefone varchar(15) not null,
    celular varchar(20) not null,

    foreign key (cod_cli) references cliente(cod_cli)
);

CREATE TABLE compras
(
    cod_cli INTEGER NOT NULL,
    num_dupli CHAR(3) NOT NULL,
    vencimento VARCHAR(10) NOT NULL,
    pagamento VARCHAR(10) NOT NULL,
    valor FLOAT(10) NOT NULL,
    diferenca FLOAT(10) NOT NULL,
    valor_Final FLOAT(10) NOT NULL,

    foreign key (cod_cli) references cliente(cod_cli)


);
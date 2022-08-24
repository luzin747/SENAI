drop DATABASE if exists metro;
create database metro charset=UTF8 collate utf8_general_ci;
use metro;

CREATE TABLE motorista (
    cpf INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_Motorista VARCHAR
(100) NOT NULL
);

CREATE TABLE telefones
(
    cpf INTEGER NOT NULL,
    telefone varchar(15) not null,

    foreign key (cpf) references motorista(cpf)

);

CREATE TABLE linhas (
    id_linha INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    descricao_linha VARCHAR
(40) NOT NULL

);

CREATE TABLE horarios
(
    id_linha INTEGER NOT NULL,
    horarios VARCHAR(5) NOT NULL,

    foreign key (id_linha) references linhas(id_linha)


);
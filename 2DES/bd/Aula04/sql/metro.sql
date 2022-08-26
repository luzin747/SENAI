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


INSERT INTO motorista
VALUES
    ("400.825.752-74", "Ana de Souza de Oliveira"),
    ("342.168.515-09", "Ana Oliveira Oliveira"),
    ("482.142.372-38", "Lúcia da Silva de Souza"),
    ("050.663.437-09", "Marcos de Souza Castro"),
    ("052.102.852-35", "Maria Oliveira Castro");

INSERT INTO telefones
VALUES
    ("400.825.752-74", "(11)04023-4384"),
    ("400.825.752-74", "(11)94023-5587"),
    ("342.168.515-09", "(14)3288-8530"),
    ("482.142.372-38", "(21)74746-1126"),
    ("482.142.372-38", "(11)94023-4454"),
    ("050.663.437-09", "(14)64505-3435"),
    ("050.663.437-09", "(11)84023-4444"),
    ("050.663.437-09", "(11)84023-0084"),
    ("052.102.852-35", "(19)03086-1102")

INSERT INTO linhas
VALUES

    (NULL, "Campinas x Pedreira"),
    (NULL, "Campinas X Jaguariúna"),
    (NULL, "Campinas X Jaguariúna FAJ"),
    (NULL, "Campinas X Amparo"),
    (NULL, "Campinas X Holambra");

INSERT INTO horarios
VALUES

    ("Linha1", "07:50"),
    ("Linha1", "09:30"),
    ("Linha1", "11:00"),
    ("Linha1", "14:00"),
    ("Linha1", "17:00"),
    ("Linha1", "20:00"),
    ("Linha2", "07:00"),
    ("Linha2", "09:00"),
    ("Linha2", "11:00"),
    ("Linha2", "14:00"),
    ("Linha2", "17:00"),
    ("Linha2", "20:30"),
    ("Linha3", "07:30"),
    ("Linha3", "11:30"),
    ("Linha3", "17:30"),
    ("Linha3", "20:00"),
    ("Linha4", "07:50"),
    ("Linha4", "11:00"),
    ("Linha4", "14:00"),
    ("Linha4", "18:00"),
    ("Linha4", "21:00"),
    ("Linha5", "07:45"),
    ("Linha5", "09:30"),
    ("Linha5", "11:40"),
    ("Linha5", "14:50"),
    ("Linha5", "17:30"),
    ("Linha5", "21:30");

drop DATABASE if exists lanchonete;
create database lanchonete charset=UTF8 collate utf8_general_ci;
use lanchonete;

CREATE TABLE clientes (
    id_cliente INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cpf INTEGER NOT NULL,
    nome_cliente VARCHAR
(30) NOT NULL,
    cep VARCHAR
(10) NOT NULL,
    numero CHAR
(3) NOT NULL,
    complemento VARCHAR
(50) NOT NULL

);

CREATE TABLE telefones
(
    id_cliente INTEGER NOT NULL,
    telefone varchar(15) not null,

    foreign key (id_cliente) references clientes(id_cliente)


);

CREATE TABLE entregadores (
    id_intregador INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_entregador VARCHAR
(30) NOT NULL,
    veiculo VARCHAR
(20) NOT NULL

);

CREATE TABLE produtos (
    id_produto INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_produto VARCHAR
(35) NOT NULL,
    preco_unitario FLOAT
(10) NOT NULL

);

drop table pedidos;

CREATE TABLE pedidos (
    id_cliente INTEGER NOT NULL,
    id_pedido INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_intregador INTEGER NOT NULL,
    data date not null,
    hora_Pedido time,
    hora_Entrega time,
    hora_fim time,


    foreign key
(id_cliente) references clientes
(id_cliente),
    foreign key
(id_intregador) references entregadores
(id_intregador)  


);

CREATE TABLE itens
(
    id_pedido INTEGER NOT NULL,
    quantidade CHAR(3) NOT NULL,
    id_produto INTEGER NOT NULL,

    foreign key (id_produto) references produtos(id_produto),
    foreign key (id_pedido) references pedidos(id_pedido)


);
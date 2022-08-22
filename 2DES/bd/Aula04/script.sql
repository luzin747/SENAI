
-- EXERCICIO 01 

drop DATABASE if exists lojinha;
create database lojinha charset=UTF8 collate utf8_general_ci;
use lojinha;

create table cliente (
    id_cliente integer not null PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    nascimento VARCHAR(10) NOT NULL,
    sexo CHAR NOT NULL,
    peso integer NOT NULL
);

CREATE table telefones (
    id_cliente integer not null,
    telefone varchar(15) not null,

    foreign key (id_cliente) references cliente(id_cliente)
);


-- EXERCICIO 02

drop DATABASE if exists academia;
create database academia charset=UTF8 collate utf8_general_ci;
use academia;

CREATE TABLE aluno (
    id_aluno integer not null PRIMARY KEY AUTO_INCREMENT,
    nome_aluno VARCHAR(50) NOT NULL,
    nascimento VARCHAR(10) NOT NULL,
    sexo CHAR NOT NULL

);

CREATE TABLE telefones (
    id_aluno integer not null,
    telefone varchar(15) not null,

    foreign key (id_aluno) references aluno(id_aluno)


);




create table aparelhos (
    id_aparelho integer not null primary key auto_increment,
    aparelho varchar(30) not null

);

CREATE TABLE treino(
    id_exercicio INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    descricao varchar(60) NOT NULL,
    grupo_muscular VARCHAR(25) NOT NULL,
    id_aparelho INTEGER NOT NULL,

    foreign key (id_aparelho) references aparelhos(id_aparelho)

);



CREATE TABLE ficha_exercicios (
    id_aluno INTEGER NOT NULL,
    id_exercicio INTEGER NOT NULL,
    dia_semana VARCHAR(20) NOT NULL,
    serie VARCHAR(30) NOT NULL,

    foreign key (id_aluno) references aluno(id_aluno),
    foreign key (id_exercicio) references treino(id_exercicio)


);

---------------------------- EXERCICIO 03 -----------------------

drop DATABASE if exists metro;
create database metro charset=UTF8 collate utf8_general_ci;
use metro;

CREATE TABLE motorista (
    cpf INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_Motorista VARCHAR(100) NOT NULL
);

CREATE TABLE telefones (
    cpf INTEGER NOT NULL,
    telefone varchar(15) not null,
    
    foreign key (cpf) references motorista(cpf)

);

CREATE TABLE linhas (
    id_linha INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    descricao_linha VARCHAR(40) NOT NULL

);

CREATE TABLE horarios (
    id_linha INTEGER NOT NULL,
    horarios VARCHAR(5) NOT NULL,

    foreign key (id_linha) references linhas(id_linha)


);

------------------------- EXERCICIO 04 ------------------------

drop DATABASE if exists contasPagar;
create database contasPagar charset=UTF8 collate utf8_general_ci;
use contasPagar;

create table cliente (
    cod_cli INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(60) NOT NULL,
    endereco VARCHAR(50) NOT NULL,
    bairro VARCHAR(30) NOT NULL,
    cidade VARCHAR(30) NOT NULL,
    uf CHAR(2) NOT NULL
);

CREATE TABLE telefones (
    cod_cli INTEGER NOT NULL,
    telefone varchar(15) not null,
    celular varchar(20) not null,

    foreign key (cod_cli) references cliente(cod_cli)  
);

CREATE TABLE compras (
    cod_cli INTEGER NOT NULL,
    num_dupli CHAR(3) NOT NULL,
    vencimento VARCHAR(10) NOT NULL,
    pagamento VARCHAR(10) NOT NULL,
    valor FLOAT(10) NOT NULL,
    diferenca FLOAT(10) NOT NULL,
    valor_Final FLOAT(10) NOT NULL,

    foreign key (cod_cli) references cliente(cod_cli)  
    

);


--------------------- EXERCICIO 05 --------------------

drop DATABASE if exists lanchonete;
create database lanchonete charset=UTF8 collate utf8_general_ci;
use lanchonete;

CREATE TABLE clientes (
    id_cliente INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cpf INTEGER NOT NULL,
    nome_cliente VARCHAR(30) NOT NULL,
    cep VARCHAR(10) NOT NULL,
    numero CHAR(3) NOT NULL,
    complemento VARCHAR(50) NOT NULL

);

CREATE TABLE telefones (
    id_cliente INTEGER NOT NULL,
    telefone varchar(15) not null,

    foreign key (id_cliente) references clientes(id_cliente)  


);

CREATE TABLE entregadores (
    id_intregador INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_entregador VARCHAR(30) NOT NULL,
    veiculo VARCHAR(20) NOT NULL

);

CREATE TABLE produtos (
    id_produto INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_produto VARCHAR(35) NOT NULL,
    preco_unitario FLOAT(10) NOT NULL

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


    foreign key (id_cliente) references clientes(id_cliente),
    foreign key (id_intregador) references entregadores(id_intregador)  


);

CREATE TABLE itens (
    id_pedido INTEGER NOT NULL,
    quantidade CHAR(3) NOT NULL,
    id_produto INTEGER NOT NULL,

    foreign key (id_produto) references produtos(id_produto), 
    foreign key (id_pedido) references pedidos(id_pedido)


);



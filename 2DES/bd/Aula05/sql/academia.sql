drop database if exists academia;
create database academia charset=UTF8 collate utf8_general_ci;
use academia;

create table alunos(
    id_aluno integer not null primary key auto_increment,
    nome varchar(50) not null,
    nascimento date not null,
    sexo varchar(1) not null,
    peso float(5,2)
);

create table telefones(
    id_aluno integer not null,
    numero varchar(15) not null
);


create table aparelhos(
    id_aparelho integer not null PRIMARY KEY AUTO_INCREMENT,
    nome varchar(50) not null
);

create table exercicios(
    id_exercicio integer not null primary key auto_increment,
    descricao varchar(50) not null,
    grupo_muscular varchar(20) not null,
    id_aparelho integer not null
);


create table fichas(
    id_aluno integer not null,
    id_exercicio integer not null,
    dia_semana varchar(20) not null,
    serie varchar(40) not null
);

alter table telefones add foreign key (id_aluno) references alunos(id_aluno);
alter table exercicios add foreign key (id_aparelho) references aparelhos(id_aparelho);
alter table fichas add foreign key (id_aluno) references alunos(id_aluno);
alter table fichas add foreign key (id_exercicio) references exercicios(id_exercicio);

describe alunos;
describe telefones;
describe aparelhos;
describe exercicios;
describe fichas;

show tables;

LOAD DATA INFILE 'D:/Github/luiz/SENAI/2DES/bd/aula05/csv/academia/alunos.csv'
INTO TABLE alunos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/Github/luiz/SENAI/2DES/bd/aula05/csv/academia/telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/Github/luiz/SENAI/2DES/bd/aula05/csv/academia/aparelhos.csv'
INTO TABLE aparelhos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/Github/luiz/SENAI/2DES/bd/aula05/csv/academia/exercicios.csv'
INTO TABLE exercicios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/Github/luiz/SENAI/2DES/bd/aula05/csv/academia/fichas.csv'
INTO TABLE fichas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from alunos;
select * from telefones;
select * from aparelhos;
select * from exercicios;
select * from fichas;

select * from alunos join telefones on alunos.id_aluno = telefones.id_aluno;
select * from alunos a join telefones t on a.id_aluno = t.id_aluno;

select * from alunos a
join telefones t
on a.id_aluno = t.id_aluno;

-- Salvando a Consulta
create view vw_alunos as
select a.id_aluno, a.nome, a.nascimento, a.sexo, a.peso, t.numero as telefone from alunos a
inner join telefones t
on a.id_aluno = t.id_aluno;

select * from vw_alunos;



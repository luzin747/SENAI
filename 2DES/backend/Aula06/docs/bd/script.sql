drop database if exists Patrimonio;
create database Patrimonio charset=UTF8 collate utf8_general_ci;
use Patrimonio;

create table itens(
    ni numeric(6) not null,
    aquisicao timestamp not null,
    denominacao varchar(100) not null,
    valor numeric(10,2) not null,
    img varchar(250) default 'default.png',

    constraint pk_item primary key (ni)
);

-- Impoertação de dados DML

LOAD DATA INFILE 'D:/Github/luiz/SENAI/2DES/backend/Aula06/docs/bd/itens.csv'
INTO TABLE itens
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;


select * from itens; 
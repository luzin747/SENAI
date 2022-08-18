-- Exclui o banco se existir e cria um novo com o padão utf8 de caracteres --
drop database if exists pedidos;
create database pedidos charset=UTF8 collate utf8_general_ci;
use pedidos;
-- DDL Criação da estrutura do Baco de Dados 
create table clientes(
    id_cliente integer not null primary key auto_increment,
    pri_nome varchar(20) not null,
    sobrenome varchar(20) not null,
    endereco  varchar(100) not null
); 

drop table telefones;


CREATE TABLE telefones(
    id_cliente integer not null,
    telefone varchar(15) not null,
    celular varchar(20) not null,

    foreign key (id_cliente) references clientes(id_cliente)
); 




CREATE TABLE pedidos(
    numero_do_pedido integer not null primary key auto_increment,
    id_cliente integer not null,
    data_pedido timestamp not null,
    valor_pedido decimal(8,2) not null,
    descricao_pedido varchar(256) not null,
    quantidade integer not null,

    foreign key (id_cliente) references clientes(id_cliente)

);

describe telefones;
describe clientes;
describe pedidos;
show tables;

-- DML Alimentar o banco de daados com dados de teste
insert into clientes values 
(null,"Joge","Silva","Rua Coisa Bueno - Jaguariúna - SP"),
(null,"Vanessa","Silva","Rua Amâncio Bueno - Jaguariúna - SP"),
(null,"Marcelo","Souza","Rua Dois - Jaguariúna - SP"),
(null,"Luiz","Souza","Rua Maria Baroni Cartarozzi- Pedreira - SP");




insert into telefones values
(1,'19-66541-9435','9999-9999'),
(1,'19-85065-2859','1234-5678'), 
(2,'19-81575-6348','9999-9999'),
(2,'19-34695-9509','9999-9999'),
(3,'19-22236-2791','9999-9999');


insert into pedidos VALUES
(null,1,null,10,"Pastel de Flango",1),
(null,1,null,8,"Pastel de Carne",2),
(null,2,null,6,"Coxinha",3),
(null,2,null,7,"Pastel de Queijo",1),
(null,3,null,9,"Refri Lata 600ML",1),
(null,3,null,5,"Pastel de Carne c/ Queijo",2);






select * from clientes;

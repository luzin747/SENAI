drop DATABASE if exists lojinha;
create database lojinha charset=UTF8 collate utf8_general_ci;
use lojinha;

create table cliente (
    id_cliente integer not null PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR
(30) NOT NULL,
    nascimento VARCHAR
(10) NOT NULL,
    sexo CHAR NOT NULL,
    peso integer NOT NULL
);

CREATE table telefones
(
    id_cliente integer not null,
    telefone varchar(15) not null,

    foreign key (id_cliente) references cliente(id_cliente)
);


INSERT INTO cliente
VALUES
    (null, 'Ana de Souza de Oliveira', '22/05/2000', 'M', '65'),
    (null, 'Ana Oliveira Oliveira'   , '23/08/1990', 'T', '88'),
    (null, 'Lúcia da Silva de Souza' , '14/06/1988', 'F', '45,5'),
    (null, 'Marcos de Souza Castro'  , '13/07/2002', 'M', '98'),
    (null, 'Maria Oliveira Castro'   , '14/08/2005', 'T', '101'),
    (null, 'Jurema de Souza Castro'  , '15/06/2007', 'F', '80');

INSERT INTO telefones
VALUES
    ('1', '(11)04023-4384'),
    ('1', '(14)3288-8530'),
    ('2', '(21)74746-1126'),
    ('2', '(14)64505-3435'),
    ('2', '(19)03086-1102'),
    ('3', '(14)64500-3435'),
    ('4', '(19)28260-0126'),
    ('5', '(21)34757-1544'),
    ('6', '(19)3030-4465'),
    ('6', '(19)93030-4460');



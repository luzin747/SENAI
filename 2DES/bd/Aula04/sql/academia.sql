drop DATABASE if exists academia;
create database academia charset=UTF8 collate utf8_general_ci;
use academia;

CREATE TABLE aluno (
    id_aluno integer not null PRIMARY KEY AUTO_INCREMENT,
    nome_aluno VARCHAR
(50) NOT NULL,
    nascimento VARCHAR
(10) NOT NULL,
    sexo CHAR NOT NULL

);

CREATE TABLE telefones
(
    id_aluno integer not null,
    telefone varchar(15) not null,

    foreign key (id_aluno) references aluno(id_aluno)


);

create table aparelhos (
    id_aparelho integer not null primary key auto_increment,
    aparelho varchar
(30) not null

);

CREATE TABLE treino(
    id_exercicio INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    descricao varchar
(60) NOT NULL,
    grupo_muscular VARCHAR
(25) NOT NULL,
    id_aparelho INTEGER NOT NULL

);

alter table treino add foreign key (id_aparelho) references aparelhos(id_aparelho);



CREATE TABLE ficha_exercicios
(
    id_aluno INTEGER NOT NULL,
    id_exercicio INTEGER NOT NULL,
    dia_semana VARCHAR(20) NOT NULL,
    serie VARCHAR(30) NOT NULL


);

alter table ficha_exercicios add foreign key (id_aluno) references aluno(id_aluno);
alter table ficha_exercicios add foreign key (id_exercicio) references treino(id_exercicio);


-------- Inserindo Dados na Tabela -------
insert into aluno
VALUES
    (null, 'Marcos de Souza Castro', '22/05/2000', 'M'),
    (null, 'Ana Oliveira Oliveira', '23/08/1990', 'T'),
    (null, 'Lucia da Silva de Souza', '14/06/1988', 'F'),
    (null, 'Ana de Souza de Oliveira', '13/07/2002', 'M');

insert into telefones
VALUES
    ('1', '(11)04023-4384'),
    ('1', '(19)03086-1102'),
    ('2', '(14)3288-8530'),
    ('3', '(21)74746-1126'),
    ('3', '(19)28260-0126'),
    ('4', '(14)64505-3435');

insert into aparelhos
VALUES
    (null, 'prancha peito reto'),
    (null, 'puxador movel costas'),
    (null, 'alter 20k'),
    (null, 'prancha ombro'),
    (null, 'Esteira'),
    (null, 'prancha peito invertido'),
    (null, 'puxador fixo costas'),
    (null, 'alter 30k'),
    (null, 'Leg Press'),
    (null, 'Bicicleta Ergométrica'),
    (null, 'prancha peito inclinado'),
    (null, 'puxador sentado costas'),
    (null, 'alter 10k'),
    (null, 'crucifixo');


insert into treino
VALUES
    (null, 'Puxada Baixa', 'Peito', '1 '),
    (null, 'Supino Reto', 'Costas', '2' ),
    (null, 'Elevação Frontal', 'Ombro', '3' ),
    (null, 'Maq. Posterior', 'Ombro', '4' ),
    (null, 'Corrida', 'Aquecimento', '5' ),
    (null, 'Supino declinado', 'Peito', '6' ),
    (null, 'Remada Alta', 'Costas', '7' ),
    (null, 'Empurrar Cochas', 'Perna', '9' ),
    (null, 'Pedalada', 'Aquecimento', '10'),
    (null, 'Supino Inclinado', 'Peito', '11'),
    (null, 'Cerrote', 'Costas', '12'),
    (null, 'Biceps', 'Braço', '13'),
    (null, 'Panturrilha', 'Perna', '9' ),
    (null, 'crucifixo', 'Peito', '14'),
    (null, 'Elevação Lateral', 'Ombro', '13'),
    (null, 'Triceps', 'Braço', '13'),
    (null, 'Caminhada', 'Aquecimento', '5');

INSERT into ficha_exercicios
VALUES
    ('1', '1', 'Segunda-feira', '4R decrescente 12 10 8 6'),
    ('1', '2', 'Terça-feira	 ', '4R decrescente 12 10 8 6'),
    ('1', '3', 'Quarta-feira', '4R decrescente 12 10 8 6'),
    ('1', '4', 'Quinta-feira', '4R decrescente 12 10 8 6'),
    ('1', '5', 'Sexta-feira	 ', '30 min'),
    ('2', '6', 'Segunda-feira', '4R constante 8 8 8 8'),
    ('2', '7', 'Terça-feira	 ', '4R constante 8 8 8 8'),
    ('2', '4', 'Quarta-feira', '4R constante 8 8 8 8'),
    ('2', '8', 'Quinta-feira', '4R constante 8 8 8 8'),
    ('2', '9', 'Sexta-feira	 ', '30 min'),
    ('3', '10', 'Segunda-feira', '4R constante 6 6 6 6'),
    ('3', '11', 'Terça-feira	 ', '4R constante 6 6 6 6'),
    ('3', '12', 'Quarta-feira', '4R constante 6 6 6 6'),
    ('3', '13', 'Quinta-feira', '4R constante 15 15 15 15'),
    ('3', '1', 'Sexta-feira	 ', '4R constante 6 6 6 6'),
    ('4', '14', 'Segunda-feira', '4R constante 6 6 6 6'),
    ('4', '15', 'Terça-feira	', '4R constante 6 6 6 6'),
    ('4', '16', 'Quarta-feira', '4R constante 6 6 6 6'),
    ('4', '17', 'Quinta-feira', '4R constante 15 15 15 15'),
    ('4', '6', 'Sexta-feira	', '4R constante 6 6 6 6');

use pizzaria
select * from clientes;

select * from pizzas;

describe clientes;
select * from clientes where nome = "Thamires de Campos Luz"; -- id cliente 96
select * from clientes where nome = "Everton Jose de Souza"; -- id cliente 105
select * from clientes where nome = "Silvia Roberta de Jesus Garcia"; -- id cliente 93

describe pizzas;
select * from pizzas where nome = "Vienense"; --  id_pizza 41 valor 29.09
select * from pizzas where nome = "Toscana"; -- id_pizza 39 valor  29.41
select * from pizzas where nome = "Canadense";-- id_pizza 11 valor 31.33
select * from pizzas where nome = "Cubana"; -- id_pizza 14 valor 30.85

create procedure set_total_pedido(id int)
update pedidos
set valor = (select sum(quantidade * valor) from itens_pedido where pedido_id = id)
where pedido_id = id;

show procedure status;

-- Registrando o pedido
insert into pedidos values (default, 96, curdate(), curtime(), null);
insert into pedidos values (default, 105, curdate(), curtime(), null);
insert into pedidos values (default, 93, curdate(), curtime(), null);

--Pedido da Thamires de Campos Luz quer uma pizza Vienense
insert into itens_pedido values (27,41,1,29.09);
-- Pedido do Everton Jose de Souza que duas Toscana
insert into itens_pedido values (28,39,2,29.41);
---- Pedido da Silvia Roberta de Jesus Garcia que uma Canadense e 2 Cubanas
insert into itens_pedido values (29,11,1,31.33);
insert into itens_pedido values (29,14,2,30.85);

call set_total_pedido(27);
call set_total_pedido(28);
call set_total_pedido(29);

select * from pedidos order by pedido_id desc limit 3;

create procedure new_pedido_1item(cliente_id int, pizza_id int qtd int)

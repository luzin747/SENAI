const create = (model) => {
    return `insert into departamaneots values (${model.cod_produtos}, ${model.nome_produto })`
}

const del = (model) => {
    return `DELETE FROM departamentos WHERE cod_depto = ${model.cod_depto}`
}

module.exports = {
    create,
    del
}
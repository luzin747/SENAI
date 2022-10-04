const mysql = require('mysql');
const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "patrimonio"
});
function listarItens(req, res){
    let query = "SELECT * FROM itens";
    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};
function criarItens(req, res) {
    let query = `INSERT INTO itens VALUES (DEFAULT, '${req.body.aquisicao}', '${req.body.denominacao}', ${req.body.valor}, '${req.body.img}')`;
    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};
function excluirItens(req, res) {
    let query = `DELETE FROM itens WHERE cod = '${req.body.ni}'`;
    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};
module.exports = {
    listarItens,
    criarItens,
    excluirItens
}
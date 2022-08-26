const express = require("express")
const cors = require("cors")
const mysql = require("mysql")

const app = express()

//Cria a conexão com o Banco de dados
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'entregas'
});

app.get('/entregas/clientes', (req,res) => {
    let string = "select * from vw_clientes"
    // res.json("Oi q q c qué, eu sou um back. mas não aquele q c ta pensando ")
    con.query(string,(err,result) => {
        if(err == null) {
            res.json(result)
        }
    })
})

app.get('/entregas/entregadores', (req,res) => {
    let string = "select * from entregadores"
    // res.json("Oi q q c qué, eu sou um back. mas não aquele q c ta pensando ")
    con.query(string,(err,result) => {
        if(err == null) {
            res.json(result)
        }
    })
})

app.get('/entregas/itens', (req,res) => {
    let string = "select * from itens"
    // res.json("Oi q q c qué, eu sou um back. mas não aquele q c ta pensando ")
    con.query(string,(err,result) => {
        if(err == null) {
            res.json(result)
        }
    })
})

app.get('/entregas/pedidos', (req,res) => {
    let string = "select * from pedidos"
    // res.json("Oi q q c qué, eu sou um back. mas não aquele q c ta pensando ")
    con.query(string,(err,result) => {
        if(err == null) {
            res.json(result)
        }
    })
})

app.get('/entregas/produtos', (req,res) => {
    let string = "select * from produtos"
    // res.json("Oi q q c qué, eu sou um back. mas não aquele q c ta pensando ")
    con.query(string,(err,result) => {
        if(err == null) {
            res.json(result)
        }
    })
})



//Inicia o túnel e ouve os verbos HTTP
app.listen(3000, () => {
    console.log("Respondendo na porta 3000");
});


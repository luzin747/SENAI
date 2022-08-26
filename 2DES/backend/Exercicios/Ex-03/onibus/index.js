const express = require("express")
const cors = require("cors")
const mysql = require("mysql")

const app = express()

//Cria a conexão com o Banco de dados
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'onibus'
});

app.get('/onibus/motoristas', (req,res) => {
    let string = "select * from vw_motorista"
    // res.json("Oi q q c qué, eu sou um back. mas não aquele q c ta pensando ")
    con.query(string,(err,result) => {
        if(err == null) {
            res.json(result)
        }
    })
})

app.get('/onibus/horarios', (req,res) => {
    let string = "select * from horarios"
    // res.json("Oi q q c qué, eu sou um back. mas não aquele q c ta pensando ")
    con.query(string,(err,result) => {
        if(err == null) {
            res.json(result)
        }
    })
})

app.get('/onibus/linhas', (req,res) => {
    let string = "select * from linhas"
    // res.json("Oi q q c qué, eu sou um back. mas não aquele q c ta pensando ")
    con.query(string,(err,result) => {
        if(err == null) {
            res.json(result)
        }
    })
})

app.get('/onibus/mot_linhas', (req,res) => {
    let string = "select * from mot_linhas"
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


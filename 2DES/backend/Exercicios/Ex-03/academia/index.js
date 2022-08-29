const express = require("express")
const cors = require("cors")
const mysql = require("mysql")

const app = express()

//Cria a conexão com o Banco de dados
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'academia'
});

app.use(cors())

app.get('/academia/alunos', (req,res) => {
    let string = "select * from vw_alunos"
    // res.json("Oi q q c qué, eu sou um back. mas não aquele q c ta pensando ")
    con.query(string,(err,result) => {
        if(err == null) {
            res.json(result)
        }
    })
})

app.get('/academia/aparelhos', (req,res) => {
    let string = "select * from aparelhos"
    // res.json("Oi q q c qué, eu sou um back. mas não aquele q c ta pensando ")
    con.query(string,(err,result) => {
        if(err == null) {
            res.json(result)
        }
    })
})

app.get('/academia/exercicios', (req,res) => {
    let string = "select * from exercicios"
    // res.json("Oi q q c qué, eu sou um back. mas não aquele q c ta pensando ")
    con.query(string,(err,result) => {
        if(err == null) {
            res.json(result)
        }
    })
})

app.get('/academia/fichas', (req,res) => {
    let string = "select * from fichas"
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


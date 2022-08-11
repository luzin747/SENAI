const express = require('express')
const mysql = require('mysql')
const app = express()

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database : 'pedidos'

})

app.use(express.json())

app.get('/PEDIDOS',(req, res) =>{
    let priNome = req.query.primeiro
    let sobrenome =req.query.sobrenome
    let endereco = req.query.endereco
    let telefones = req.query.Telefone
    let celular = req.query.Celular
    let string = `insert into clientes value(null,'${priNome}','${sobrenome}','${endereco}')`
    let string2 = `insert into telefones value(null,'${telefones}','${celular}'`

    con.query(string,string2,(err,result) => {
        if(err == null) {
            res.json("Dados Recebidos com Sucesso Estamos Enviando com Sucesso")
        }else {
            res.json("Dados Recebidos com Sucesso Mas Não enviei pro BD")

        }
    })
}) 

app.listen(3000,() => [
    console.log("Respondendo na porta 3000")
])
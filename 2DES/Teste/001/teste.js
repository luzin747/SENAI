const mysql = required('mysql');

const conDB = mysql.createConnection({
    'host': 'localhost',
    'user': 'root',
    'database': '/*[INSIRA AQUI]*/'
});

function listar/*[INSIRA AQUI]*/(req,res) {
     let query = 'SELECT * from /*[INSIRA AQUI]*/'

     conDB.query(query, (err, result) => {
         if(err == null) {
            res.json(result).status(200).end();
        }else{
            res.json(err).status(400).end();
        }
    })
};

function cadastrar/*[INSIRA AQUI]*/(req,res) {
     let query = `INSERT INTO /*[INSIRA AQUI]*/ VALUES (DEFAULT,'${req.body./*[INSIRA AQUI]*/}')`

     conDB.query(query, (err, result) => {
         if(err == null) {
            res.json(result).status(200).end();
        }else{
            res.json(err).status(400).end();
        }
    })
};

function excluir/*[INSIRA AQUI]*/(req,res) {
     let query = `DELETE FROM /*[INSIRA AQUI]*/ WHERE /*[INSIRA AQUI]*/ = '${req.body./*[INSIRA AQUI]*/}'`

     conDB.query(query, (err, result) => {
         if(err == null) {
            res.json(result).status(200).end();
        }else{
            res.json(err).status(400).end();
        }
    })
};

function editar/*[INSIRA AQUI]*/(req,res) {
     let query = `UPDATE /*[INSIRA AQUI]*/ SET /*[INSIRA AQUI]*/ = '${req.body./*[INSIRA AQUI]*/}'`

     conDB.query(query, (err, result) => {
         if(err == null) {
            res.json(result).status(200).end();
        }else{
            res.json(err).status(400).end();
        }
    })
};
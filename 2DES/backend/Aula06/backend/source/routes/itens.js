const express = require('express')
const router = express.Router()
//Vincularemos os controles com as rotas

const Item = require("../controllers/itensController");

router.get("/patrimonio/itens", Item.listarItens)
router.post("/patrimonio/itens", Item.criarItens)
router.delete("/patrimonio/itens", Item.excluirItens)


module.exports = router
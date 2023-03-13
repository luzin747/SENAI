const express = require('express');

const router = express.Router();

const Setor = require('../controller/setorController')
const Produto = require('../controller/produtoController')
const Vendedor = require('../controller/vendedorController')
const Vendas = require('../controller/vendasController')

router.post('/setor', Setor.create);
router.get('/setor', Setor.read);
router.get('/setor/:id', Setor.readOne);
router.post('/setor/criar_varios', Setor.createMany);

router.post('/produto', Produto.create);
router.get('/produto', Produto.read);
router.delete('/produto/:id_produto', Produto.deletar);


router.post('/vendedor', Vendedor.create);
router.get('/vendedor', Vendedor.read);
router.delete('/vendedor/:id_vendedor', Vendedor.deletar);
router.post('/vendedor/criar_varios', Vendedor.createMany);

router.post('/vendas', Vendas.create);
router.get('/vendas', Vendas.read);
router.get('/vendas/:id_venda', Vendas.readOneVendas);
router.post('/vendas/detalhes', Vendas.createDetalhesVendas);


    module.exports = router;
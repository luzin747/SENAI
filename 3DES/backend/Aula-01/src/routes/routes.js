const express = require('express');

const router = express.Router();

const Funcionarios = require('../controller/funcionarios')

router.get('/funcionarios', Funcionarios.read);
router.get('/funcionarios/:id', Funcionarios.readFunc);
router.post('/funcionarios', Funcionarios.create);
router.put('/funcionarios', Funcionarios.update);
router.delete('/funcionarios', Funcionarios.remove);

module.exports = router
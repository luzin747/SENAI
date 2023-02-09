const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let vendas = await prisma.vendas.create({
        data: req.body
    });

    res.status(200).json(vendas).end();
}

const read = async (req, res) => {
    let vendas = await prisma.vendas.findMany(
        {
            select: {
                id_venda:true,
                data: true,
                vendedor_id: true,
                detalhes: true,
        }
    });
        

    res.status(200).json(vendas).end();
}

const createDetalhesVendas = async (req, res) => {
    let detalhes = await prisma.detalhes.create({
        data: req.body
    });

    res.status(200).json(detalhes).end();
}

const createMany = async (req, res) => { 
    let vendas = await prisma.vendas.createMany({
        data: [
            { nome: 'Doces', comissao: 5 },
            { nome: 'Higiene', comissao: 6 }, // Duplicate unique key!
           
          ],
          skipDuplicates: true, // Skip 'Bobo'
    });

    res.status(200).json(vendas).end();

}

const readOne = async (req, res) => {
    let vendas = await prisma.vendas.findUnique({
        where: {
            id:Number(req.params.id)
        },
        select: {
            nome: true,
            comissao:true,
            produto: true,
            vendedor: true
        }
    });
        
    res.status(200).json(vendas).end();
}

const readOneVendas = async (req, res) => {
    let vendas = await prisma.vendas.findUnique({
        where: {
            id_venda:Number(req.params.id_venda)
        },
        select: {
            id_venda: true,
            data: true,
            vendedor_id:true,
            detalhes: true
        }
    });
        
    res.status(200).json(vendas).end();
}

module.exports = {
    create,
    read,
    readOne,
    createMany,
    createDetalhesVendas,
    readOneVendas
}
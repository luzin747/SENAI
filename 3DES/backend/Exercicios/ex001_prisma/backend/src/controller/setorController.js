const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let setors = await prisma.setor.create({
        data: req.body
    });

    res.status(200).json(setors).end();
}

const read = async (req, res) => {
    let setor = await prisma.setor.findMany();

    res.status(200).json(setor).end();
}
const createMany = async (req, res) => { 
    let setor = await prisma.setor.createMany({
        data: [
            { nome: 'Doces', comissao: 5 },
            { nome: 'Higiene', comissao: 6 }, // Duplicate unique key!
           
          ],
          skipDuplicates: true, // Skip 'Bobo'
    });

    res.status(200).json(setor).end();

}

const readOne = async (req, res) => {
    let setor = await prisma.setor.findUnique({
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
        
    res.status(200).json(setor).end();
}

module.exports = {
    create,
    read,
    readOne,
    createMany
}
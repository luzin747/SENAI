const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let vendedor = await prisma.vendedor.create({
        data: req.body
    });

    res.status(200).json(vendedor).end();
}

const createMany = async (req, res) => { 
    let vendedor = await prisma.vendedor.createMany({
        data: [
            { nome: 'Fulano da Silva', salario: 1650, setor_vendedor: 4 },
            { nome: 'Silva do Fulano', salario: 1950, setor_vendedor: 1 }, // Duplicate unique key!
            { nome: 'Ciclano do Fulano', salario: 2550, setor_vendedor: 2 }, // Duplicate unique key!
           
          ],
          skipDuplicates: true, // Skip 'Bobo'
    });

    res.status(200).json(vendedor).end();

}

const read = async (req, res) => {
    let vendedor = await prisma.vendedor.findMany();

    res.status(200).json(vendedor).end();
}

const deletar = async (req, res) => {
    let vendedor = await prisma.vendedor.delete({
        where: {
            id_vendedor: Number(req.params.id_vendedor)
        },
    });

    res.status(200).json(vendedor).end();
}

module.exports = {
    create,
    read,
    deletar,
    createMany
}
-- CreateTable
CREATE TABLE `Setor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `comissao` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produtos` (
    `id_produto` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `setor_produto` INTEGER NOT NULL,

    PRIMARY KEY (`id_produto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vendedor` (
    `id_vendedor` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `salario` DOUBLE NOT NULL,
    `setor_vendedor` INTEGER NOT NULL,

    PRIMARY KEY (`id_vendedor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vendas` (
    `id_venda` INTEGER NOT NULL AUTO_INCREMENT,
    `data` VARCHAR(191) NOT NULL,
    `vendedor_id` INTEGER NOT NULL,

    PRIMARY KEY (`id_venda`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Detalhes` (
    `id_detalhes` INTEGER NOT NULL AUTO_INCREMENT,
    `id_produto` INTEGER NOT NULL,
    `id_venda` INTEGER NOT NULL,
    `quantidade` INTEGER NOT NULL,

    PRIMARY KEY (`id_detalhes`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Produtos` ADD CONSTRAINT `Produtos_setor_produto_fkey` FOREIGN KEY (`setor_produto`) REFERENCES `Setor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vendedor` ADD CONSTRAINT `Vendedor_setor_vendedor_fkey` FOREIGN KEY (`setor_vendedor`) REFERENCES `Setor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vendas` ADD CONSTRAINT `Vendas_vendedor_id_fkey` FOREIGN KEY (`vendedor_id`) REFERENCES `Vendedor`(`id_vendedor`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Detalhes` ADD CONSTRAINT `Detalhes_id_venda_fkey` FOREIGN KEY (`id_venda`) REFERENCES `Vendas`(`id_venda`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Detalhes` ADD CONSTRAINT `Detalhes_id_produto_fkey` FOREIGN KEY (`id_produto`) REFERENCES `Produtos`(`id_produto`) ON DELETE RESTRICT ON UPDATE CASCADE;

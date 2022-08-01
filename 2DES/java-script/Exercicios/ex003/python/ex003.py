#Exercicio 03 - Validador de Placa

#vCrie uma função que valide se um valor passado como parâmetro é uma placa de 
#automóvel ex: validarPlaca(placa) a função deve retornar um valor boolean, “true” se for uma 
#placa válida e “false” se não for válida.
#OBS: dev validar tanto as placas antigas ex: ABC1212 como as novas ABC1B1

print("***** Exercicio 03 - Validador de Placa ****")

import os 
import time

placa = []
nomeCliente = []

while True:

    print("************** Escolha uma Opção **************")
    print('[1] - Cadastrar Placa')
    print('[2] - Procurar Placa')
    print('[3] - Listar Placas')
    print('[4] - Validar Placa')
    print('[5] - Sair')

    escolha = int(input('\nEscolha: '))

    if escolha == 1:
        os.system("cls")

        nome = str(input('Nome do Cliente:')).strip()
        inserirPlaca = str(input('Insira a Placa: '))
    
        if len(inserirPlaca) <= 7:
            placa.append(inserirPlaca)
            nomeCliente.append(nome)
            print(f'Cliente {nome}\nPlaca: \033[4;31m{inserirPlaca}\033[m Cadastrada')
            time.sleep(2)
            os.system("cls")
        else:
            print('Placa Errada - Insira Novamente')
        


    if escolha == 2:
        os.system("cls")
        print('********** Procurar Placa ************')
        procurarPlaca = str(input('Insira a Placa:'))
        os.system("cls")

        for placaInserida in placa:

            if placaInserida == procurarPlaca:
                print(f'Cliente: {nome} \nPlaca: {placa} \n')
            else:
                print('\033[4;33mPlaca Não Encontrada\033[m')
    
    if escolha == 3:
        print('****** Todas As Placas Cadastradas ******')
        if len(placa) != 0:
            print(f'Cliente: {nome} Placas: {placa} \n')
        else:
            print(' \033[4;35mNão Há Nenhuma Placa Cadastrada\033[m')
    
    sair = str(input('Deseja Continuar?: ')).upper().split()[0]
    os.system('cls')
    if sair == 'N':
        print('Obrigado Por Usar Os Sistemas Zennor alta Qualidade - ADEUS')
        



        

        
        

            


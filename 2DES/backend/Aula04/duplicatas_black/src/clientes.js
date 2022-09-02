const clientes = (Lista) =>{

    Lista.forEach(el => {

        el.telefones = [];

        let tel = {};

        tel.tipo = el.tipo;

        tel.numero = el.telefone;

        el.telefones.push(tel);

        delete el.tipo;

        delete el.telefone;

    });



    let liAux = [];

    let lip = 0;

    liAux.push(Lista[lip]);



    for(i = 1 ; i < Lista.length; i++) {

     

        if(Lista[i].cod_cli == Lista[i-1].cod_cli){

            let tel = {};

            tel.tipo = Lista[i].telefones[0].tipo;

            tel.numero = Lista[i].telefones[0].numero;

         liAux[lip].telefones.push(tel);

        } else{

         liAux.push(Lista[i]);

            lip++;

        }

    }

    return liAux;

}



module.exports = {

    clientes

}
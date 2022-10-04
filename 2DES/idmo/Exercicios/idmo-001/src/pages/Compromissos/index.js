import { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import Comprimissos from '../../components/Item';
import style from '../../components/Item/style';


export default function Comprimisso({ navigation }) {
    const datas = [
        {
            "img": "https://raw.githubusercontent.com/wellifabio/senai2022/master/2des/indmo/aula05/Exerc%C3%ADcio/assets/escola.png",
            "id":1,
            "tipo":2,
            "nome":"Escola",
            "horario":"07:30 - 11:30"
        },
        {
            "img":"https://raw.githubusercontent.com/wellifabio/senai2022/master/2des/indmo/aula05/Exerc%C3%ADcio/assets/medico.png",
            "id":2,
            "tipo":1,
            "nome":"Consulta Médica",
            "horario":"13:00 - 13:40"
        },
        {
            "img":"https://raw.githubusercontent.com/wellifabio/senai2022/master/2des/indmo/aula05/Exerc%C3%ADcio/assets/mercado.png",
            "id":3,
            "tipo":3,
            "nome":"Ir ao mercado",
            "horario":"16:30 - 17:00"
        },
        {
            "img":"https://raw.githubusercontent.com/wellifabio/senai2022/master/2des/indmo/aula05/Exerc%C3%ADcio/assets/cinema.png",
            "id":4,
            "tipo":4,
            "nome":"Ir ao cinema",
            "horario":"20:00 - 22:30"
        },
    ]




    const funcao = () => {
        console.log("um texto teste")
    }
    
    return (
        <View style={style.body}>
            {
                datas.map((item, indice) => {
                    
                    return(

                        <Comprimissos value={item} key={indice} onPress={() => { navigation.navigate("Descricao", {'id':item.id}) }}/>
                    )

                })


            }
        </View>
    )
}


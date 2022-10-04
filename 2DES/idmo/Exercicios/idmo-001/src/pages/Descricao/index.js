import { View, Text, Image, StyleSheet } from 'react-native';

import styles from './style'

export default function Descricao({ route }) {
    var { id } = route.params;

    const datas = [
        {
            "id_compromisso": 1,
            "descricao": "- Entrega da Atividade.\n- Matéria Nova.",
            "observacoes": "",
        },
        {
            "id_compromisso": 4,
            "descricao": "",
            "observacoes": "Não esquecer a carteirinha !!!",
        },
        {
            "id_compromisso": 3,
            "descricao": "- Pão.\n- Presunto.\n- Queijo.",
            "observacoes": "Ver se o sabão está em promoção e levar uma caixa.",
        },
        {
            "id_compromisso": 2,
            "descricao": "Consulta de retorno.",
            "observacoes": "Levar os exames.",
        },
    ]


    var descricao;
    var observacao;

    datas.forEach(item => {
        if (item.id_compromisso == id) {
            descricao = item.descricao;
            observacao = item.observacoes;
        }
    })

    return (
        <View>
            {

                <View style={styles.container}>
                    <Text style={styles.text}>Descrição:</Text>
                    <Text style={styles.text2}>{descricao}</Text>
                    <Text style={styles.text}> Observações:</Text>
                    <Text style={styles.text2}>{observacao}</Text>
                    <button style={styles.btn}>Finalizar Compromisso </button>
                </View>
            }

        </View>
    )
}

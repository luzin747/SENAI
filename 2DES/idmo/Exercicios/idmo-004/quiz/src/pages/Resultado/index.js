import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput,Button } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function Home({ navigation }) {
    const [checked, setChecked] = React.useState('first');

    return (

        <View styles={styles.container}>

            <Text style={styles.title}>Resultado das Questões do Renas</Text>

            <Text>Pontuação: </Text>

           
            
            <Button style={styles.button} title="Voltar a Primeira Questão" onPress={() => {navigation.navigate('Pergunta 01', checked)}}/>
        </View>

    )

}

const styles = StyleSheet.create({
    // container: {
    // },
    teste: {
        backgroundColor: 'white'
        
    },
    input: {
        width: "100%",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 5,
        shadowColor: "#7242F5",
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 1,
        marginBottom: 20
    },
    title: {
        textAlign: 'center',
        fontWeight: 700
    },
    button: {
        marginTop: '90px'
    }
})

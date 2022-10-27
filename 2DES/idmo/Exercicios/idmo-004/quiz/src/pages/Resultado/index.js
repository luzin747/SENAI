import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput,Button } from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Home({ navigation }) {
    const [value , setValue] = React.useState('Clique no Botão Abaixo');


    var data 
    
    var resp = []

    var acertos = 0

    const ler = async() => {
        try{
            const val = await AsyncStorage.getItem('Bibli')
            var teste = val != null ? JSON.parse(val) : null;
            data = teste

            data.forEach((e , i) => {

                console.log(i + e)

                if(e == 'C') {
                    acertos += 1
                    setValue(acertos)
                }

                console.log(acertos)

            })
        }catch(err) {
            console.log(err)
        }
    }

    // console.log(arr)

    return (

        <View styles={styles.container}>

            <Text style={styles.title}>Resultado das Questões do Renas</Text>

            <Text>Pontuação: {value} </Text>

            <Button style={styles.button} title="Ver Result" onPress={() => ler()}/>

            
            {/* <Button style={styles.button} title="Voltar a Primeira Questão" onPress={() => {navigation.navigate('Pergunta 01', checked)}}/> */}
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
        marginTop: '90px',
        marginBottom: 39

    }
})

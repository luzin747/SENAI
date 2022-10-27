import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput,Button } from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation }) {
    const [checked, setChecked] = React.useState('first');

    var data 
    const salvar = async () => {
        try{
            const val = await AsyncStorage.getItem('Bibli')
            var teste = val  != null ? JSON.parse(val) : null;
            data = teste
            console.log(data)
            data.push(checked)
            AsyncStorage.setItem('Bibli', JSON.stringify(data))
        }catch(err) {
            console.log(err)
        }
    }

    return (

        <View styles={styles.container}>

            <Text>2 - Qual o Automóvel do Rennye?</Text>

            <RadioButton.Item styles={styles.teste}
                label="Carro"
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
            />

            <RadioButton.Item
                label="Dinossauro"
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
            />

            <RadioButton.Item
                label="Cachaça 51"
                value="second"
                status={checked === 'C' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('C')}
            />

            <RadioButton.Item
                label="ele vem nadando"
                value="second"
                status={checked === 'quarteiro' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('quarteiro')}
            />
            
            <Button title="Proxima question" onPress={() => {navigation.navigate('Pergunta 03', salvar())}}/>
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
})

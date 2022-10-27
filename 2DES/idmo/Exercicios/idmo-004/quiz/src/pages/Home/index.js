import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput,Button } from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Home({ navigation }) {
    const [checked, setChecked] = React.useState('first');

    var val = []
    const ler = async () => {
        try {
          val.push(checked)
          const jsonValue = JSON.stringify(val)
          await AsyncStorage.setItem('Bibli', jsonValue)

          console.log(val)
        } catch(err) {
          console.log(err)
        }
      }

    return (

        <View styles={styles.container}>

            <Text>1 - Qual o substantivo que Rennye mais Utiliza?</Text>

            <RadioButton.Item styles={styles.teste}
                label="Fulano"
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
            />

            <RadioButton.Item
                label="Beltrano"
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
            />

            <RadioButton.Item
                label="Prova na Sexta"
                value="second"
                status={checked === 'C' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('C')}
            />

            <RadioButton.Item
                label="Ciclano"
                value="second"
                status={checked === 'quarteiro' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('quarteiro')}
            />
            
            <Button title="Proxima question" onPress={() => {navigation.navigate('Pergunta 02', ler())}}/>
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

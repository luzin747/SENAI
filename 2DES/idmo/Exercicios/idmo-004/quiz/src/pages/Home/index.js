import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput,Button } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function Home({ navigation }) {
    const [checked, setChecked] = React.useState('first');

    const ler = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@storage_Key', jsonValue)

          console.log(checked)
        } catch (e) {
          // saving error
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
                status={checked === 'teceiro' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('teceiro')}
            />

            <RadioButton.Item
                label="Ciclano"
                value="second"
                status={checked === 'quarteiro' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('quarteiro')}
            />
            
            <Button title="Proxima question" onPress={() => {navigation.navigate('Pergunta 02', checked)}}/>
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

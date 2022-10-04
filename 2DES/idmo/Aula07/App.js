import { useState } from 'react'
import { StyleSheet, Text, View , TextInput, Button} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {
  // const [info, setInfo] = useState("")
  const [lida, setLida] = useState("")

  const [nomeFunc, setNomeFunc] = useState("")
  const [cargoFunc, setCargoFunc] = useState("")
  const [salarioFunc, setSalarioFunc] = useState("")

  const salvar = async () => {
    try {
      let infor = {
        "nome": nomeFunc,
        "cargo":cargoFunc,
        "salario": salarioFunc 
      }

      const jsonValue = JSON.stringify(infor)

      await AsyncStorage.setItem("data", jsonValue)
      setNomeFunc("")
      setCargoFunc("")
      setSalarioFunc("")

      
      
    }
    catch(err) {
      console.log(err)
    }
  }

  const ler = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('data')
    
      setLida(jsonValue)
    
      console.log(jsonValue)
    }
    catch(err) {
      console.log(err)
    }
  }


  return (
    <View style={styles.container}>
      {/* <TextInput value={info} onChangeText={(val) => { setInfo(val) }}/> */}
      {/* <Button title="Salvar" onPress={() => { salvar() }}/>
      <Button title="Ler" onPress={() => { ler() }}/> */}

      <TextInput style={styles.inpText}  placeholder="Nome" value={nomeFunc} onChangeText={(val) => { setNomeFunc(val) }}/>
      <TextInput style={styles.inpText} placeholder="Cargo"value={cargoFunc} onChangeText={(val) => { setCargoFunc(val) }}/>
      <TextInput style={styles.inpText} placeholder="Salário"value={salarioFunc} onChangeText={(val) => { setSalarioFunc(val) }}/>

      <Button style={styles.buttons} title="Cadastrar" onPress={() => { salvar() }}/>
      <Button style={styles.buttons} title="Listar" onPress={() => { ler() }}/>

      <Text>{lida}</Text>
    </View>

    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  inpText: {
    width: 336,
    margin: 5,
    padding: 5,
    border: "1px solid black",
    
  },
  buttons: {
    marginTop: 20,
  }
});

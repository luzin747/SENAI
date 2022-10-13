import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {
  const [img, setImg] = useState("")
  const [titulo, setTitulo] = useState("")
  const [ler, setLer] = useState("")



  const mostrar = async () => {
    try {
       const car = await AsyncStorage.getItem("data")
        
       car.map(e => {

       })
        

    } catch (err) {
        console.log(err)
    }
} 

return(
    <View>
       <Text>{ler}</Text>
    </View> 
)


}


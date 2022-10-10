import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {
  const [img, setImg] = useState("")
  const [nome, setNome] = useState("")
  const [descricao, setDescricao] = useState("")

  const pizzas = [
    {
      "img": "https://img.cppng.com/download/2020-06/9-pizza-png-image.png",
      "titulo": "Peperoni",
      "descricao": "Perfection owww yeeee",

    },
    {
      "img": "https://down.imgspng.com/download/0720/pizza_PNG7136.png",
      "titulo": "Delicia",
      "descricao": "Uma Mistura Mágica de Sabores ",

    },
    {
      "img": "http://www.diadepizza.com.br/uploads/pizzas/magnifica-1605572322.png",
      "titulo": "Quarteirão",
      "descricao": "Bem Mais Gostosa na Quarta-Feira",

    }


  ]



  const adicionar = async (i) => {
    try {
      console.log(pizzas[i])
      await AsyncStorage.setItem("data", JSON.stringify({ img, nome, descricao }))
      

    } catch (err) {
      console.log(err)
    }
  }
  const ler = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('data')
      var valores = jsonValue != null ? JSON.parse(jsonValue) : null;
      setLida(
        <View>
          <Text>Nome: {valores.nome}</Text>
          <Text>Cargo: {valores.cargo}</Text>
          <Text>Salário: {valores.sal}</Text>
        </View>
      )
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <View >

      <View style={styles.contButton}>
          <Text style={styles.titleLoja}>Pizzaria Renas</Text>

          <TouchableOpacity>
          <Image style={styles.car} source={"https://imagensemoldes.com.br/wp-content/uploads/2020/07/%C3%8Dcone-Carrinho-de-Compras-PNG.png"} />
          </TouchableOpacity>
      </View>




      {
        pizzas.map((e,i) => {

          return (
            <View style={styles.containerProdutos}>
              <View style={styles.contDescrPizza}>

                <Image style={styles.image} source={e.img} />

                <View style={styles.contDescricao}>
                  <Text style={styles.title}>{e.titulo}</Text>
                  <Text style={styles.descri}>{e.descricao}</Text>
                </View>




              </View>
              <TouchableOpacity onPress={() => {adicionar(i) }}>

                <Image style={styles.add} source={"https://cdn-icons-png.flaticon.com/512/60/60740.png"} />
              </TouchableOpacity>
            </View>
          )
        })
      }



      



      {/* <TextInput placeholder='Nome' style={{borderBottomColor: "#000", borderBottomWidth: 1}} value={nome} onChangeText={(value) => { setNome(value) }} />
      <TextInput placeholder='Cargo' style={{borderBottomColor: "#000", borderBottomWidth: 1}} value={cargo} onChangeText={(value) => { setCargo(value) }} />
      <TextInput placeholder='Salário' style={{borderBottomColor: "#000", borderBottomWidth: 1}} value={sal} onChangeText={(value) => { setSal(value) }} />
      <Button title='Salvar' onPress={() => { salvar() }} />
      <Button title='Ler' onPress={() => { ler() }} /> */}
      {/* <View>{lida}</View> */}
    </View>

  );
}
const styles = StyleSheet.create({
  containerProdutos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0px 0px 5px black',
    margin: 10,
    borderRadius: 10,

  },
  image: {
    width: 80,
    height: 80
  },
  add: {
    width: 40,
    height: 40,
    // marginRight: '20%'
    marginLeft: '-50px',
  },
  title: {
    fontWeight: 700,
  },
  contDescrPizza: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contDescricao: {
    margin: 15,
    width: 170,
  },
  button: {
    width: 220,
    height: 10,
  },
  contButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    
  },
  car: {
    width: 45,
    height: 40
  },
  titleLoja: {
    fontSize: 20,
    fontWeight: 700,
  }
});
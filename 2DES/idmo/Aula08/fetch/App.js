import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput, Button, Image} from 'react-native';
export default function App() {
    
  useEffect(() =>{
    fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(res => { return res.json()})
    .then(data => {
      data = data.results;
      setPosts(data)
    })
  },[posts]);
  useEffect(() =>{
  }, []);
  const [posts, setPosts] = useState([]);
  return (
    <View style={styles.container}>
       {
        posts.map((post, index) =>{
          return(
            <View style={styles.container} key={index}>
              <Text style={styles.text}>{post.name}</Text>
            </View>
          )
        })
       }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 10,
    height: 10
  }
});

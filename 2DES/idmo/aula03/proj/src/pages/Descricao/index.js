import { View, Text , Image, StyleSheet} from 'react-native';
export default function Descricao({ route }) {
    var {descricao} = route.params;
    return(
        <View>
            <Image style={styles.tinyLogo} source={{uri:descricao.img}}/>
            <Text style={styles.title1}>Endereço : {descricao.end}</Text>
            <Text style={styles.title2}>Telefone : {descricao.tell}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
tinyLogo: {
    width: "90%",
    height: "350px",
    marginLeft: "20px",
    marginTop: "25px",
    borderRadius: "10px"
},
title1: {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "12pt",
    fontWeight: "600",
    
},
title2: {
    textAlign: "center",
}
});
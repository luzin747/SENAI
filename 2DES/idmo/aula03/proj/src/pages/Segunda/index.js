import { View, Text, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Segunda({ navigation }) {
    const produtos = [
        {
            "nomeprod": "Restaurante Ratatouille",
            "notas": 4.6,
            "descricao": {
                "img": "https://10619-2.s.cdn12.com/rests/original/105_509504357.jpg",
                "end": "Rua Dos Ratos 4002-8922",
                "tell": "(11)3289-6176"
                // "marca":"Ype",
                // "sabor":"Maça"
            }
        },
        {
            "nomeprod": "Restaurante Chique",
            "notas": 4.9,
            "descricao": {
                "img": "https://www.viajali.com.br/wp-content/uploads/2018/08/restaurantes-brasilia-14.jpg",
                "end": "RUA DOS PINHEIROS",
                "tell": "(11)3289-6176"

                // "marca":"Assolam",
                // "sabor":"Morte"
            }
        },
        {
            "nomeprod": "Restaurante Ceral Radical",
            "notas": 3.9,
            "descricao": {
                "img": "https://www.daninoce.com.br/wp-content/uploads/2018/03/os-melhores-restaurantes-de-moscou-dani-noce-imagem-destaque.jpg",
                "end": "RUA TREZE DE MAIO",
                "tell": "(11)3289-6176"

                // "marca":"Ype",
                // "sabor":"Coco"
            }
        },
        {
            "nomeprod": "Restaurante Julio César",
            "notas": 4.9,
            "descricao": {
                "img": "https://www.viajali.com.br/wp-content/uploads/2018/08/restaurantes-brasilia-14.jpg",
                "end": "RUA DOS PINHEIROS",
                "tell": "(11)3289-6176"

                // "marca":"Assolam",
                // "sabor":"Morte"
            }
        },
    ];
    return (
        <View style={conts.body}>
            {
                produtos.map((produto, indice) => {
                    return (
                        <TouchableOpacity style={conts.container} onPress={() => { navigation.navigate("Descricao", { "descricao": produto.descricao }) }}>
                            <View style={styles.restauras}>
                                <Text style={styles.subtitle}>{produto.nomeprod}</Text>
                                <View style={conts.contsubs}>
                                    <Text>Notas: {produto.notas} </Text>

                                    <View style={conts.contImage}>
                                        <Image style={styles.imageStar} source={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/800px-Estrella_amarilla.png"} /><Image style={styles.imageStar} source={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/800px-Estrella_amarilla.png"} /><Image style={styles.imageStar} source={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/800px-Estrella_amarilla.png"} />
                                    </View>
                                </View>


                            </View>
                        </TouchableOpacity>
                    )
                })


            }
        </View>
    )
}

const conts = StyleSheet.create({
    body: {
        backgroundColor: "#f13e3e",
        height: "100%",
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25,

    },
    contsubs: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    contImage: {
        display: "flex",
        flexDirection: "row",
    }
})

const styles = StyleSheet.create({
    restauras: {
        display: "flex",
        width: 300,
        height: "auto",
        padding: 10,
        backgroundColor: "white",
        // marginBottom: ,
        borderRadius: 10,
    },
    imageStar: {
        width: 17,
        height: 17,
    },
    subtitle: {
        fontSize: 19,
        fontWeight: 600,
        // textAlign: "center",
    }
});
import {View, Text, StyleSheet, Image, TextInput,Button, Touchable, TouchableOpacity} from 'react-native'

export default function App() {

  const funcionarios = [
    
    {
      "img":require('./assets/img/Exericios-img/userM.png'),
       "nome":"Fulano",
       "cargo" : "Vendedor",
      //  "backFundo": "#4ABC96"     
    },
    {
      "img":require('./assets/img/Exericios-img/userF.png'),
       "nome":"Ciclana",
       "cargo" : "Recepcionista",
      //  "backFundo": "#4ABC96"     
  
    },
    // {
    //   "img":require('./assets/img/Exericios-img/userM.png'),
    //    "nome":"Beltrano",
    //    "cargo" : "Vendedor"     
    // },
    {
      "img":require('./assets/img/Exericios-img/userJ.png'),
       "nome":"Toma Sua C",
       "cargo" : "Developer",
      //  "backFundo": "#4ABC96"     
  
    }

  ]

  




  // const usuarios = [
  //   {
  //     "nome":"Fulano",
  //     "matriculas":"123457"
  //   },
  //   {
  //     "nome":"Beltrano",
  //     "matriculas":"123457"

  //   },
  //   {
  //     "nome":"Ciclano",
  //     "matriculas":"123457"

  //   }
  // ]


  // const imgGatin = require('./assets/img/gatin.png')
  // const lixeira = require('./assets/img/lixeira-icon.png')

  // const userImgM = require('./assets/img/Exericios-img/userM.png')
  // const userImgF = require('./assets/img/Exericios-img/UserF.png')


  return(
    funcionarios.map(func =>{
      return (
        
        
          <View style={style.container} coresFundo={style.fundo1}>
            <Image source={func.img} style={style.img}/>
            <Text style={style.nome}>{`${func.nome}`}</Text>
            <Text style={style.Cargo}>{`${func.cargo}`}</Text>
          </View>
        
  
      )
    })
    
  


    // <View style={style.container}>
    //   <Text>Bem Vindo</Text>
    //   <View style={style.primeira}>
    //     <Text>Minha Primeira Mensagem</Text>
    //     <TextInput style={style.input} placeholder="Email"/>
    //   <Button title='Cadastrar'></Button>
    //   <TouchableOpacity style={style.btnExclui}>
    //     <Image style={{width: '32px', height: '32px',}} source={lixeira}/>
    //   <Text>Apagar Registro</Text>
    //   </TouchableOpacity>
    //   {
    //     usuarios.map(usuario => {
    //       return (
    //         // <View>
    //         //   <Text>{usuario.nome}</Text>
    //         //   <Text>{usuario.matricula}</Text>
    //         // </View>

    //         <TouchableOpacity style={style.btnExclui}>
    //           <Text>{`${usuario.matriculas} - ${usuario.nome}`}</Text>
    //         </TouchableOpacity>
    //       )
    //     })
    //   }

    //   </View>
    //   <View style={style.segunda}>
    //     <Text>Minha Segunda Mensagem</Text>
    //     <Image style={style.imgGatin} source={imgGatin}/>
    //     <Image style={style.imgGatin} source={{uri:'https://wl-incrivel.cf.tsp.li/resize/728x/jpg/6f4/4f2/ba70775bf08ddf019f8a24054b.jpg'}}/>
    //   </View>
    // </View>

    
  )
}

const coresFundo = StyleSheet.create ({
  fundo1: {
    backgroundColor: '#4ABC96'
  }
})

const style = StyleSheet.create ( {

  container: {
    width: '20vw',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(0.0.0.5)',
    borderRadius: '35px',
    margin: '20px',
    marginLeft: '40%',
    padding: '30px',
    
  },

  img : {
    width: '50%',
    height: '160px',
    ObjectFit : 'cover'
  },
  nome : {
    fontSize: '15pt',
  }

})




// const style = StyleSheet.create ( {
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },

//   primeira: {
//     flex: 1,
//     backgroundColor: '#F2D3E1'
//   },
  
//   segunda: {
//     flex: 2,
//     backgroundColor: '#E2f5c8'
//   },

//   imgGatin: {
//     width: '200px',
//     height: '200px'
//   },
//   input : {
//     borderBottomWidth: '1px',
//     borderBottomColor: 'gray',
//     padding: '10px'

//   },
//   btnExclui: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#FCFA6',
//     border: '2px solid #adffa6',
//     borderRadius: '10px',
//     marginTop: '20px'
//   }


// })
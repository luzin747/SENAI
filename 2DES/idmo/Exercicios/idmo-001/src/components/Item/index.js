import {TouchableOpacity, Text, View, Image} from 'react-native';
import style from './style';

import styles from './style';

export default function Compromissos(props) {
    const {value, onPress} = props;

    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress()}>
            
            <View style={style.contImage}>
            <Image style={style.imageStar} source={value.img}/>
            </View>
            
            <View style={styles.restauras}>
                <Text style={styles.subtitle}>{value.nome}</Text>
                    <View style={styles.contsubs}>
                    <Text style={styles.subsub}>Horario: {value.horario} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
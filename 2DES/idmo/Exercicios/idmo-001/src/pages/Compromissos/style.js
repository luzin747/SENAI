import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body: {
        backgroundColor: "#3A33A",
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
    },
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
})


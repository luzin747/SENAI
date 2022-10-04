import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body: {
        backgroundColor: "#3A3A3A",
        height: "100%",
    },
    container: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 25,

    },
    contsubs: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    contImage: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 100,

    },
    restauras: {
        display: "flex",
        width: 300,
        height: "auto",
        padding: 10,
        // backgroundColor: "white",
        // marginBottom: ,
        borderRadius: 10,
    },
    imageStar: {
        width: 45,
        height: 45,
        
    },
    subtitle: {
        color: "#fff",
        fontSize: 19,
        fontWeight: 600,
        // textAlign: "center",
    },
    subsub: {
        color: "#fff",
        borderBottom: "1px",
    }
})


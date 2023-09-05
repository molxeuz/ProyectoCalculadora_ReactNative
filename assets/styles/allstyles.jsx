import { StyleSheet } from "react-native";

const general_container = StyleSheet.create({
    container: {
      flex: 2,
      borderRadius: 10,
      padding: '20px',
      margin: 20,
      borderWidth: 5,
      backgroundColor: 'lightgray',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        color: 'black',
        margin: '10px',
        fontWeight: 'bold',
        fontSize: '40px',
    },
    description: {
        color: 'black',
        margin: '10px',
        fontWeight: 'bold',
        fontSize: '20px',
    },
    result: {
        color: 'black',
        margin: '10px',
        fontWeight: 'bold',
        fontSize: '30px',
        marginTop: '-10px'
    },
});

export { general_container}
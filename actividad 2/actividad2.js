import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
    return ( <
        View style = { styles.container } >
        <
        Text > Actividad 3 < /Text> <
        StatusBar style = "auto" / >
        <
        Button title = "Click here"
        onPress = { consulta }
        /> < /
        View >
    );
}

const url = 'https://calculadora-server.herokuapp.com/states-control';

const consulta = () => {
    const accountNumber = parseInt(prompt('Ingresa el numero de cuenta : '))
    const name = String(prompt('Ingresa tu nombre : '))
    const age = parseInt(prompt('Ingresa tu edad : '))

    fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                accountNumber,
                name,
                age
            }),
        })
        .then(response => response.json())
        .then(data => console.log(data));
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
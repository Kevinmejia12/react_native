import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-web';


export default function App() {

    let [students, setStudents] = useState(null)

    useEffect(() => {
        fetch("https://calculadora-server.herokuapp.com/alumns")
            .then(response => response.json())
            .then(data => setStudents(data))
    }, [])

    return ( <
        View style = { styles.container } >
        <
        FlatList data = { students }
        renderItem = {
            (student) => {
                return ( <
                    View style = { styles.listItem } >
                    <
                    Text > { student.item.name } < /Text> <
                    /View>
                )
            }
        }
        /> <
        /View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 16,
        paddingTop: 100,
    },
    listItem: {
        backgroundColor: "orange",
        borderWidth: 1,
        borderColor: "#333",
        padding: 25,
        color: 'white'
    },
});
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FlatList } from 'react-native-web';

var url = "https://calculadora-server.herokuapp.com/alumns"

export default function App() {

    let [students, setStudents] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setStudents(data))
    }, [])

    return ( <
        View style = { styles.container } >
        <
        Button title = "Crear registro"
        onPress = { createRegister }
        /> <
        FlatList data = { students }
        renderItem = {
            (student) => {
                return ( <
                    View style = { styles.listItem } >
                    <
                    Text > { student.item.accountNumber + " - " + student.item.name } < /Text> <
                    /View>
                )
            }
        }
        /> <
        /View>
    );
}

const createRegister = () => {
    const accountNumber = parseInt(prompt("Numero de cuenta : "))
    const phone = parseInt(prompt("Numero de telefono : "))
    const hobby = String(prompt("Pasatiempo : "))
    const favoriteFood = String(prompt("Comida favorita : "))
    const bornCity = String(prompt("Ciudad de nacimiento : "))

    fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                accountNumber,
                phone,
                hobby,
                favoriteFood,
                bornCity
            })
        })
        .then(response => response.json())
        .then(data => console.log(data));
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 16,
        paddingTop: 100,
    },
    listItem: {
        borderWidth: 1,
        borderColor: "#333",
        padding: 25,
        color: 'dark',
        Text: {
            color: 'red'
        }
    },
});
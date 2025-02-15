import { View, Text, StyleSheet, Alert, TextInput} from "react-native"

import { useState } from "react"
import { Button } from "../components/button"
import { Input } from "../components/input"

export default function Index(){

    const [name, setName] = useState("")
    
    function mensage(){
        Alert.alert(`Ola, ${name}`)
    }

    function onChangeText(text: string){
        console.log(text)
        setName(text)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ola, {name}</Text>
            <Input placeholder={"Digite seu nome..."} onChangeText={(text) => onChangeText(text)} />
            <Button onPress={mensage} title="Continar"  />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        justifyContent: "center",
        gap: 10
    },
    title:{
        color: "#453467",
        fontSize: 24,
        fontWeight: "bold",
    },
})
import { View, Text, StyleSheet, Alert, TextInput} from "react-native"

import { useState } from "react"
import { Button } from "../components/button"
import { Input } from "../components/input"
import { router } from "expo-router"

export default function Index(){

    const [name, setName] = useState("")
    
    function mensage(){
        Alert.alert(`Ola, ${name}`)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ola, {name}</Text>
            <Input placeholder={"Digite seu nome..."} onChangeText={setName} />
            {/* <Button onPress={() => router.navigate("/dashboard")} title="Continar" /> */}
            {/* <Button onPress={() => router.push({ pathname: "/dashboard", params: { name } })} title="Continuar" /> */}
            <Button onPress={() => router.push({ pathname: "/dashboard", params: { name } })} disabled={!name.trim()} title="Continuar" />
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
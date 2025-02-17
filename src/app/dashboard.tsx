import { View, Text, StyleSheet } from "react-native"
import { Button } from "../components/button"
import { router, useLocalSearchParams } from "expo-router"

export default function Dashboard(){
    const { name } = useLocalSearchParams();

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Olá, {name}{"\n"}Esse é um teste de navegação</Text>
            <Button title="Voltar" onPress={() => router.back()} />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems: "center",
        padding:32,
    },
    title: {
        padding: 15,
        fontSize: 24,
        color: "#453467",
        fontWeight: "bold",
        textAlign:"center"
    }
})
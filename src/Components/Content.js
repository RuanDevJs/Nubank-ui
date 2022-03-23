import { Text, SafeAreaView, StyleSheet } from "react-native";

export default function Content(){
    return (
       <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Para deixar você ainda mais seguro, precisamos que você insira
                uma senha para acessar seu aplicativo
            </Text>
            <Text style={styles.subtitle}>
                Saiba mais sobre o porquê dessa...
            </Text>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2, 
        justifyContent: "flex-start", 
        alignItems: "center", 
        backgroundColor: '#820AD1'
    },
    title: {
        width: "100%",
        paddingLeft: 20,
        fontSize: 22,
        fontWeight: "500",
        color: "#F5F5F5",
        lineHeight: 32,
        margin: 12,
    },
    subtitle: {
        width: "100%",
        padding: 20,
        fontSize: 16,
        fontWeight: "500",
        color: "#F5F5F5",
        lineHeight: 32,
    }
});
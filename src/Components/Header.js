import { SafeAreaView, StyleSheet, Image } from "react-native";

export default function Header(){
    const url = `https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-2.png`
    return (
        <SafeAreaView style={styles.container}>
            <Image 
                source={{ uri: url}}
                style={{
                    width: 80,
                    height: 80,
                    resizeMode: "cover",
                    marginLeft: 12
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: 100,
        backgroundColor: '#820AD1',
    },
})
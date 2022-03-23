import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';

import Header from './src/Components/Header';
import Content from './src/Components/Content';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Content />
      <SafeAreaView style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> Usar senha do celular </Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}> 
          Essa senha é a mesma que você usa pra desbloquear a tela 
        </Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#820AD1"
  },
  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: "90%",
    padding: 20,
    backgroundColor: "#F5F5F5",
    borderRadius: 50
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#222",
    textAlign: "center"
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "500",
    color: "#f5f5f5",
    textAlign: "center",
    padding: 22
  }
});

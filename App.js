import {View, Text, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './src/components/Header';


export default function App() {
  return (
    <View style={styles.container}>
      <Header style={styles.text}/>
      <Text style={styles.text}>Yo-Yo Baggins</Text>
      <StatusBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center"
  
  },
  text: {
    color: "#ffffff"
  }
})
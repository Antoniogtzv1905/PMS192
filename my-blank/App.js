//importaciones 

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';



const texto=(props)=>{
  const{contenido}=props
   return(
   <Text>contenido</Text>)}
    


//zona 2 main 
export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />

      <Text>Hola </Text>
       <Text> mundo !</Text>
        <Text> reactnative!</Text>
      <Button title='Ingresar'></Button>
     
    </View>
  );
}


//zona 3 estilos 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
/* zona 1, aqui van importaciones  */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

/* Componente personalizado */
const Texto = ({ style }) => {
  const [contenido, setContenido] = useState('hola mundo React');
  const actualizarTexto = () => {
    setContenido('estado actualizado');
  };
  return (
    <Text style={[styles.text, style]} onPress={actualizarTexto}>
      {contenido}
    </Text>
  );
};

/* zona 2 , el main */
export default function App() {
  return (
    <View style={styles.container}>
      <Texto style={styles.red} />
      <Texto style={styles.blue} />
      <Texto style={styles.green} />
      <Button title="Presioname!" onPress={() => {}} />
      <StatusBar style="auto" />
    </View>
  );
}

/* zona 3, estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    flexDirection:'colum',
  },
  text: {
    color: 'black',
    fontSize: 25,
    height: 100,
    width: 100,
  },
  red:  {backgroundColor: 'red' },
  blue: {backgroundColor: 'blue' },
  green:{backgroundColor: 'green' },
});

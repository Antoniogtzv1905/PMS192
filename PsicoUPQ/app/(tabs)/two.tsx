import { StyleSheet, Alert } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Button } from 'react-native';


export default function TabOneScreen() {
  const handlePress = () => {
    Alert.alert('Prueba', '¡Has presionado el botón!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Cardenal Asiste</Text>
      <Text style={styles.subtitle}>Sistema de gestión de citas</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>Esta es una interfaz de prueba para validar la pantalla.</Text>
        <Button title="Probar botón" onPress={handlePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#888',
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});

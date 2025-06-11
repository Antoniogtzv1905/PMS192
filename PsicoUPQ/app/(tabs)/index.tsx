import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Pressable } from 'react-native';
import { FontAwesome, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Logo_UPQ.png/1200px-Logo_UPQ.png',
          }}
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>Gestión de Citas</Text>
        <View style={styles.headerButtons}>
          <Pressable style={styles.btnRed} onPress={() => router.push('/register')}>
            <Text style={styles.btnText}>Crear Cuenta</Text>
          </Pressable>
          <Pressable style={styles.btnBlue} onPress={() => router.push('/login')}>
            <Text style={styles.btnText}>Iniciar Sesión</Text>
          </Pressable>
        </View>
      </View>

      {/* Funcionalidades */}
      <Text style={styles.title}>Nuestras Funcionalidades</Text>
      <Text style={styles.subtitle}>Todo lo que necesitas para gestionar tus citas</Text>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <FontAwesome name="calendar-check-o" size={40} color="#d10000" />
          <Text style={styles.cardTitle}>Agendamiento fácil</Text>
          <Text style={styles.cardText}>
            Programa tus citas en pocos pasos, seleccionando fecha, hora y especialista disponible.
          </Text>
        </View>
        <View style={styles.card}>
          <Entypo name="notification" size={40} color="#d10000" />
          <Text style={styles.cardTitle}>Recordatorios</Text>
          <Text style={styles.cardText}>
            Recibe notificaciones por correo y SMS para que nunca olvides tu cita.
          </Text>
        </View>
        <View style={styles.card}>
          <MaterialIcons name="trending-up" size={40} color="#d10000" />
          <Text style={styles.cardTitle}>Seguimiento</Text>
          <Text style={styles.cardText}>
            Accede a tu historial de citas y lleva un registro de tu progreso.
          </Text>
        </View>
      </View>

      {/* Cómo funciona */}
      <Text style={styles.title}>¿Cómo funciona?</Text>
      <Text style={styles.subtitle}>Sigue estos simples pasos para agendar tu cita</Text>

      <View style={styles.stepsContainer}>
        <View style={styles.step}>
          <Ionicons name="person-add" size={30} color="#0066cc" />
          <Text style={styles.stepText}>1. Crea tu cuenta</Text>
        </View>
        <View style={styles.step}>
          <Ionicons name="calendar" size={30} color="#0066cc" />
          <Text style={styles.stepText}>2. Elige fecha y hora</Text>
        </View>
        <View style={styles.step}>
          <Ionicons name="checkmark-done" size={30} color="#0066cc" />
          <Text style={styles.stepText}>3. Confirma tu cita</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#003366',
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  logo: { width: 60, height: 60, marginBottom: 10 },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  headerButtons: { flexDirection: 'row', gap: 10 },
  btnRed: {
    backgroundColor: '#d10000',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  btnBlue: {
    backgroundColor: '#0055cc',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  btnText: { color: '#fff', fontWeight: '600' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#222', marginTop: 30, textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#666', marginBottom: 20, textAlign: 'center' },
  cardContainer: { gap: 20 },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    elevation: 4,
  },
  cardTitle: { fontSize: 16, fontWeight: 'bold', marginVertical: 10, color: '#222' },
  cardText: { fontSize: 14, color: '#555', textAlign: 'center' },
  stepsContainer: { marginTop: 20, gap: 16 },
  step: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  stepText: { fontSize: 16, color: '#333' },
});

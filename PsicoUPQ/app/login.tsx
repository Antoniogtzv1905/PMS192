import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
  Alert,
  CheckBox,
} from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    Alert.alert('Iniciar sesión', `Email: ${email}\nContraseña: ${password}`);
  };

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Logo_UPQ.png/1200px-Logo_UPQ.png',
          }}
          style={styles.logo}
        />
        <Text style={styles.title}>Sistema de Gestión de Citas</Text>
        <Text style={styles.subtitle}>Inicio de sesión</Text>
      </View>

      {/* Formulario */}
      <View style={styles.form}>
        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.checkboxContainer}>
          <CheckBox value={remember} onValueChange={setRemember} />
          <Text style={styles.checkboxLabel}>Recordar sesión</Text>
        </View>

        <Pressable onPress={() => Alert.alert('Recuperar contraseña')}>
          <Text style={styles.forgot}>🔑 ¿Olvidaste tu contraseña?</Text>
        </Pressable>

        <Pressable style={styles.btn} onPress={handleLogin}>
          <FontAwesome name="sign-in" size={16} color="#fff" />
          <Text style={styles.btnText}>Iniciar sesión</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fafc',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#003366',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff',
    marginTop: 4,
    fontSize: 14,
  },
  form: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    elevation: 3,
  },
  label: {
    marginBottom: 4,
    color: '#222',
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 14,
  },
  forgot: {
    color: '#0055cc',
    marginBottom: 20,
    fontSize: 13,
  },
  btn: {
    backgroundColor: '#d10000',
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
  },
});

import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        
        <View style={styles.logo}>
          <Text style={styles.logoIcon}>📚</Text>
          <Text style={styles.logoTitle}>StudyConnect</Text>
          <Text style={styles.logoSub}>Encontre seu grupo de estudos</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#888"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TouchableOpacity style={styles.btnPrimary} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btnPrimaryText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOutline}>
          <Text style={styles.btnOutlineText}>Criar conta grátis</Text>
        </TouchableOpacity>

        <Text style={styles.forgot}>Esqueci minha senha</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f1117' },
  inner: { flex: 1, padding: 24, justifyContent: 'center' },
  logo: { alignItems: 'center', marginBottom: 36 },
  logoIcon: { fontSize: 48 },
  logoTitle: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginTop: 8 },
  logoSub: { fontSize: 14, color: '#888', marginTop: 4 },
  input: {
    backgroundColor: '#1e2130', color: '#fff', borderRadius: 10,
    padding: 14, marginBottom: 12, fontSize: 15, borderWidth: 1, borderColor: '#2e3250'
  },
  btnPrimary: {
    backgroundColor: '#378ADD', borderRadius: 10,
    padding: 14, alignItems: 'center', marginBottom: 12
  },
  btnPrimaryText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  btnOutline: {
    borderWidth: 1, borderColor: '#2e3250', borderRadius: 10,
    padding: 14, alignItems: 'center', marginBottom: 16
  },
  btnOutlineText: { color: '#aaa', fontSize: 16 },
  forgot: { textAlign: 'center', color: '#378ADD', fontSize: 14 },
});
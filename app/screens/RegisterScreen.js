import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleRegister = () => {
    if (!nome || !curso || !email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    Alert.alert(
      'Sucesso',
      'Cadastro realizado!'
    );

    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <TextInput
        placeholder="Nome"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        placeholder="Curso"
        style={styles.input}
        value={curso}
        onChangeText={setCurso}
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>
          Cadastrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    padding:25
  },

  title:{
    fontSize:28,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:30
  },

  input:{
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:10,
    padding:15,
    marginBottom:15
  },

  button:{
    backgroundColor:'#2563eb',
    padding:15,
    borderRadius:10
  },

  buttonText:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold'
  }
});
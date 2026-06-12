import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, ScrollView, KeyboardAvoidingView, Platform
} from 'react-native';

export default function ChatScreen({ navigation }) {
  const [mensagem, setMensagem] = useState('');
  const [mensagens, setMensagens] = useState([
    { id: 1, texto: 'Pessoal, vamos estudar amanhã?', autor: 'Ana', meu: false },
    { id: 2, texto: 'Sim! Que horas?', autor: 'Eu', meu: true },
    { id: 3, texto: 'Pode ser às 10h no Meet', autor: 'Ana', meu: false },
    { id: 4, texto: 'Combinado! 👍', autor: 'Eu', meu: true },
  ]);

  const enviar = () => {
    if (mensagem.trim() === '') return;
    setMensagens([...mensagens, { id: Date.now(), texto: mensagem, autor: 'Eu', meu: true }]);
    setMensagem('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>← Voltar</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Cálculo II</Text>
          <Text style={styles.online}>5 membros online</Text>
        </View>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView style={styles.msgs} contentContainerStyle={{ padding: 16, gap: 8 }}>
        {mensagens.map(m => (
          <View key={m.id} style={[styles.msgWrap, m.meu && styles.msgWrapMeu]}>
            {!m.meu && <Text style={styles.autor}>{m.autor}</Text>}
            <View style={[styles.msg, m.meu ? styles.msgMeu : styles.msgDeles]}>
              <Text style={[styles.msgTexto, m.meu && styles.msgTextoMeu]}>{m.texto}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Mensagem..."
          placeholderTextColor="#888"
          value={mensagem}
          onChangeText={setMensagem}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={enviar}>
          <Text style={styles.sendIcon}>➤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f1117' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20, paddingTop: 60, borderBottomWidth: 1, borderBottomColor: '#2e3250' },
  back: { color: '#378ADD', fontSize: 16, width: 60 },
  title: { color: '#fff', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
  online: { color: '#639922', fontSize: 11, textAlign: 'center', marginTop: 2 },
  msgs: { flex: 1 },
  msgWrap: { alignItems: 'flex-start', marginBottom: 4 },
  msgWrapMeu: { alignItems: 'flex-end' },
  autor: { color: '#888', fontSize: 10, marginBottom: 2, marginLeft: 4 },
  msg: { maxWidth: '78%', borderRadius: 12, padding: 10 },
  msgDeles: { backgroundColor: '#1e2130', borderBottomLeftRadius: 2 },
  msgMeu: { backgroundColor: '#378ADD', borderBottomRightRadius: 2 },
  msgTexto: { color: '#fff', fontSize: 14 },
  msgTextoMeu: { color: '#fff' },
  inputArea: { flexDirection: 'row', alignItems: 'center', padding: 12, borderTopWidth: 1, borderTopColor: '#2e3250', gap: 8 },
  input: { flex: 1, backgroundColor: '#1e2130', color: '#fff', borderRadius: 20, padding: 12, fontSize: 14, borderWidth: 1, borderColor: '#2e3250' },
  sendBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#378ADD', alignItems: 'center', justifyContent: 'center' },
  sendIcon: { color: '#fff', fontSize: 16 },
});
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, ScrollView
} from 'react-native';

export default function CriarGrupoScreen({ navigation }) {
  const [disciplina, setDisciplina] = useState('');
  const [modalidade, setModalidade] = useState('Online');
  const [horario, setHorario] = useState('');
  const [vagas, setVagas] = useState('');
  const [descricao, setDescricao] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Novo Grupo</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={styles.form}>

        <Text style={styles.label}>Disciplina</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Cálculo II"
          placeholderTextColor="#888"
          value={disciplina}
          onChangeText={setDisciplina}
        />

        <Text style={styles.label}>Modalidade</Text>
        <View style={styles.toggle}>
          <TouchableOpacity
            style={[styles.toggleBtn, modalidade === 'Online' && styles.toggleActive]}
            onPress={() => setModalidade('Online')}>
            <Text style={[styles.toggleText, modalidade === 'Online' && styles.toggleTextActive]}>Online</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleBtn, modalidade === 'Presencial' && styles.toggleActive]}
            onPress={() => setModalidade('Presencial')}>
            <Text style={[styles.toggleText, modalidade === 'Presencial' && styles.toggleTextActive]}>Presencial</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Dia e Horário</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Sábado às 10h"
          placeholderTextColor="#888"
          value={horario}
          onChangeText={setHorario}
        />

        <Text style={styles.label}>Máx. de membros</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 8"
          placeholderTextColor="#888"
          value={vagas}
          onChangeText={setVagas}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder="Conte sobre o objetivo do grupo..."
          placeholderTextColor="#888"
          value={descricao}
          onChangeText={setDescricao}
          multiline
          numberOfLines={4}
        />

        <TouchableOpacity
          style={styles.btnPrimary}
          onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>Criar Grupo</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f1117' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20, paddingTop: 60, borderBottomWidth: 1, borderBottomColor: '#2e3250' },
  back: { color: '#378ADD', fontSize: 16, width: 60 },
  title: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  form: { padding: 20, gap: 4 },
  label: { color: '#888', fontSize: 12, marginBottom: 6, marginTop: 12, textTransform: 'uppercase', letterSpacing: 0.5 },
  input: { backgroundColor: '#1e2130', color: '#fff', borderRadius: 10, padding: 14, fontSize: 15, borderWidth: 1, borderColor: '#2e3250' },
  textarea: { height: 100, textAlignVertical: 'top' },
  toggle: { flexDirection: 'row', backgroundColor: '#1e2130', borderRadius: 10, borderWidth: 1, borderColor: '#2e3250', overflow: 'hidden' },
  toggleBtn: { flex: 1, padding: 12, alignItems: 'center' },
  toggleActive: { backgroundColor: '#378ADD' },
  toggleText: { color: '#888', fontWeight: '600' },
  toggleTextActive: { color: '#fff' },
  btnPrimary: { backgroundColor: '#378ADD', borderRadius: 10, padding: 16, alignItems: 'center', marginTop: 24 },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
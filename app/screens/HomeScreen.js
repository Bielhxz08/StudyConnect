import React from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>

        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Olá, Gabriel 👋</Text>
            <Text style={styles.sub}>3 grupos ativos</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>G</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.search}>
          <Text style={styles.searchText}>🔍 Buscar grupos...</Text>
        </View>

        <Text style={styles.sectionLabel}>MEUS GRUPOS</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <View style={[styles.card, styles.cardBlue]}>
            <View>
              <Text style={styles.cardTitle}>Cálculo II</Text>
              <Text style={styles.cardSub}>5 membros · Sáb 10h</Text>
            </View>
            <View style={styles.badgeBlue}>
              <Text style={styles.badgeText}>Online</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <View style={[styles.card, styles.cardGreen]}>
            <View>
              <Text style={styles.cardTitle}>Estrutura de Dados</Text>
              <Text style={styles.cardSub}>3 membros · Sex 19h</Text>
            </View>
            <View style={styles.badgeGreen}>
              <Text style={styles.badgeTextGreen}>Presencial</Text>
            </View>
          </View>
        </TouchableOpacity>

        <Text style={styles.sectionLabel}>DISPONÍVEIS</Text>

        <View style={styles.card}>
          <View>
            <Text style={styles.cardTitle}>Banco de Dados</Text>
            <Text style={styles.cardSub}>2/8 vagas · Qui 20h</Text>
          </View>
          <View style={styles.badgeGray}>
            <Text style={styles.badgeTextGray}>Entrar</Text>
          </View>
        </View>

      </ScrollView>

      <View style={styles.nav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIconActive}>🏠</Text>
          <Text style={styles.navLabelActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('CriarGrupo')}>
          <Text style={styles.navIcon}>👥</Text>
          <Text style={styles.navLabel}>Grupos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Chat')}>
          <Text style={styles.navIcon}>💬</Text>
          <Text style={styles.navLabel}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Perfil')}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navLabel}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f1117' },
  scroll: { padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  greeting: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
  sub: { fontSize: 12, color: '#888', marginTop: 2 },
  avatar: { width: 38, height: 38, borderRadius: 19, backgroundColor: '#1e3a5f', alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: '#378ADD', fontWeight: 'bold' },
  search: { backgroundColor: '#1e2130', borderRadius: 20, padding: 12, marginBottom: 20 },
  searchText: { color: '#888', fontSize: 14 },
  sectionLabel: { fontSize: 10, color: '#555', letterSpacing: 1, marginBottom: 10, marginTop: 4 },
  card: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1e2130', borderRadius: 12, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: '#2e3250' },
  cardBlue: { borderLeftWidth: 3, borderLeftColor: '#378ADD' },
  cardGreen: { borderLeftWidth: 3, borderLeftColor: '#639922' },
  cardTitle: { fontSize: 14, fontWeight: '600', color: '#fff' },
  cardSub: { fontSize: 11, color: '#888', marginTop: 3 },
  badgeBlue: { backgroundColor: '#1e3a5f', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 4 },
  badgeText: { color: '#378ADD', fontSize: 11, fontWeight: '600' },
  badgeGreen: { backgroundColor: '#1e3a1e', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 4 },
  badgeTextGreen: { color: '#639922', fontSize: 11, fontWeight: '600' },
  badgeGray: { backgroundColor: '#2e3250', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 4 },
  badgeTextGray: { color: '#aaa', fontSize: 11 },
  nav: { flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#2e3250', paddingVertical: 10, backgroundColor: '#0f1117' },
  navItem: { alignItems: 'center' },
  navIcon: { fontSize: 20 },
  navIconActive: { fontSize: 20 },
  navLabel: { fontSize: 10, color: '#555', marginTop: 2 },
  navLabelActive: { fontSize: 10, color: '#378ADD', marginTop: 2 },
});
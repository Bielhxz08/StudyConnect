import React from 'react';
import {
  View, Text, TouchableOpacity,
  StyleSheet, ScrollView
} from 'react-native';

export default function PerfilScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Perfil</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>

        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>G</Text>
          </View>
          <Text style={styles.name}>Gabriel Ramos</Text>
          <Text style={styles.course}>ADS · 4º semestre · Estácio</Text>
          <View style={styles.badges}>
            <View style={styles.badgeBlue}>
              <Text style={styles.badgeBlueText}>3 grupos</Text>
            </View>
            <View style={styles.badgePurple}>
              <Text style={styles.badgePurpleText}>12 sessões</Text>
            </View>
          </View>
        </View>

        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}>
            <View style={[styles.menuIcon, { backgroundColor: '#1e3a5f' }]}>
              <Text>👥</Text>
            </View>
            <Text style={styles.menuText}>Meus grupos</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={[styles.menuIcon, { backgroundColor: '#1e3a1e' }]}>
              <Text>🔔</Text>
            </View>
            <Text style={styles.menuText}>Notificações</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={[styles.menuIcon, { backgroundColor: '#2e2a5e' }]}>
              <Text>⚙️</Text>
            </View>
            <Text style={styles.menuText}>Configurações</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}>
            <View style={[styles.menuIcon, { backgroundColor: '#3a1e1e' }]}>
              <Text>🚪</Text>
            </View>
            <Text style={[styles.menuText, { color: '#e24b4a' }]}>Sair da conta</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f1117' },
  header: { padding: 20, paddingTop: 60, borderBottomWidth: 1, borderBottomColor: '#2e3250' },
  title: { color: '#fff', fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
  scroll: { padding: 20 },
  profileCard: { alignItems: 'center', backgroundColor: '#1e2130', borderRadius: 16, padding: 24, marginBottom: 20, borderWidth: 1, borderColor: '#2e3250' },
  avatar: { width: 64, height: 64, borderRadius: 32, backgroundColor: '#1e3a5f', alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  avatarText: { color: '#378ADD', fontSize: 24, fontWeight: 'bold' },
  name: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  course: { color: '#888', fontSize: 13, marginTop: 4 },
  badges: { flexDirection: 'row', gap: 8, marginTop: 12 },
  badgeBlue: { backgroundColor: '#1e3a5f', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 4 },
  badgeBlueText: { color: '#378ADD', fontSize: 12, fontWeight: '600' },
  badgePurple: { backgroundColor: '#2e2a5e', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 4 },
  badgePurpleText: { color: '#7c6fe0', fontSize: 12, fontWeight: '600' },
  menu: { gap: 10 },
  menuItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1e2130', borderRadius: 12, padding: 14, borderWidth: 1, borderColor: '#2e3250' },
  menuIcon: { width: 36, height: 36, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  menuText: { flex: 1, color: '#fff', fontSize: 15 },
  menuArrow: { color: '#555', fontSize: 20 },
});
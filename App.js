import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import styles from './src/assets/css/style'; // Importa o arquivo de estilo
import HeaderPrincipal from './src/assets/components/headerprincipal';
import Rodape from './src/assets/components/rodape';

export default function App() {

  return (
    <View style={styles.container}>
      <View>
        <HeaderPrincipal />
      </View>
      <View style={styles.secondaryContainer}>
        <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 30, textAlign: 'right' }} >Guilherme Veiga Pedromilo</Text>
        <Text style={{ fontSize: 25, textAlign: 'left', borderWidth: 1 }} >18</Text>
        <Text style={{ fontStyle: 'italic', fontSize: 20, textAlign: 'center', backgroundColor: 'pink' }} >07</Text>
        <Text style={{ color: 'cyan', fontSize: 25, textAlign: 'center', borderWidth: 1 }} >Primeira aplicação com React-Native</Text>
      </View>
      <Rodape />
    </View>
  );
}

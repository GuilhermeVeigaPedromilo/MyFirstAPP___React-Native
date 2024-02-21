import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './assets/css/style'; // Importa o arquivo de estilo

export default function App() {

  changeText = () => {
    alert("HELLO :D");
  }

return (
  <View style={styles.container}>
  <View style={[styles.containerHeader, { backgroundColor: 'gray', width: '100%', height: 75}]}>
  <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png', 
        }}/>
        <Text style={{color: 'white', fontSize: 25}} >2023_DES-I1HN - 2ºS-DES. DE SISTEMAS - NOVA ODESSA</Text>
        <Text redirect="/form" >Form</Text>
  </View>
  <View style={styles.secondaryContainer}>
  <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 30, textAlign: 'right' }} >Guilherme Veiga Pedromilo</Text>
  <Text style={{ fontSize: 25, textAlign: 'left', }} >18</Text>
  <Text style={{ fontStyle: 'italic', fontSize: 20, textAlign: 'center', backgroundColor: 'pink'}} >07</Text>
  <Text style={{ color: 'cyan', fontSize: 25, textAlign: 'center'}} >Primeira aplicação com React-Native</Text>
  </View>
  <View style={{ backgroundColor: 'gray', width: '100%', height: 75, justifyContent: 'center' }}>
  </View>
  </View>
  );
  }

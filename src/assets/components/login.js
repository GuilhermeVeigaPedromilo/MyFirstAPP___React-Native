import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Image } from 'react-native';
import styles from '../css/style'; // Importa o arquivo de estilo
import { Button } from 'react-native-web';
import HeaderPrincipal from '../../../partials/headerprincipal';

export default function App() {

  return (
    <View style={styles.container}>
      <View>
        <HeaderPrincipal />
      </View>
  <View style={styles.secondaryContainer}>
  <TextInput style={styles.inputName} 
  placeholder='Digite seu nome' 
  //inputMode='numeric'-Transforma o teclado, em um teclado numérico.
  secureTextEntry={true}  
  onChangeText={changeText}
  />
  </View>
  <View style={{ backgroundColor: 'gray', width: '100%', height: 75, justifyContent: 'center' }}>


  </View>
  </View>
  );
  }

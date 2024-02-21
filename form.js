import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import styles from './assets/css/style'; // Importa o arquivo de estilo

export default function form() {

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
        <Text href="/form">Form</Text>
  </View>
  <View style={styles.secondaryContainer}>
  <TextInput style={styles.inputName} 
  placeholder='Digite seu nome' 
  inputMode='numeric'
  secureTextEntry={true}
  placeholderTextColor='red'  
  onChangeText={changeText}
  />
  </View>
  <View style={{ backgroundColor: 'gray', width: '100%', height: 75, justifyContent: 'center' }}>


  </View>
  </View>
  );
  }

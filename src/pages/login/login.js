import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, Button } from 'react-native';
import styles from '../../assets/css/stylelogin'; // Importa o arquivo de estilo

export default function Login() { // Alteração aqui: export default function Login()

  const button = () => { // Alteração aqui: Adicionei o "const" para definir a função
    alert("Login");
  }

  return (
    <View style={styles.container}>
      <ImageBackground 
        style={styles.body}
        source={require('../../images/fundo.jpg')}>

        <View style={styles.submenu}>
            <Image 
            style={{width: 180, height: 25,}}
            source={require('../../images/sesi-senai.jpg')}/>
            <View style={{gap: 10,}} >
                  <TextInput
                  placeholder='Digite seu E-mail'
                  style={styles.input}
                  />
                  <TextInput
                  secureTextEntry={true}
                  placeholder='Digite sua senha'
                  style={styles.input}
                  />
                  <Button
                  placeholder='Login'
                  title='Login'
                  onPress={button} 
                  />  
            </View>
            
        </View>
        </ImageBackground>
      </View>
  );
}

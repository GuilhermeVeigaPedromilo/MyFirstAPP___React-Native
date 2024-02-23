import React from 'react';
import { StyleSheet, Text, View, Image, Button,  } from 'react-native';
import styles from '../css/style'; // Importa o arquivo de estilo
import Login from './login';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

//const Stack = createNativeStackNavigator();

//<Stack.Navigator>
//<Stack.Screen name="Login" component={Login} /> Preparação para enviar para login (rotas)
//</Stack.Navigator>

  function HeaderPrincipal() {

  return (
    <View style={[styles.containerHeader, { backgroundColor: 'gray', width: '100%', height: 75 }]}>
      <Image
        style={styles.tinyLogo}
        source={require('../images/senai.png')} />
      <Text style={{ color: 'white', fontSize: 25 }}>2023_DES-I1HN - 2ºS-DES. DE SISTEMAS - NOVA ODESSA</Text>
      <View style={{ backgroundColor: 'white', height: 75, width: 1 }}></View>

    </View>
  );
}

export default HeaderPrincipal;

import React from 'react';
import { StyleSheet, Text, View, Image, Button,  } from 'react-native';
import styles from '../css/style'; // Importa o arquivo de estilo
import Login from './login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


  function HeaderPrincipal() {

  return (
    <View style={[styles.containerHeader, { backgroundColor: 'gray', width: '100%', height: 75 }]}>
      <Image
        style={styles.tinyLogo}
        source={require('../images/senai.png')} />
      <Text style={{ color: 'white', fontSize: 25 }}>2023_DES-I1HN - 2ºS-DES. DE SISTEMAS - NOVA ODESSA</Text>
      <View style={{ backgroundColor: 'white', height: 75, width: 1 }}></View>
      <Stack.Navigator>
<Stack.Screen name="Login" component={Login} />
</Stack.Navigator>
    </View>
  );
}

export default HeaderPrincipal;

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {styles} from './Estilos/Estilo';
import Calculadora from './Calculadora';




export default function Content() {
   
    return (
<View style={styles.altura, styles.alinhacalc}>
    
    <Calculadora/>

</View>

    )}
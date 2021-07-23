import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from './Estilos/Estilo';

export default function Header() {
    return (
<View style={styles.aHeader}>
    <Image style={styles.logo1} source={require('./Estilos/logo1.png')}/>
    <Text style={styles.titulo}>ReactCalc</Text>
    <Text style={styles.titulo}>Modelo de Calculadora Simples com Estilização</Text>
    
    
</View>
    )}
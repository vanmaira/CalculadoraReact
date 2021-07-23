import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, Linking } from 'react-native';
import {styles} from './Estilos/Estilo';

export default function Content() {
    return (
<View style={styles.rodape}>

<Text style={styles.rodapetexto}>Desenvolvido por Vanessa Santos</Text>
<Text style={styles.rodapetexto}>Sob Orientação da Equipe Docente da Soul Code Academy</Text>
<Text style={styles.linkSoul} onPress={() => Linking.openURL('https://soulcodeacademy.org/')}>
  Clique Aqui e Conheça!
</Text>
    
</View>
    )}

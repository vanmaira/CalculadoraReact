import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import Header from './Componentes/Header';
import Content from './Componentes/Content';
import Footer from './Componentes/Footer';
import { styles } from './Componentes/Estilos/Estilo';



export default function App() {
  return (
    <SafeAreaView>
    <ScrollView>
    <StatusBar hidden ={false}></StatusBar>

    <Header/>
    <Content/>
    <Footer/>  
    
      
    </ScrollView>
    </SafeAreaView>
  );
}
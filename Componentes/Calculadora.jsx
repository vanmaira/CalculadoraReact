import React,{useState} from 'react';
import {Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import {styles} from './Estilos/Estilo';


export default function Calculadora(){

   
    const [valores, setValores] = useState({
        a:0,
        b:0
    });
    const [result, setResult] = useState(0);
   
console.log(valores);

    return(
        
        <View>
       

        <View style={styles.botoes}> 

            <TextInput style={styles.input}
            keyboardType='numeric' 
            placeholder='Valor A'
            onChangeText={
                (valor)=>setValores({
                    ...valores, a: parseInt(valor)
                })
            }
            />
             <Text>{`\n`}</Text>

            <TextInput style={styles.input}
            keyboardType='numeric'       
            placeholder='Valor B'
            onChangeText={
                (valor)=>setValores({
                    ...valores, b: parseInt(valor)
                })
            }
            />
             <Text>{`\n`}</Text>
        </View>

                      
        <View style={styles.botoes}>
              
                <TouchableOpacity
                style={styles.button}
                onPress ={
                    ()=> setResult (valores.a+valores.b)
                }>
                    <Text style={styles.rodapetexto}> + </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.button}
                onPress ={
                    ()=> setResult (valores.a-valores.b)
                }>
                    <Text style={styles.rodapetexto}> - </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.button}
                onPress ={
                    ()=> setResult (valores.a*valores.b)
                }>
                    <Text style={styles.rodapetexto}> x </Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.button}
                onPress ={
                    ()=> setResult (valores.a/valores.b)
                }>
                    <Text style={styles.rodapetexto}> / </Text>
                </TouchableOpacity>
        </View>
        <View style={styles.botoes}>

                <TouchableOpacity
                style={styles.button}
                onPress ={
                    ()=> setResult (valores.a**valores.b)
                }>
                    <Text style={styles.rodapetexto}> a^b </Text>
                </TouchableOpacity>

                

                <TouchableOpacity
                style={styles.button}
                onPress ={
                    ()=> setResult (valores.a%=valores.b)
                }>
                    <Text style={styles.rodapetexto}>Resto Divisão</Text>
                </TouchableOpacity>

               
        </View>
                <Text>{`\n`}</Text>
                <Text>{`\n`}</Text>
                <Text style={styles.result}>Resultado: {result}</Text>


        </View>
        
    )
}
import{StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    
    aHeader:{
        backgroundColor: '#D19C1D',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        flexDirection:'column',
        borderWidth:3,
        
    
    },
    rodape: {
        backgroundColor:'#472C1B',
        height: 80,
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        flexDirection:'column',
        borderWidth:3,
        
    },
    rodapetexto:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'

    },
    logo1:{
        width:100,
        height:100
    },
    titulo:{
        fontWeight:'bold',
        fontSize:30,
        color:"white"
    },
    result:{
        fontWeight:'bold',
        fontSize:30,
        color:"white",
        textAlign:'center'
    },
  
    input:{
        padding:5,
        borderWidth:2,
        fontSize:25,
        borderRadius:30,
        margin:2,
        textAlign:'right',
        width:100,
        height:50,
        color:'#D19C1D'
    },
    
    button:{
        backgroundColor:'#D19C1D',
        borderWidth:2,
        borderRadius:30,
        textAlign:'center',
        fontSize:25,
        alignItems:'center',
        justifyContent:'center',
        margin:5,
        padding:5,
        
        
        
        
        
    },
   botoes:{
       fontSize:25,
       margin:15,
       alignItems:'center',
       justifyContent:'center',
       padding:15,
       flexDirection:'row',
       
       
   },
   altura:{
       height:600,
       width:300
   },

   alinhacalc:{
    backgroundColor: '#7D451B',
    borderWidth:3,
    padding:10,
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
       
    
   },
   linkSoul:{
    color:'white',
    fontWeight:'bold',
    fontSize:20,
    textAlign:'center',
    textShadowColor: '#974CFA',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
   }
  



})
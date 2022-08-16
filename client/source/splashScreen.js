import React from 'react'
import {StyleSheet , View,Text,Image,TouchableOpacity} from 'react-native'









const splashScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <View style={{marginTop:20,alignItems:'center'}}>
            <Image source={require('../assets/images/19197600.jpg')}   style = {{ width: 360, height: 340 }}/>
            {/* <Text style={{paddingBottom:10, fontSize:25,fontFamily: 'sans-serif', fontStyle:'italic'}}>Milla </Text> */}
            
            <TouchableOpacity style={styles.btn} 
             onPress={() => navigation.navigate("LoginScreen")}>
                <Text style={{fontSize:20,color:'white'}}>Login</Text>    
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn1}
             onPress={() => navigation.navigate("RegisterScreen")}>
                <Text style={{fontSize:20,color:'white'}}>Sign-Up</Text>    
            </TouchableOpacity>
            </View>
        </View>
    )
}
export default splashScreen;
const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:"center",
        alignItems:'center',
        backgroundColor:'white',
        
    },
    btn:{
        height:45,
        width:160,
        alignItems:'center',
        justifyContent:"center",
        backgroundColor:'#a27777',
        marginTop:20,
        borderRadius:15
    },
    btn1:{
        height:45,
        width:150,
        alignItems:'center',
        justifyContent:"center",
        backgroundColor:'#c2a4a4',
        marginTop:20,
        borderRadius:15
    },
})
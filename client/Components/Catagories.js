import * as React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';







const Catagories =()=>{
    return(
        <View style={styles.container}>
            <View>
            <Image source={{
                  uri:'https://images.unsplash.com/photo-1511546865855-fe4788edf4b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGZydWl0cyUyMGJhc2tldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                  
              }}
              style={styles.img}/>
    <Text style={{ fontSize:16,alignSelf:'center'}}>Fruits</Text>
            </View>
           
            <View>
            <Image source={{
                  uri:'https://images.unsplash.com/photo-1625643269470-5d3e7b69fa34?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJ1dGNoZXIlMjBzaG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                  
              }}
              style={styles.img}/>
    <Text style={{ fontSize:16,alignSelf:'center'}}>Meat</Text>
            </View>
            
            <View>
            <Image source={{
                  uri:'https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGVnZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                  
              }}
              style={styles.img}/>
    <Text style={{ fontSize:16,alignSelf:'center'}}>Dairy</Text>
            </View>
            <View>
            <Image source={{
                  uri:'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFrZXJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                  
              }}
              style={styles.img}/>
    <Text style={{ fontSize:16,alignSelf:'center'}}>Baked</Text>
            </View>
            <View>
            <Image source={{
                  uri:'https://images.unsplash.com/photo-1553452118-621e1f860f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHN3ZWV0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                  
              }}
              style={styles.img}/>
    <Text style={{ fontSize:16,alignSelf:'center'}}>Sweets</Text>
            </View>
     
     
        </View>
        
    )
}
export default Catagories;
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        marginLeft:17,
       marginTop:20,
      
        
      },
      img:{
          height:50,
          width:50,
        //   backgroundColor:'yellow',
          alignItems:'center',
          justifyContent:'center',
          borderRadius:25,
          marginLeft:15
      }
})
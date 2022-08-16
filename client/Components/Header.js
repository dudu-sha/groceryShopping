import * as React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'






const Header =()=>{
    return(
        <View style={styles.container}>
            <View style={{flexDirection:'row',marginLeft:10, marginTop:20,}}>
            <Image source={{
                  uri:'data:image/png;base64,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'
                  
              }}
              style={styles.img}/>
    {/* <Text style={{ fontSize:25,alignSelf:'center'}}>Groceries </Text> */}
    </View>
    {/* <TouchableOpacity>
    <View style={{marginRight:20,marginTop:7}}>
    <Icon name="person-circle-outline" size={35} color='#986868' />
    </View>
    </TouchableOpacity> */}
        </View>
    )
}
export default Header;
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
      justifyContent:'space-between',
        // marginLeft:10,
        // borderBottomWidth:2,
        // borderBottomColor:'rgba(100,100,100,0.2)',
       
        borderRadius:10,
        elevation:3,
                                   
        paddingBottom:5
        
      },
      img:{
          height:50,
          width:200,
          marginTop:5
      }
})
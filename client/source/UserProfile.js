import React,{useContext} from 'react'
import {StyleSheet , View,Text,TouchableOpacity,AsyncStorage,Image} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'






import { UserContext } from '../context/UserContext'
const UserProfile = () =>{
  const {userprofile}= React.useContext(UserContext)
console.log(AsyncStorage.getItem('Profile'))
    return(
        <View style={styles.container}>
            {/* <TouchableOpacity
          onPress={async() => {
              await AsyncStorage.removeItem('UserToken')
              try{
                console.log("refresh")
              }catch{
                  console.log("didnt refresh")
              }
             
            }}
          style={styles.btn1}
        >
          <Text style={{fontSize:16}}>Logout</Text>
        </TouchableOpacity> */}
           <View style={{alignItems:'center'}}>
                        <View >
                        <Icon name='person-circle' size={150} color='#17202A'/>
                        </View>
      <Text style={{fontSize:20}}>Lidya Abas</Text>
      <Text style={{fontSize:16}}>Lidya@gmail.com</Text>
      </View>
      <View style={{marginTop:60,flexDirection:'row',marginLeft:20}}>
      <Icon name='settings-outline' size={25}/>
      <Text style={{marginLeft:10,fontSize:20}}>Settings</Text>

      </View>
      <View style={{marginTop:15,flexDirection:'row',marginLeft:20}}>
      <Icon name='bookmarks-outline' size={25}/>
      <Text style={{marginLeft:10,fontSize:20}}>Bookmarks</Text>

      </View>
      <View style={{marginTop:15,flexDirection:'row',marginLeft:20}}>
      <Icon name='archive-outline' size={25}/>
      <Text style={{marginLeft:10,fontSize:20}}>Purchase history</Text>

      </View>
      <View style={{marginTop:15,flexDirection:'row',marginLeft:20}}>
      <Icon name='card-outline' size={25}/>
      <Text style={{marginLeft:10,fontSize:20}}>Credit Card Information</Text>

      </View>
      <View style={{marginTop:15,flexDirection:'row',marginLeft:20}}>
      <Icon name='log-out-outline' size={25}/>
      <Text style={{marginLeft:10,fontSize:20}}>Logout</Text>

      </View>

          
        </View>
    )
}
export default UserProfile;
const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:"center",
        // alignItems:'center',
        backgroundColor:'white'
    },
  img:{
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
   
  },
  btn1:{
    alignItems:'baseline',
    marginTop:4,
    marginLeft:300
  }
})
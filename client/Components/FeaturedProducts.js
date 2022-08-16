import * as React from 'react'
import {StyleSheet,View,Text,ScrollView, SafeAreaView,FlatList,Image } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'


const users = [
    {
        name: 'Supermarket',
        avatar: 'https://images.unsplash.com/photo-1568835679605-ba674a4d12e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN1cGVybWFya2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
     },
    {
       name: 'Supermarket',
       avatar: 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFrZXJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Supermarket',
        avatar: 'https://images.unsplash.com/photo-1568626913161-c4ac1e5ae186?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN1cGVybWFya2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
     },

     {
        name: 'Supermarket',
        avatar: 'https://images.unsplash.com/photo-1561329913-721c104c3846?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHN1cGVybWFya2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
     },
     {
        name: 'Supermarket',
        avatar: 'https://images.unsplash.com/photo-1583922146273-68f11083858e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=637&q=80'
     },
     {
        name: 'Supermarket',
        avatar: 'https://images.unsplash.com/photo-1580913428023-02c695666d61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80'
     },
   ]

   const ListItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image
          source={{
            uri: item.avatar,
          }}
          style={styles.itemPhoto}
          resizeMode="cover"
        />
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    );}
const FeaturedProducts = () =>{

    return(
        <View style={styles.container}>
          <Text style={{fontSize:22,marginBottom:10}}>Featured Shops</Text>  
         
     <FlatList
        horizontal
        // numColumns={2}

        data={users}
        renderItem={({ item }) => <ListItem item={item} />}
        showsHorizontalScrollIndicator={false}
      />
</View>

        
    )
}

export default FeaturedProducts;

const styles = StyleSheet.create({

    container:{
       
        marginTop:20,
        marginLeft:15,
    },
    card:{
        
        height:250,
        width:500,
        flexDirection:'row',
        
    },
    item: {
        margin: 10,
      },
      itemPhoto: {
        width: 140,
        height: 160,
        borderRadius:20,
      },
    
})
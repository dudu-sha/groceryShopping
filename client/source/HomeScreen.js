import React,{useState} from 'react'
import { SliderBox } from "react-native-image-slider-box";
import {StyleSheet , View,Text,SafeAreaView,ScrollView} from 'react-native'
import FeaturedProducts from '../Components/FeaturedProducts'





import Catagories from '../Components/Catagories'




state = {
    images: [
      "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFrZXJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1581646741691-6ce169c27dec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGJ1dGNoZXIlMjBzaG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3JvY2VyeSUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1571938574727-cd5ea31dafbd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFpcnklMjBmYXJtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ],
  desc:[
    "hey",
    "you",
    "cut",
    "It"
  ]
    
  };
const HomeScreen= () =>{
  const[index,setIndex]=useState({})
  console.log(index)
    return(
       
            <SafeAreaView style={{borderColor:'white'}}>
              <ScrollView>
        <View style={styles.container}>
               
                <View style={ {elevation: 6,}}>
                <Catagories/>
                </View>
               
                <Text>{state.desc[index]}</Text>
                 <SliderBox images={state.images}
                 autoplayDelay={100000}
                // autoplay
                circleLoop
                ImageComponentStyle={{borderRadius: 5, width: '90%', marginTop: 5}} 
                currentImageEmitter={i=>setIndex(i)}/>
                 <FeaturedProducts />

        </View>
        </ScrollView>
        </SafeAreaView>
    )
}
export default HomeScreen;
const styles = StyleSheet.create({
    container:{
        flex:1,
        
       backgroundColor:'white'
        
    }
})
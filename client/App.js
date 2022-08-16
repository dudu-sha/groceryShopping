import { StatusBar } from 'expo-status-bar';
import React , {useContext, useEffect,useState} from 'react';
import { StyleSheet, Text, View,AsyncStorage } from 'react-native';
import  Header from './Components/Header'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import GroceryItems from './source/GroceryItems';
import HomeScreen from './source/HomeScreen';
import UserProfile from './source/UserProfile'
import ShoppingCart from './source/ShoppingCart';
import {GroceryProvider} from './context/Provider/GroceryProvider'
import { UserProvider } from './context/Provider/UserProvider';
import NavigationScreen from './source/Login_Register_navigation'

import {GroceryContext}  from './context/GroceryContext'
import { UserContext } from './context/UserContext';
import LoginScreen from './source/LoginScreen'


const Tab = createBottomTabNavigator();

export default function App() {
  const context = useContext(GroceryContext)
  const {userprofile}= useContext(UserContext)
  const { getItems } = useContext(GroceryContext);
  // const {setToken} = useContext(UserContext)?
  const [token,setToken]=useState();
  console.log('gt')
  console.log(userprofile)
  useEffect(() => {
    setTimeout(async () => {
      setToken()
     getItems()
    }, 1000);
  }, []);
  useEffect(() => {
    setTimeout(async () => {
      console.log('token')
     const value =await AsyncStorage.getItem('UserToken')
     setToken(value)
     console.log(value)
     console.log(token)
    }, 1000);
  }, []);
  // console.log(context.items);
 const k="g";
  return (
<View style={styles.container}>
  {token != null &&context.items?  <Header /> :(console.log("login"))}
  
  
  <NavigationContainer>
    <UserProvider>
  <GroceryProvider>
  {token != null &&context.items!== null ? (<Tab.Navigator
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          

          if (route.name === 'Home') {
            iconName = focused
              ? 'home-sharp'
              : 'home-outline';
          } else if (route.name === 'Grocery') {
            iconName = focused ? 'list-sharp' : 'list-outline';
          }
          else if (route.name === 'Profile') {
            iconName = focused ? 'person-sharp' : 'person-outline';
          }
          else if (route.name === 'Cart') {
            iconName = focused ? 'cart-sharp' : 'cart-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#986868',
        tabBarInactiveTintColor: 'gray',
       headerShown:false
      })}
>

        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Grocery" component={GroceryItems} />
        <Tab.Screen name="Profile" component={UserProfile} />
        <Tab.Screen name="Cart" component={ShoppingCart} />
      
      </Tab.Navigator>) : (
        <NavigationScreen/>
      )}
      
      </GroceryProvider>
      </UserProvider>
    </NavigationContainer>
    
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  paddingTop:0,
    
  },
    container1: {
    flex: 1,
   
    alignItems: 'center',
    justifyContent: 'center',
  },
});

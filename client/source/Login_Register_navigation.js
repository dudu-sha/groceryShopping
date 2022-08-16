import  React ,{useEffect}from 'react';
import {createStackNavigator} from '@react-navigation/stack';









import LoginScreen from './LoginScreen'
import RegisterUser from './RegisterUser'
import splash from './splashScreen'
import RecoverPassword from '../Components/RecoverPassword';
import { AsyncStorage } from 'react-native';
const MainStack = createStackNavigator();
const NavigationScreen = ({navigation}) =>{
    
   
  return(
  
    <MainStack.Navigator headerMode='none'>
      
        <MainStack.Screen name='splashScreen' component={splash}/>
        <MainStack.Screen name='LoginScreen' component={LoginScreen}/>
        <MainStack.Screen name='RegisterScreen' component={RegisterUser}/>
        <MainStack.Screen name='RecoverScreen' component={RecoverPassword}/>
    </MainStack.Navigator>
  ) 
  };

export default NavigationScreen ;
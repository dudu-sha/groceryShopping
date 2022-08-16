import React,{useContext,useEffect,useState} from "react";
import {
  ImageBackground,
  StyleSheet,
  Button,
  Text,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Keyboard,
  ScrollView,
  AsyncStorage
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { UserProvider } from "../context/Provider/UserProvider";
// import Icon from 'react-native-vector-icons/Ionicons'


// import { AntDesign } from "@expo/vector-icons";

// import { AuthContext } from "./context/Context";
// import { EvilIcons } from "@expo/vector-icons";
import { UserContext } from "../context/UserContext";

const WIDTH = Math.round(Dimensions.get("window").width);
const HEIGHT = Math.round(Dimensions.get("window").height);

const LoginScreen =({navigation}) => {
  /*  const { signin } = React.useContext(AuthContext);

  const { signUp } = React.useContext(AuthContext); */
  const {login} = React.useContext(UserContext)
  const {userprofile}= React.useContext(UserContext)
  // const token =AsyncStorage.getItem('UserToken')
  // console.log(userprofile[0].token)
 
 
 
 
 

  const [data, setData] = React.useState({
    email: "",
    password: "",
    check_TextInputChange: false,
    secureTextEntry: true,
    validUser: true,
    validPassword: true,
  });
  const TextInputChange = (value) => {
    if (value.length != 0) {
      setData({
        ...data,
        email: value,
        check_TextInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: value,
        check_TextInputChange: false,
      });
    }
  };
  const handelpasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };
  const updateEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleLogin = (email, password) => {
    console.log('here')
     login(email, password); 
  };
  return (
    <UserProvider>

    <View style={styles.container}>
      {/* <EvilIcons name="cart" size={150} color="#BCAAA4" /> */}
      {/* <Icon name="cart-sharp" size="120" color="black" /> */}
      {/* <View style={{height:140,width:140,borderRadius:70,alignItems:'center',justifyContent:"center",marginBottom:20}}> */}
      <Icon name="lock-closed" size={100} color={"#d6c3c3"} />
      <Text style={{fontSize:36,color:'black'}}>Sign-in</Text>

      {/* </View> */}
      <View style={styles.insider}>
        {/* <AntDesign style={styles.inside} name="user" size={22} /> */}
        <Icon name="call-outline" size={22} color={"black"} />
        <TextInput
          style={{fontSize:18,marginLeft:15}}
          placeholder={"Phone Number | Email"}
          onChangeText={(value) => TextInputChange(value)}
        />
      </View>

      <View style={styles.insider}>
      <Icon name="key-outline" size={22} color={"black"} />
        {/* <AntDesign style={styles.inside} name="cloud" size={22} /> */}
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <TextInput
            style={{fontSize:18,marginLeft:15}}
            placeholder={"Password"}
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handelpasswordChange(val)}
          />
          {/* {data.check_TextInputChange ?  */}
          {data.secureTextEntry ? (
            <TouchableOpacity onPress={updateEntry}>
              {/* <AntDesign name="eye" size={22} color={"grey"} /> */}
              <Icon name="eye-off-outline" size={22} color={"black"} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={updateEntry}>
              {/* <AntDesign name="eye-off" size={22} color={"grey"} /> */}
              <Icon name="eye-outline" size={22} color={"black"} />
            </TouchableOpacity>
          )}
          {/* : null} */}
        </View>
      </View>
      <View>
      <TouchableOpacity
          onPress={() => navigation.navigate("RecoverScreen")}
         
        >
      <Text style={{alignSelf:'flex-end',marginTop:10,fontSize:16}}>forgot your password?</Text>
            </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleLogin(data.email, data.password);
          }}
          style={styles.btn}
        >
          <Text style={{ fontSize: 22,color:'white' }}>Login</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("RegisterScreen")}
          style={styles.btn1}
        >
          <Text style={styles.text}>Create an account...</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate("");
          }}
          style={styles.btn2}
        >
          <Text style={styles.free}>Here to check-out the app... </Text>
        </TouchableOpacity> */}
      </View>
      
    </View>
    </UserProvider>
    // </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 90,
    // paddingLeft: ,
    width: WIDTH,
    backgroundColor:'white'
  },
  inside: {
    padding: 10,
    margin: 5,
    alignItems: "center",
  },
  insider: {
    flexDirection: "row",
    paddingRight: 5,
    alignItems: "center",
    height: 50,
    width: WIDTH - 60,
    backgroundColor:'#f9f9f9',
    // borderBottomColor: "#28282B",
    // borderBottomWidth: 1,
    margin: 10,
    paddingLeft: -5,
    borderRadius:12
  },

  text: {
    fontSize: 18,

    opacity: 0.5,
    color: "blue",
  },
  free: {
    fontSize: 17,
    opacity: 0.3,
    color: "blue",
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  btn: {
    height: 50,
    width: 130,
    fontSize: 25,
    textAlign: "center",
    marginTop: 30,
    marginLeft:180,
    backgroundColor:'#b89595',
    borderRadius: 15,
   
    alignItems: "center",
    justifyContent:'center'
  },
  btn1: {
    height: 200,
    width: 300,
    textAlign: "center",
    paddingTop: 100,
    alignItems: "center",
  },
  btn2: {
    height: 30,
    width: 300,
    textAlign: "center",
    paddingTop: 40,
    alignItems: "center",
  },
});
export default LoginScreen;

import React, { useState,useContext } from "react";
import {
  Image,
  StyleSheet,
  Button,
  Text,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";

// import Header from "./components/Header";
// import logo from "../assets/ph-11320.png";
// import { AntDesign } from "@expo/vector-icons";
// import { Title } from "react-native-paper";

import Icon from 'react-native-vector-icons/Ionicons'




import { UserContext } from "../context/UserContext";
const WIDTH = Math.round(Dimensions.get("window").width);
const HEIGHT = Math.round(Dimensions.get("window").height);
const RegisterUser = ({navigation}) => {


    const {register} =React.useContext(UserContext)
  const [data, setData] = useState({
    first_name: "",
    Last_name: "",
    email: "ki@gmail.com",
    password: "pass",
    name:"gfh",
    role:'user'
  });
  return (
    <View style={styles.container}>
      <Icon name="person-circle" size={100} color={"#d6c3c3"} />
      <Text style={{fontSize:36,color:'black'}}>Sign-Up</Text>
     
      <View style={styles.insider}>
        {/* <AntDesign style={styles.inside} name="phone" size={22} /> */}
        <Icon name="call-outline" size={22} color={"black"} />

        <TextInput
          style={{fontSize:18,marginLeft:15}}
          placeholder={"Phone-Number / Email                   "}
          onChangeText={(e) => setData({ ...data, email: e })}
        />
      </View>
      <View style={styles.insider}>
        {/* <AntDesign style={styles.inside} name="cloud" size={22} /> */}
        <Icon name="key-outline" size={22} color={"black"} />

        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <TextInput
            style={{fontSize:18,marginLeft:15}}
            placeholder={"Password                                 "}
            onChangeText={(pass) => setData({ ...data, password: pass })}
            secureTextEntry={true}
          />
  <Icon name="eye-off-outline" size={22} color={"black"} />

          {/* <AntDesign name="eye" size={22} /> */}
        </View>
      </View>
      <View style={styles.insider}>
        {/* <AntDesign style={styles.inside} name="cloudo" size={22} /> */}
        <Icon name="key-outline" size={22} color={"black"} />
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <TextInput
          style={{fontSize:18,marginLeft:15}}
            placeholder={"re-enter password                         "}
            secureTextEntry={true}
          />
          <Icon name="eye-off-outline" size={22} color={"black"} />
          {/* <AntDesign name="eye" size={22} /> */}
        </View>
      </View>

      <View>
        <TouchableOpacity onPress={() => {register(data.name,data.email,data.role,data.password)}} style={styles.btn}>
          <Text style={{ fontSize: 22 ,color:'white'}}> Sign-Up</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
          onPress={() => navigation.navigate("LoginScreen")}
          style={styles.btn1}
        >
          <Text style={styles.text}>Already have an Account?</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    paddingTop:50,
    alignItems: "center",
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
    height: 45,
    width: WIDTH - 40,
    borderColor: "#28282B",
    backgroundColor:'#f9f9f9',
    // borderWidth: 1,
    borderRadius:12,
    margin: 10,
    paddingLeft: -5,
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
  btn1:{
    marginTop:30,
    marginLeft:100
    
  },
  text:{
    fontSize:18
  }
});
export default RegisterUser;

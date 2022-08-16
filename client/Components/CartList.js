import React, { useContext } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

import { GroceryContext } from "../context/GroceryContext";
// import { CarttContext } from "./context/CarttContext";
// import { AntDesign } from "@expo/vector-icons";

// import { CartContext, CartProvider } from "./context/ProductContext";
const WIDTH = Math.round(Dimensions.get("window").width);

// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const CartList = ({ cartItem }) => {
  const context = useContext(GroceryContext);

  return (
    <View style={styles.button}>
      <View style={{ flexDirection: "row" }}>
      <Image
        source={{
          uri: cartItem.avatar
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
        <Text
          style={{ fontSize: 18, padding: 8, paddingTop: 16, color: "black", marginLeft:20 }}
        >
          {cartItem.product}
        </Text>
        <Text
          style={{ fontSize: 18, padding: 8, paddingTop: 16, color: "black" }}
        >
          {cartItem.quantity}
          {/* <Text style={{ fontSize: 12 }}>kg</Text> */}
        </Text>
        
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => context.removeCart(cartItem.id)}>
          <Icon
           style={{
            alignSelf:'flex-end',
            marginTop:20,
            
           }}
            name="remove-circle-outline"
            size={25}
            color='grey'
          />
        </TouchableOpacity>
        {/* <TouchableOpacity  onPress={() => context.deleteItem(cartItem.id)}>
          <Icon
             style={{
              alignSelf:'flex-end',
              marginTop:20,
              paddingLeft:10
             }}
            name="trash-outline"
            size={25}
            color='firebrick'
          />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    width: WIDTH - 50,
    // borderBottomWidth: 1,
    borderColor: "grey",
    marginLeft: 25,
    justifyContent: "space-between",
    padding:5
  },
  itemPhoto: {
    width: 70,
    height:70,
    borderRadius:20
    
   
  },
});
export default CartList;

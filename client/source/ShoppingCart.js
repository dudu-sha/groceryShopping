import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Divider } from "react-native-elements";
import { GroceryContext } from "../context/GroceryContext";
import CartList from "../Components/CartList";
// import { AntDesign } from "@expo/vector-icons";
const WIDTH = Math.round(Dimensions.get("window").width);
const HEIGHT = Math.round(Dimensions.get("window").height);

const Cart = () => {
  const context = useContext(GroceryContext);

  const totalPrice = context.cart.reduce((count, curItem) => {
    return count + curItem.Price * curItem.quantity;
  }, 0);
  return (
    <View style={{ flex:1,backgroundColor:'white' }}>
      <View>
        <View>
          <Text
            style={{
              fontSize: 22,
              paddingStart: 20,
              padding: 5,
              color: "black",
              marginTop:10
            }}
          >
            Cart
          </Text>

          {/* <Divider style={{ height: 2, marginRight: 20, marginLeft: 20 }} /> */}
          {context.cart.length <= 0 && (
            <Text style={{ paddingStart: 40, marginTop: 30, fontSize: 17 }}>
              No items in the cart...
            </Text>
          )}
        </View>

        {context.cart.map((cartItem) => (
          <CartList cartItem={cartItem}/>
        ))}
      </View>
      <View style={{ alignItems:'flex-end',marginRight:10}}>
        <Text
          style={{
            paddingStart: 40,
            marginTop: 30,
            fontSize: 20,
            color: "black",
           
          }}
        >
          Total Price - {totalPrice} {"birr "}
         
        </Text>
        <TouchableOpacity
          onPress={()=>{addCart(item)}}
          style={styles.btn}
        >
          <Text style={{ fontSize: 18,color:'white' }}>Order</Text>
        </TouchableOpacity >
      </View>
      <View style={styles.floating}>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => navigation.navigate("List")}
        >
          {/* <AntDesign name="back" size={15} color="lightgrey" /> */}
          <Text style={{ color: "white" }}>shopping list</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.floating1}>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => navigation.navigate("List")}
        >
          {/* <AntDesign name="back" size={15} color="lightgrey" /> */}
          <Text style={{ color: "white", fontSize: 20 }}>Summerize</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  floating: {
    backgroundColor: "#BDA800",
    height: 30,
    width: 120,
    borderRadius: 10,
    position: "absolute",
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    left: 20,
    top: HEIGHT - 100,
  },
  btn: {
    height: 35,
    width: 100,
    
    textAlign: "center",
    marginTop: 30,
    
    backgroundColor:'#986868',
    borderRadius: 5,
   
    alignItems: "center",
    justifyContent:'center'
  },
  floating1: {
    backgroundColor: "#BDA800",
    height: 30,
    width: 120,
    borderRadius: 10,
    position: "absolute",
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    right: 20,
    top: HEIGHT - 100,
  },
});

export default Cart;

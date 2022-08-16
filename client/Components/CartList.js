import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

// import { CarttContext } from "./context/CarttContext";
// import { AntDesign } from "@expo/vector-icons";

// import { CartContext, CartProvider } from "./context/ProductContext";
const WIDTH = Math.round(Dimensions.get("window").width);

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const CartList = ({ cartItem }) => {
//   const context = useContext(CarttContext);

  return (
    <View style={styles.button}>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{ fontSize: 18, padding: 8, paddingTop: 16, color: "black" }}
        >
          {cartItem.product}
        </Text>
        <Text
          style={{ fontSize: 18, padding: 8, paddingTop: 16, color: "black" }}
        >
          {cartItem.quantity}
          <Text style={{ fontSize: 12 }}>kg</Text>
        </Text>
        
      </View>
      <View style={{ flexDirection: "row" }}>
        {/* <TouchableOpacity onPress={() => context.removeCart(cartItem.id)}>
          <AntDesign
            style={{
              fontSize: 15,
              paddingRight: 20,
              paddingTop: 21,
              color: "firebrick",
            }}
            name="minuscircle"
            size={15}
          />
        </TouchableOpacity> */}
        {/* <TouchableOpacity>
          <AntDesign
            style={{ fontSize: 18, paddingTop: 21, color: "grey" }}
            name="delete"
            size={20}
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
    borderBottomWidth: 1,
    borderColor: "grey",
    marginLeft: 25,
    justifyContent: "space-between",
    padding:5
  },
});
export default CartList;

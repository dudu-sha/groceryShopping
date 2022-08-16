import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SectionList,
  Dimensions,
  Alert,
  ActivityIndicator,
  Image,
  FlatList
} from "react-native";
import {GroceryContext}  from '../context/GroceryContext'
// import { Badge } from "react-native-paper";
// import { AntDesign } from "@expo/vector-icons";

// import Header from "./components/Header";
// import { Feather } from "@expo/vector-icons";
// import Popover from "react-native-popover-view";
// import icon from "../assets/ph-11320.png";

const WIDTH = Math.round(Dimensions.get("window").width);
const HEIGHT = Math.round(Dimensions.get("window").height);
const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.avatar
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.Price}</Text>
      <Text style={styles.itemText}>hello</Text>
    </View>
  );}
const GroceryItems= () => {
  const [visible, setVisible] = useState(true);
  const Showpopover = () => {
    setVisible({
      visible: !visible,
    });
  };

  const context = useContext(GroceryContext);
  const {addCart} = useContext(GroceryContext)
  useEffect(() => {
    setTimeout(async () => {
     context.getItems()
    }, 1000);
  }, []);

  

  console.log(context.items);
  const f = context.cart.length;
  const cartnumber = context.cart.reduce((count, curItem) => {
    return count + curItem.quantity;
  }, 0);
  // console.log(cartnumber)
  // console.log(f)

  var keys = [];
  var ByClass = [];
  var title = [];
  var obj = {};
  for (var i in context.items) {
    /* const cls = context.items[i].cls; */
    keys.push(context.items[i].cls);
    var pro = [];
    for (var j in context.items) {
      if (context.items[j].cls === keys[i]) {
        pro.push({
          List:[
            {product: context.items[j].product,
          Price: context.items[j].Price,
          id: context.items[j]._id,
          title: context.items[j].cls,
          image:context.items[j].product,
          avatar:'https://images.unsplash.com/photo-1580913428023-02c695666d61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
            }
        ]
           });
      }
    }
    if (title.indexOf(keys[i]) == -1) {
      title.push(keys[i]);

      (obj = { title: keys[i], data: pro }), ByClass.push(obj);
    }
  }
console.log(ByClass[1])
  return (
    <View style={{backgroundColor:'white',flex:1}}>
     {/* <Header/>
        <TouchableOpacity onPress={() => navigation.navigate("add")}>
        <Text>add...</Text>
      </TouchableOpacity>
      <Text>__________________</Text> */}
      {/* <TouchableOpacity onPress={() => context.getItems()}>
        <Text>refresh</Text>
      </TouchableOpacity>  */}
      {/*7 {context.cart.map(item=> <Text>{item.product}</Text>)} */}

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
         
        }}
      >
        
       
        <SectionList
          sections={ByClass}
          renderSectionHeader={({ section }) => (
            <Text style={styles.section}>{section.title.toUpperCase()}</Text>
          )}
        
          renderItem={({ item }) => (
            
            <View  >
             <FlatList
        horizontal
        // numColumns={2}nb vc

        data={item.List}
        renderItem={({ item }) => <ListItem item={item} />}
        showsHorizontalScrollIndicator={false}
      />
            <TouchableOpacity
          onPress={()=>{addCart(item)}}
          style={styles.btn}
        >
          <Text style={{ fontSize: 18,color:'white' }}>Add</Text>
        </TouchableOpacity >
          </View>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>

      {/* <View style={styles.floating}> */}
        {/* <TouchableOpacity onPress={() => navigation.navigate("cart")}>
          <Feather
            style={{ marginBottom: -50, marginRight: 5 }}
            name="shopping-cart"
            color="grey"
            size={50}
          />
          <Badge style={{ marginBottom: 20, height: 22, width: 22 }}>
            <Text style={{ color: "white", fontSize: 15 }}>{f}</Text>
          </Badge>
        </TouchableOpacity> */}
      {/* </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  floating: {
    position: "absolute",
    backgroundColor: "#BDA800",
    alignItems: "center",
    justifyContent: "center",
    right: WIDTH / 2 - 30,
    top: HEIGHT - 80,
    height: 70,
    width: 70,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: "white",
  },
  section: {
    flex: 1,
    width: WIDTH - 20,
    color:'black',
    fontSize: 20,
    // marginTop: 10,
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 1,
   
  },
  item: {
    margin: 10,
    
   
   
  },
  itemPhoto: {
    width: 100,
    height: 120,
    // borderRadius:50
    
   
  },
  itemSection:{
    marginTop: 30,
    
  },
  itemText:{
    fontSize:18,
    padding:5
  },
  btn: {
    height: 25,
    width: 50,
    
    textAlign: "center",
    marginTop: 30,
    
    backgroundColor:'#986868',
    borderRadius: 5,
   
    alignItems: "center",
    justifyContent:'center'
  },
});
export default GroceryItems;

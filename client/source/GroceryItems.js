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
import { Divider } from "react-native-elements";

import { Icon } from "react-native-elements/dist/icons/Icon";
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
      <View style={{flexDirection:'row'}}>
      <Image
        source={{
          uri: item.avatar
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <View style={{fontSize:20,alignSelf:'flex-start',marginLeft:20}}>
      <Text style={{fontSize:20}}>{item.product.charAt(0).toUpperCase() +  item.product.slice(1)}</Text>
      <Text style={styles.itemText}>Price - {item.Price}</Text>
      </View>
      </View>
      <TouchableOpacity
          onPress={()=>{addCart(item)}}
          style={styles.btn}
        >
          <Icon name='add-circle' size={30} color='#986868'/>
        </TouchableOpacity >
    </View>

  );}
  renderSectionHeader = ({ section }) => {
    return <Text>{section.title}</Text>
  }
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

  

  // console.log(context.items);
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
        
            product: context.items[j].product,
          Price: context.items[j].Price,
          id: context.items[j]._id,
          title: context.items[j].cls,
          image:context.items[j].product,
                 avatar:'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFuYW5hfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
           
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
      {/* {context.items.map(item=> <Text>{item.Product}</Text>)}? */}

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
         
        }}
      >
        
       
        <SectionList
          sections={ByClass}
          // renderSectionHeader={renderSectionHeader()}
          //    renderItem={renderSection}
          renderSectionHeader={({ section }) => (
            
            <Text style={styles.section}>{section.title.toUpperCase()}</Text>
            

          )}
        
          renderItem={({ item }) => (
            
            <View style={{flex:1}} >
              <View style={styles.item}>
      <View style={{flexDirection:'row'}}>
      <Image
        source={{
          uri: item.avatar
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <View style={{fontSize:18,alignSelf:'flex-start',marginLeft:20}}>
      <Text style={{fontSize:18,color:'black'}}>{item.product.charAt(0).toUpperCase() +  item.product.slice(1)}</Text>
      <Text style={styles.itemText}>Price - {item.Price}</Text>
      </View>
      </View>
      <TouchableOpacity
          onPress={()=>{addCart(item)}}
          style={styles.btn}
        >
          <Icon name='add-circle' size={30} color='#DACACA'/>
        </TouchableOpacity >
    </View>

      {/* <Divider style={{marginLeft:20,marginRight:20}}/> */}

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
    // borderColor: "white",
    
  },
  section: {
    flex: 1,
    width: WIDTH-10,
    color:'black',
    fontSize: 20,
    // marginTop: 10,
    backgroundColor: "#323232",
    padding: 10,
    borderRadius: 10,
    marginTop:2,
   elevation:1,
   marginLeft:10,
   color:'white'
  },
  item: {
    flex:1,
    margin: 10,
    flexDirection:'row',
    marginLeft:10,
    justifyContent:'space-between'
   
   
  },
  itemPhoto: {
    width: 60,
    height: 40,
    borderRadius:20
    
   
  },
  itemSection:{
    marginTop: 30,
    
  },
  itemText:{
    fontSize:16,
   paddingTop:5
  },
  btn: {
  alignSelf:'flex-end'
    
    
  },
});
export default GroceryItems;

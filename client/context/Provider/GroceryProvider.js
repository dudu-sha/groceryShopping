import React, { createContext, useReducer, useState, useEffect } from "react";
import {
  ADD_TO_CART,
  ADD_ITEMS,
  REMOVE_CART,
  GET_ITEMS,
  ITEMS_LOADING,
  DELETE_ITEM,
} from "../Reducer/GroceryReducer";
import axios from "axios";
import GroceryReducer from "../Reducer/GroceryReducer";
import { GroceryContext} from "../GroceryContext";


const initialState = {};
export const CartContext = React.createContext(initialState);

export const GroceryProvider = ({ children }) => {
  const [cartstate, dispatch] = useReducer(GroceryReducer, {
    cart: [],
    items:[
    
  ], 
  });

  /* const cartContext = React.useMemo(()=>({ */
  const getItems = async() => {
   await axios
      .get("http://192.168.1.10:5000/api/items")
      .then((res) => {
        console.log('res')
        dispatch({
          type: GET_ITEMS,
          payload: res.data,
        });
      })

      .catch((err) => console.log(err));
  };
  const addItems = (product, cls, Price) => {
    console.log("gothere")
    axios
      .post("http://192.168.1.10:5000/api/items", {
        product: product,
        cls: cls,
        Price: Price,
      })
      .then((res) => dispatch({ type: ADD_ITEMS, payload: res.data }))
      .catch( console.log("error"));
  };
  const deleteItem = (id) => {
    axios
      .delete(`http://192.168.1.10:5000/api/items/${id}`)
      .then((res) => dispatch({ type: DELETE_ITEM, payload: id }))
      .catch(console.log(id));
  };
  const addCart = (product) => {
    setTimeout(() => {
      dispatch({ type: ADD_TO_CART, product: product });
    }, 500);
  };
  const removeCart = (productId) => {
    setTimeout(() => {
      dispatch({ type: REMOVE_CART, productId: productId });
    }, 500);
  };
  const setItemsLoading = () => {
    dispatch({ type: ITEMS_LOADING });
  };
  return (
    <GroceryContext.Provider
      value={{
        items: cartstate.items,
        cart: cartstate.cart,
        addCart: addCart,
        addItems: addItems,
        deleteItem: deleteItem,
        removeCart: removeCart,
        getItems: getItems,
        setItemsLoading: setItemsLoading,
      }}
    >
      {children}
    </GroceryContext.Provider>
  );
};

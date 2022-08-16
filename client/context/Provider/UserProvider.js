import React, { createContext, useReducer, useState, useEffect } from "react";










import {
  LOGIN

} from "../Reducer/UserReducer";
import axios from "axios";
import UserReducer from "../Reducer/UserReducer";
import { UserContext} from "../UserContext";


// const initialState = {};
// export const CartContext = React.createContext(initialState);

export const UserProvider = ({ children }) => {
  const [userstate, dispatch] = useReducer(UserReducer, {
    
    userprofile:[ ]});
    const headers = {
        "Content-Type": "application/json",
        
      };
  /* const cartContext = React.useMemo(()=>({ */
    const login = async (email,password) => {
        // console.log(password)
    const profile =  await  axios
          .post("http://192.168.1.12:5000/api/auth", {
            email,
            password
         
          })
          .then((res) => {
            // console.log(JSON.stringify(res.data))
            dispatch({
              type: LOGIN,
              payload: res.data,
            });
          })
          .catch( e=>console.log(e));
      };
      const register = async (name,email,role,password) => {
        console.log(name)
    const profile =  await  axios
          .post("http://192.168.1.12:5000/api/users", {
            name:name,
            email:email,
            
            role:role,
            password:password
         
          })
          .then((res) => console.log(res))
          .catch( e=>console.log(e));
      };
  return (
    <UserContext.Provider
      value={{
        userprofile: userstate.userprofile,
        login: login,
        register 
 
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

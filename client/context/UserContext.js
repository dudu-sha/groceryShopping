import * as React from "react";










export const UserContext = React.createContext({
    userprofile:[
    ], 
  
  login: (email,password) => {},
  register:(name,email,role,password) =>{}
 
});
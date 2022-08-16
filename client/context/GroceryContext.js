import * as React from "react";

export const GroceryContext = React.createContext({
    items:[
    ], 
  cart: [],
  addCart: (product) => {},
  removeCart: (ProductId) => {},
  getItems: () => {},
  setItemsLoading: () => {},
  addItems: () => {},
});
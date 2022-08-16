import { Alert } from "react-native";
const GroceryReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_CART":
      return removeCart(action.productId, state);
    case "ADD_ITEMS":
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case "DELETE_ITEM":
      Alert.alert("deleted");
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    case "ADD_TO_CART":
      return addCart(action.product, state);
    case "GET_ITEMS":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case "ITEMS_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

const addCart = (product, state) => {
  const updatedcart = [...state.cart];
  const updatedItemIndex = updatedcart.findIndex(
    (item) => item.product === product.product
  );
  if (updatedItemIndex < 0) {
    updatedcart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedcart[updatedItemIndex],
    };
    updatedItem.quantity++;
    updatedcart[updatedItemIndex] = updatedItem;
  }
  return {
    ...state,
    cart: updatedcart,
  };
};

const removeCart = (productId, state) => {
  const updatedcart = [...state.cart];
  const updatedItemIndex = updatedcart.findIndex(
    (item) => item.id === productId
  );
  const updatedItem = {
    ...updatedcart[updatedItemIndex],
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedcart.splice(updatedItemIndex, 1);
  } else {
    updatedcart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedcart };
};

export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_ITEMS = "ADD_ITEMS";
export const REMOVE_CART = "REMOVE_CART";
export const ITEMS_LOADING = "ITEMS_LOADING";
export const GET_ITEMS = "GET_ITEMS";
export const DELETE_ITEM = "DELETE_ITEM";

export default GroceryReducer;

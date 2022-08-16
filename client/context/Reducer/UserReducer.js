import { Alert,AsyncStorage } from "react-native";
const UserReducer = (state, action) => {








  switch (action.type) {
    
    case "LOGIN":
          
                     AsyncStorage.setItem(
                      'UserToken',
                      action.payload.token
                    );
                    console.log(' save token')
                   try {
                    AsyncStorage.setItem('Profile',action.payload)
                   } catch (error) {
                     console.log("error")
                   } 
                  
            
console.log(action.payload)
      
      return {
        ...state,
        
       userprofile: [action.payload, ...state.userprofile],
         
      };
   
  
    default:
      return state;
  }
};






export const LOGIN = "LOGIN";


export default UserReducer;

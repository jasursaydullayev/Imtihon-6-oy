import { createContext, useReducer } from "react";
import { useEffect } from "react";
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from "../firebase/firebaseConfig";
export const GlobalContext = createContext();

const changeState = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null};
      case "AUTH_CHANGE":
        return { ...state, onAuthChange: true};
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    onAuthChange: false,
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({type: "LOGIN", payload: user})
      dispatch({type: "AUTH_CHANGE", payload: true})
    })
  }, [])
  return <GlobalContext.Provider value={{...state, dispatch}}>{children}</GlobalContext.Provider>;
}

export default GlobalContext;

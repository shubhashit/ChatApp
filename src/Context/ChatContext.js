import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { auth } from '../conponents/firebase';
import { AuthContext } from "./AuthContext";

export const ChatContext = createContext();

export const ChatContextProvider = (props) => {
    const currentUser = useContext(AuthContext);

    const INITIAL_STATE = {
        chatId:"null",
        user:{}
    }
    const chatReducer = (state,action)=>{
        switch (action.type){
            case "CHANGE_USER":
                return{
                    user : action.payload,
                    chatId: action.payload.uid > currentUser.currentUser.uid
                        ? action.payload.uid + currentUser.currentUser.uid
                        : currentUser.currentUser.uid + action.payload.uid
                };
            default:
                return state;
        }
    }
    const [state,dispatch] = useReducer(chatReducer,INITIAL_STATE);
    return (
        <ChatContext.Provider value={{ data:state,dispatch }}>
            {props.children}
        </ChatContext.Provider>
    )
}


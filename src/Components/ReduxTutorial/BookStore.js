import React from 'react'
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const Buy_Book = "Buy_Book";

const intialState = {
    noOfBooks: 10,
}

// Action

function BuyBook() {
    return {
        type: Buy_Book,
        info: "My first redux",
    }
}

// Work of reducer to return value of:

// (prevState,action)=>newState

const reducer=(state=intialState,action)=>{
    switch(action.type){
        case "Buy_Book": return{
            ...state,
            noOfBooks:state.noOfBooks-1,
        }
        default: return state
    }
}

const store=createStore(reducer,composeWithDevTools());
console.log("IntialState",store.getState());
const unsub=store.subscribe(()=>{console.log("updated state value",store.getState());});
store.dispatch(BuyBook());
unsub();
export default store;
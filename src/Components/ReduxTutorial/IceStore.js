import React from 'react';
import {createStore,combineReducers,applyMiddleware} from 'redux';

const IceCream="IceCream";
const buy_pen="buy_pen";

const buyIce={
    type:IceCream,
    payload:"First Action",
}

const buypen={
    type:buy_pen,
    payload:"Second Action",
}

const IceintialState={
    no_of_IceCream:10,
}

const PenintialState={
    no_of_Pen:20,
}

const Icereducer=((state=IceintialState,action)=>{
    switch(action.type){
        case "IceCream":return{
            ...state,
            no_of_IceCream:state.no_of_IceCream-1,
        };
        default : return state
    }
})

const Penreducer=((state=PenintialState,action)=>{
    switch(action.type){
        case "buy_pen":return{
            ...state,
            no_of_Pen:state.no_of_Pen-5,
        };
        default : return state
    }
})

const logger= store=>{
    return next=>{
        return action=>{
            const result=next(action)
            console.log("Middlewate log",result);
            return result;
        }
    }
}

const Reducer=combineReducers({
    IceCream:Icereducer,
    Pens:Penreducer
})

const store=createStore(Reducer,applyMiddleware(logger));
console.log("IntialState",store.getState());
const unsubscribe=store.subscribe(()=>{console.log("UpdateState",store.getState());})
store.dispatch(buyIce)
store.dispatch(buypen)
unsubscribe();
export default store;

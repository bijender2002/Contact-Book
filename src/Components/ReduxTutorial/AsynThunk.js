import redux from 'redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; 
import axios from 'axios';

const IntialState={
    loading:false,
    users:[],
    error:''
}

const UserRequest='UserRequest';
const UserSuccess='UserSuccess';
const UserError='UserError';

function userRequest (){
    return {
        type:UserRequest
    }
}

function userSuccess (users){
    return {
        type:UserSuccess,
        payload:users
    }
}

function userError (error){
    return {
        type:UserError,
        payload:error
    }
}

const reducer=(state=IntialState,action)=>{
    switch(action.type){
        case "UserRequest": return{
            ...state,
            loading:true
        }

        case "UserSuccess": return{
            loading:false,
            users:action.payload,
            error:''
        }

        case "UserError": return{
            loading:false,
            users:[],
            error:action.payload
        }
    }
}

const fetchUser=()=>{
    return function(dispatch){
        dispatch(userRequest());
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            const users=res.data.map(user=>user.name);
            dispatch(userSuccess(users))
        })
        .catch(err=>{
            // console.log(err);
            dispatch(userError(err.message))
        })
    }
}

const store=createStore(reducer,applyMiddleware(thunk));
store.subscribe(()=>{console.log(store.getState());});
store.dispatch(fetchUser())

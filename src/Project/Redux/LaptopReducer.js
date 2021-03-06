import {BuyLaptop} from './LaptopType';

const intialState={
    noofLaptop:20
}

const laptopReducer=(state=intialState,action)=>{
    switch (action.type) {
        case BuyLaptop:return{
            ...state,
            noofLaptop:state.noofLaptop-1
        }            
    
        default:
            return state;
    }
}

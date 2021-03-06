import {BUY_BOOK} from './BookType';

const intialState={
    numberOfBooks:10
}

const bookReducer=(state=intialState,action)=>{
    switch(action.type){
        case BUY_BOOK: return{
            ...state,
            numberOfBooks:state.numberOfBooks-action.payload
        }
        default: return state
    }
}

export default bookReducer;
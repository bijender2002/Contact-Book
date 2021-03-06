import React from 'react';
import {buyBook} from '../Redux/Book/Index'
import {connect} from 'react-redux';
function BookContainer(props) {
    const [number, setNumber] = React.useState(1)
    return (
        <div>
            <h1>Books Components</h1>
           <h2>No Of Books: {props.numberOfBooks}</h2> 
           <input type="number" value={number} onChange={e=> setNumber(e.target.value)} />
           <button onClick={()=>props.buyBook(number)}>Buy Book</button>
        </div>
    )
}

const mapStatetoProps=(state)=>{
    return{
        numberOfBooks:state.numberOfBooks
    }
}

const mapDispatchtoProps=(dispatch)=>{
    return{
        buyBook:function(number){
            dispatch(buyBook(number))
        }
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(BookContainer);
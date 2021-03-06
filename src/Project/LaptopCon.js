import React from 'react'
import {buyLaptop} from '../Project/Redux/Data';
import {useSelector,useDispatch} from 'react-redux';
function LaptopCon() {
    const noofLaptop= useSelector(state => state.noofLaptop);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Laptop Container</h1>
            <h2>numofLaptop: {noofLaptop}</h2>
            <button onClick={()=>dispatch(buyLaptop(noofLaptop))}>Buy_Laptop</button>
        </div>
    )
}

export default LaptopCon;


import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { BuyCake } from "../redux";

function HooksCakeContainer(){
    const numberOfCakes=useSelector(state => state.cake.numberOfCakes)
    const dispatch=useDispatch()
    return(
    <div>
        <h2>Number of cakes -{numberOfCakes} </h2>
        <button onClick={()=> dispatch(BuyCake())}>Buy Cake</button>
    </div>
    )
}
export default HooksCakeContainer
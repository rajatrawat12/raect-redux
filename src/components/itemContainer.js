import { connect } from "react-redux"
import { BuyCake,buyIceCream } from "../redux"
function ItemContainer(props){
    return(
        <div>
            <h2>Item -{props.item}</h2>
            <button onClick={props.buyitem}>Buy Items</button>
        </div>
    )
}
const mapStateToProps=(state,ownprops) => {
const itemState=ownprops.cake?state.cake.numberOfCakes:state.iceCream.numOfIceCreams
return{
    item:itemState
}

}
const mapDispatchToProps=(dispatch,ownprops) => {
const dispatchfunction=ownprops.cake?()=>dispatch(BuyCake()):()=>dispatch(buyIceCream())
return{
    buyitem:dispatchfunction
}
}




export default connect (mapStateToProps,mapDispatchToProps)(ItemContainer)
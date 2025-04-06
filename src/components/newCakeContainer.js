import {react,useState}from 'react';
import { connect } from 'react-redux';
import { BuyCake } from '../redux';

function CakeContainer (props){
    const [number,setnumber]=useState(1)

    return(
        <div>
            <h1>Number of Cakes - {props.numberOfCakes}</h1>
            <input type="text" value={number} onChange={event => setnumber(event.target.value)}/>
            <button onClick={()=>props.BuyCake(number)}>Buy{number} Cakes</button>
        </div>
    )

}
const mapStateToProps = (state) =>{
    return {
        numberOfCakes: state.cake.numberOfCakes
    }

}
const mapDispatchToProps = (dispatch) =>{
    return  {
        BuyCake:number=>dispatch(BuyCake(number))
}
}



export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer)
import react from 'react';
import { connect } from 'react-redux';
import { BuyCake } from '../redux';

function CakeContainer (props){

    return(
        <div>
            <h1>Number of Cakes - {props.numberOfCakes}</h1>
            <button onClick={props.BuyCake}>Buy Cakes</button>
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
        BuyCake:()=>dispatch(BuyCake())
}
}



export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer)
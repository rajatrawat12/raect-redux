import { FETCH_USERS_FAILURE,FETCH_USERS_SUCCESS,FETCH_USERS_REQUEST } from "./userType"
const initalState={
    loading:false,
    data:[],
    error:""

}
const reducer = (state= initalState,action) => {
    switch(action.type) {
        case "FETCH_USERS_REQUEST":
           return {
            ...state,
            loading: true

            }
        case "FETCH_USERS_SUCCESS":
            return {
                loading: false,
                users:action.payload,
                error:""
            }  
            case "FETCH_USERS_FAILURE":
            return {
                loading: false,
                users:[],
                error:action.error
            }  
            default: return state  
    }
}
console.log(reducer)
export default reducer  
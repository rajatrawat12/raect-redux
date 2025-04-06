import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE } from "./userType"
import axios from "axios"
export const fetchUserRequest=()=>{
    return{
        type:FETCH_USERS_REQUEST
    }
}
export const fetchUserSuccess=(users)=>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}
export const fetchUserFailure=(error)=>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:[],
        error:error
    }
}
export const fetchApi=()=>{
 return (dispatch)=>{
    dispatch(fetchUserRequest)
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response=>{
        const users=response.data
        dispatch(fetchUserSuccess(users))
    })
    .catch(error=>{
        const errormsg=error.message
        dispatch(fetchUserFailure(errormsg))
    })
 }
}
export default fetchApi
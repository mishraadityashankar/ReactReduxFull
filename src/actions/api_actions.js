import axios from "axios";
import { SET_ERROR,SET_LOADING,SET_USERDATA} from "../constants";


const GetRequestActionCreater = () => {
    return (dispatch)=>{
       dispatch(loading_Action())
       axios.get("https://jsonplaceholder.typicode.com/users")
       .then( (res) => {
           console.log(res.data)
           dispatch(Set_Data_Action(res.data))
       }).catch((err)=>{
           console.log(err.message)
           dispatch(Set_Error_Action(err.message))
        })
    }
}

 const Set_Data_Action = (userdata) => {
    return {
    type : SET_USERDATA,
    payload : userdata
}}
 const Set_Error_Action = (error) => { return {
    type: SET_ERROR,
    payload : error
}}
 const loading_Action = () => {return {
    type: SET_LOADING
}}

export default GetRequestActionCreater;
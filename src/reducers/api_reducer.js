import { SET_ERROR, SET_LOADING, SET_USERDATA } from "../constants";


const initialState = {
    loading : false,
    userData : [],
    error: ""
}
const APIReducer = (state=initialState,action) =>{
    switch(action.type){
        case SET_LOADING: return {
            ...state,
            loading : true
        }
        case SET_USERDATA: return {
            ...state,
            loading : false,
            userData : action.payload
        }
        case SET_ERROR: return {
            ...state,
            loading : false,
            error : action.payload
        }
        default : return state
    }
}

export default APIReducer;
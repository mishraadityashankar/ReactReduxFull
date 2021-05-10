import {BUY_ICECREAM} from '../constants'

const initialState = {
    noOfIceCreams: 30
}

const IceCreamReducer = (state=initialState,action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            noOfIceCreams : state.noOfIceCreams -1
         }
        default : return state
  }
}
export default IceCreamReducer;

import { BUY_CAKE} from "../constants";

const intialState = {
    noOfCakes : 10
}

const CakeReducer = (state=intialState,action)=>{
     switch (action.type) {
         case BUY_CAKE : return {
             ...state,
             noOfCakes : state.noOfCakes -1
         }
         default : return state
     }
}

export default CakeReducer;
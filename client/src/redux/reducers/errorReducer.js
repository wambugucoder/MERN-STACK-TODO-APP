import { GET_ERRORS } from "../action/types";

const INITIAL_STATE = {
    anyErrors:false,
    errors:[]
};
 
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ERRORS:
            return {...state,
                anyErrors:true,
                errors:action.payload,
               
            };
        default:
            return state
    }
}
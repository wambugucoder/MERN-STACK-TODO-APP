import { GET_TODO_LIST, TODO_LOADING, ADD_TODO, DELETE_TODO, READ_SPECIFIC_ID, UPDATE_TODO } from "../action/types";

const INITIAL_STATE = {
    isLoading:false,
    todo:[],
    isRetrieved:false,
    isAdded:false,
    isDeleted:false,
    isRead:false,
    isUpdated:false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TODO_LIST :
            return {...state,
                isLoading:false,
                todo:action.payload,
                isRetrieved:true
            };
            case TODO_LOADING :
                return {...state,
                    isLoading:true,
                    
                };
                case ADD_TODO :
                    return {...state,
                        isAdded:true,
                        
                    };
                    case DELETE_TODO :
                        return {...state,
                            isDeleted:true,
                            
                        };
                        case READ_SPECIFIC_ID :
                            return {...state,
                                isRead:true,
                                todo:action.payload
                            };
                            case UPDATE_TODO :
                            return {...state,
                                isUpdated:true,
                            };
        default:
            return state
    }
}
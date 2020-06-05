import { GET_TODO_LIST, TODO_LOADING, GET_ERRORS, ADD_TODO, DELETE_TODO,READ_SPECIFIC_ID, UPDATE_TODO } from "./types";
import axios from "axios";
export const getTodo = () => dispatch => {
    dispatch({
        type:TODO_LOADING,
        
      })
  axios.get("/api/todo/all").then(res =>
    dispatch({
      type:GET_TODO_LIST ,
      payload: res.data
    })
  )
  .catch(err => 
    dispatch({
        type:GET_ERRORS ,
        payload: err.response.data
      })
    );
};
export const addTodo = (TodoData) => dispatch => {
  dispatch({
    type:TODO_LOADING,
    
  })
  axios.post("/api/todo/create",TodoData).then(res =>
    dispatch({
      type: ADD_TODO,
      payload: res.data
    })
  )
    .catch(err => 
      dispatch({
          type:GET_ERRORS ,
          payload: err.response.data
        })
  );
  
};
export const deleteTodo = (id) => dispatch => {
  dispatch({
    type:TODO_LOADING,
    
  })
  axios.delete(`api/todo/delete/${id}`).then(res =>
    dispatch({
      type:DELETE_TODO ,
      payload: res.data
    }) )
     .catch(err => 
      dispatch({
          type:GET_ERRORS ,
          payload: err.response.data
        })
  );
};
export const getDetails = (id) => dispatch => {
  dispatch({
    type:TODO_LOADING,
    
  })
  axios.get(`/api/todo/read/${id}`).then(res =>
    dispatch({
      type: READ_SPECIFIC_ID,
      payload: res.data
    })
  ) .catch(err => 
    dispatch({
        type:GET_ERRORS ,
        payload: err.response.data
      })
);
};
export const updateTodo = (id,TodoData) => dispatch => {
  dispatch({
    type:TODO_LOADING,
    
  })
  axios.put(`/api/todo/update/${id}`,TodoData).then(res =>
    dispatch({
      type: UPDATE_TODO,
      payload: res.data
    })
  )
  .catch(err => 
    dispatch({
        type:GET_ERRORS ,
        payload: err.response.data
      })
);
};
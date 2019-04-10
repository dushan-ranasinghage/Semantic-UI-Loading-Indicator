import axios from 'axios'

import { GET_POSTS_ENDPOINT } from './EndPoints'

export function getPostData(){
    return (dispatch) => {
        axios.get(GET_POSTS_ENDPOINT)
          .then(res => {
            if(res.status === 200){
              dispatch({ type: 'GET_POSTS', payload: res.data })
            } else {
              dispatch({ type: 'GET_POSTS_SUCCEESS', payload: res.data })
            }
          })
          .catch(err => {
              dispatch({ type: 'GET_POST_ERROR', payload: err.message })
          })
      }
} 

export function setLoading(){
  return (dispatch) => {
          dispatch({ type: 'SET_LOADING'})
  }
}
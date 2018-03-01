import { toast } from 'react-toastify';

/*Action types */
import {
  AUTH_USER_REQUEST, AUTH_USER_SUCCESS, AUTH_USER_FAILURE,
  CHECK_AUTH_REQUEST, CHECK_AUTH_SUCCESS, CHECK_AUTH_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE,
  GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE
} from '../Types/actionTypes'


const API_URL = 'http://localhost:8081/api/users'


export const authUser = (user, history) => {
  return function (dispatch) {
    dispatch({
      type: AUTH_USER_REQUEST
    })
    fetch(`${API_URL}/authUser`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(data => {
        /*Redirect user to home */
        history.push({
          pathname: '/home',
          search: '',
          state: {}
        })
        /*Notification toast */
        toast.success(`Welcome ${user.username}`, {
          position: toast.POSITION.TOP_RIGHT
        });
        /*Dispatch action */
        dispatch({
          type: AUTH_USER_SUCCESS,
          session: data
        })
      })
      .catch(error => {
        /*Notification toast */
        toast.error("Please check your username and password", {
          position: toast.POSITION.TOP_RIGHT
        });
        /*Dispatch action */
        dispatch({
          type: AUTH_USER_FAILURE,
          error: error
        })
      })
  }
}

export const checkAuth = () => {
  return function (dispatch) {
    dispatch({
      type: CHECK_AUTH_REQUEST
    })
    fetch(`${API_URL}/getUser`)
      .then(response => response.json())
      .then(data => {
        fetch(`${API_URL}/checkAuth`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ session: data.session }),
        })
          .then(response => response.json())
          .then(data => {
            dispatch({
              type: CHECK_AUTH_SUCCESS,
              valid: data
            })
          })
        //window.alert(JSON.stringify(data, null, 4))
      })
      .catch(error => {
        dispatch({
          type: CHECK_AUTH_FAILURE,
          error: error
        })
      })
  }
}


export const logout = (history, session) => {
  return function (dispatch) {
    dispatch({
      type: LOGOUT_REQUEST
    })
    fetch(`${API_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(session),
    })
      .then(response => response.json())
      .then(data => {
        /*Redirect user to login */
        history.push({
          pathname: '/',
          search: '',
          state: {}
        })
        dispatch({
          type: LOGOUT_SUCCESS,
          login: data
        })
      })
      .catch(error => {
        dispatch({
          type: LOGOUT_FAILURE,
          error: error
        })
      })
  }
}

export const getUser = () => {
  return function (dispatch) {
    dispatch({
      type: GET_USER_REQUEST
    })
    fetch(`${API_URL}/getUser`)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: GET_USER_SUCCESS,
          user: data
        })
      })
      .catch(error => {
        dispatch({
          type: GET_USER_FAILURE,
          error: error
        })
      })
  }
}
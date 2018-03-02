import { toast } from 'react-toastify';

/*Action types */
import {
  SETUP_USER_REQUEST, SETUP_USER_SUCCESS, SETUP_USER_FAILURE,
  CHECK_DB_REQUEST, CHECK_DB_SUCCESS, CHECK_DB_FAILURE
} from '../Types/actionTypes'


const API_URL = 'http://localhost:8081/api/wizard'


export const setupUser = (formData, history) => {
  return function (dispatch) {
    dispatch({
      type: SETUP_USER_REQUEST
    })
    fetch(`${API_URL}/setup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        /*Notification toast */
        toast.success("Installation completed", {
          position: toast.POSITION.TOP_RIGHT
        });
        /*Redirect user to login */
        history.push({
          pathname: '/',
          search: '',
          state: {}
        })
        /*Dispatch action */
        dispatch({
          type: SETUP_USER_SUCCESS,
          users: data
        })
      })
      .catch(error => {
        /*Notification toast */
        toast.error("Installation failed", {
          position: toast.POSITION.TOP_RIGHT
        });
        /*Dispatch action */
        dispatch({
          type: SETUP_USER_FAILURE,
          error: error
        })
      })
  }
}

export const checkDB = () => {
  return function (dispatch) {
    dispatch({
      type: CHECK_DB_REQUEST
    })
    fetch(`${API_URL}/checkDB`)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: CHECK_DB_SUCCESS,
          dbs: data
        })
      })
      .catch(error => {
        dispatch({
          type: CHECK_DB_FAILURE,
          error: error
        })
      })
  }
}

export const otherCheck = (name) => {
  return function (dispatch) {
    fetch(`${API_URL}/checkDB`)
      .then(response => response.json())
      .then(data => {

        dispatch({
          type: "@@redux-form/START_ASYNC_VALIDATION",
          meta: {
            field: "dbName",
            form: "setup"
          }
        })

        let res = true;
        for (let i = 0; i < data.length; ++i) {
          if (data[i] === name) {
            res = false;
            break;
          }
        }

        if (!res) {
          dispatch({
            type: "@@redux-form/STOP_ASYNC_VALIDATION",
            error: true,
            meta: {
              form: "setup"
            },
            payload: {
              dbName: "That database name is taken",
              _error: "username-exists"
            }
          })
        }
        else {
          dispatch({
            type: "@@redux-form/STOP_ASYNC_VALIDATION",
            error: true,
            meta: {
              form: "setup"
            },
            payload: {
              dbName: "",
              _error: ""
            }
          })
        }
      })
      .catch(error => {
        dispatch({
          type: "@@redux-form/STOP_ASYNC_VALIDATION",
          error: true,
          meta: {
            form: "setup"
          },
          payload: {
            dbName: "",
            _error: ""
          }
        })
      })
  }
}

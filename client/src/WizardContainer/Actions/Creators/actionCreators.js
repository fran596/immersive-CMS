import {SETUP_USER_REQUEST, SETUP_USER_SUCCESS, SETUP_USER_FAILURE} from '../Types/actionTypes'

const API_URL = 'http://localhost:8081/api/wizard'



export const setupUser = (formData) => {
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
          dispatch({
            type: SETUP_USER_SUCCESS,
            users: data
          })
        })
        .catch(error => {
          dispatch({
            type: SETUP_USER_FAILURE,
            error: error
          })
        })
    }
  }
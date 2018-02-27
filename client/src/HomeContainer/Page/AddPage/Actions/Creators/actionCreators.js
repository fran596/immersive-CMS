import { toast } from 'react-toastify';

/*Action types */
import {
    ADD_PAGE_REQUEST, ADD_PAGE_SUCCESS, ADD_PAGE_FAILURE,
    GET_PAGES_REQUEST, GET_PAGES_SUCCESS, GET_PAGES_FAILURE
} from '../Types/actionTypes'


const API_URL = 'http://localhost:8081/api/pages'


export const addPage = (formData, history) => {
  return function (dispatch) {
    dispatch({
      type: ADD_PAGE_REQUEST
    })
    fetch(`${API_URL}/addPage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        /*Notification toast */
        toast.success("Page was added successfully",{
          position: toast.POSITION.TOP_RIGHT
        });

        /*Redirect user to home */
        history.push({
          pathname: '/manage',
          search: '',
          state: {page: data}
        })
        /*Dispatch action */
        dispatch({
          type: ADD_PAGE_SUCCESS,
          pages: data
        })
      })
      .catch(error => {
         /*Notification toast */
        toast.error("Page could not be added",{
          position: toast.POSITION.TOP_RIGHT
        });
        /*Dispatch action */
        dispatch({
          type: ADD_PAGE_FAILURE,
          error: error
        })
      })
  }
}

export const getPages = () => {
  return function (dispatch) {
    dispatch({
      type: GET_PAGES_REQUEST
    })
    fetch(`${API_URL}`)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: GET_PAGES_SUCCESS,
          pages: data
        })
      })
      .catch(error => {
        dispatch({
          type: GET_PAGES_FAILURE,
          error: error
        })
      })
  }
}

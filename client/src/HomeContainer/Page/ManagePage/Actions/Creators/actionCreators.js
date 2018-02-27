import { toast } from 'react-toastify';

/*Action types */
import {
    MANAGE_PAGE_REQUEST, MANAGE_PAGE_SUCCESS, MANAGE_PAGE_FAILURE,
    DELETE_PAGE_REQUEST, DELETE_PAGE_SUCCESS, DELETE_PAGE_FAILURE
} from '../Types/actionTypes'


const API_URL = 'http://localhost:8081/api/pages'


export const managePage = (formData, history) => {
  return function (dispatch) {
    dispatch({
      type: MANAGE_PAGE_REQUEST
    })
    fetch(`${API_URL}/managePage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        /*Notification toast */
        toast.success("Page was modified successfully",{
          position: toast.POSITION.TOP_RIGHT
        });

        /*Redirect user to home */
        history.push({
          pathname: '/home',
          search: '',
          state: {}
        })
        /*Dispatch action */
        dispatch({
          type: MANAGE_PAGE_SUCCESS,
          page: data
        })
      })
      .catch(error => {
         /*Notification toast */
        toast.error("Page could not be modified",{
          position: toast.POSITION.TOP_RIGHT
        });
        /*Dispatch action */
        dispatch({
          type: MANAGE_PAGE_FAILURE,
          error: error
        })
      })
  }
}

export const deletePage = (id, history) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_PAGE_REQUEST
    })
    fetch(`${API_URL}/deletePage`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id}),
    })
      .then(response => response.json())
      .then(data => {
        /*Notification toast */
        toast.success("Page was deleted successfully",{
          position: toast.POSITION.TOP_RIGHT
        });

        /*Redirect user to home */
        history.push({
          pathname: '/home',
          search: '',
          state: {}
        })
        /*Dispatch action */
        dispatch({
          type: DELETE_PAGE_SUCCESS,
          id: id
        })
      })
      .catch(error => {
         /*Notification toast */
        toast.error("Page could not be deleted",{
          position: toast.POSITION.TOP_RIGHT
        });
        /*Dispatch action */
        dispatch({
          type: DELETE_PAGE_FAILURE,
          error: error
        })
      })
  }
}
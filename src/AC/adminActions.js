import {
  LOAD_CLIENTS,
  ADD_CLIENT,
  UPDATE_CLIENT,
  DELETE_CLIENT,
  ADD_COMMENT,
  DELETE_COMMENT, LOAD_ALL_COMMENTS
} from "../constants"
// Clients AC
import store from "../store";

export function loadClients() {
  return {
    type: LOAD_CLIENTS,
    callApi: 'http://reactify.dd:8083/api/clients?_format=json',
    //jwtToken: localStorage.getItem('jwt_token')
  }
}

export function addClient(client) {
  return {
    type: ADD_CLIENT,
    postApi: 'http://reactify.dd:8083/entity/client?_format=hal_json',
    method: 'POST',
    jwtToken: localStorage.getItem('jwt_token'),
    contentType: 'application/hal+json',
    csrfToken: store.getState().auth.csrfToken,
    content: client
  }
}

export function updateClient(client, id) {
  return {
    type: UPDATE_CLIENT,
    id: id,
    jwtToken: localStorage.getItem('jwt_token'),
    postApi: `http://reactify.dd:8083/admin/structure/clients/${id}/?_format=json`,
    method: 'PATCH',
    csrfToken: store.getState().auth.csrfToken,
    content: client,
    redirect: true
  }
}

export function deleteClient(id) {
  return {
    type: DELETE_CLIENT,
    id: id,
    jwtToken: localStorage.getItem('jwt_token'),
    postApi: `http://reactify.dd:8083/admin/structure/clients/${id}/?_format=json`,
    method: 'DELETE',
    csrfToken: store.getState().auth.csrfToken,
    redirect: true
  }
}

// Comments AC
export function loadAllComments() {
  return {
    type: LOAD_ALL_COMMENTS,
    callApi: 'http://reactify.dd:8083/api/comments/all?_format=json',
    jwtToken: localStorage.getItem('jwt_token')
  }
}
export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    postApi: 'http://reactify.dd:8083/entity/client?_format=hal_json',
    method: 'POST',
    jwtToken: localStorage.getItem('jwt_token'),
    contentType: 'application/hal+json',
    csrfToken: store.getState().auth.csrfToken,
    content: comment
  }
}

export function deleteComment(id) {
  return {
    type: DELETE_COMMENT,
    id: id,
    jwtToken: localStorage.getItem('jwt_token'),
    postApi: `http://reactify.dd:8083/comment/${id}/?_format=json`,
    method: 'DELETE',
    csrfToken: store.getState().auth.csrfToken,
    redirect: true
  }
}

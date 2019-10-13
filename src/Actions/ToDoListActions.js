import axios from 'axios'

import {
    GET_TO_DO_ITEMS_START,
    GET_TO_DO_ITEMS_SUCCESS,
    GET_TO_DO_ITEMS_ERROR,
    POST_TO_DO_ITEM_START,
    POST_TO_DO_ITEM_SUCCESS,
    POST_TO_DO_ITEM_ERROR,
    DELETE_TO_DO_ITEM_START,
    DELETE_TO_DO_ITEM_SUCCESS,
    DELETE_TO_DO_ITEM_ERROR
} from './../Constants/ToDoListConstants'

const url = process.env.API_URL || window.location.origin

export function getToDoItems() {
    return dispatch => {
        dispatch(getToDoItemsStart())
        axios.get(`${url}/api/toDoList`)
            .then(res => dispatch(getToDoItemsSuccess(res.data)))
            .catch(error => dispatch(getToDoItemsError(error)))
    }
}

function getToDoItemsStart() {
    return {
        type: GET_TO_DO_ITEMS_START
    }
}

function getToDoItemsSuccess(toDoItems) {
    return {
        type: GET_TO_DO_ITEMS_SUCCESS,
        toDoItems
    }
}

function getToDoItemsError(error) {
    return {
        type: GET_TO_DO_ITEMS_ERROR,
        error
    }
}

export function postToDoItem(toDoItem) {
    return dispatch => {
        dispatch(postToDoItemStart())
        axios.post(`${url}/api/toDoList`, { toDoItem })
            .then(res => dispatch(postToDoItemSuccess(res.data)))
            .catch(error => dispatch(postToDoItemError(error)))
    }
}

function postToDoItemStart() {
    return {
        type: POST_TO_DO_ITEM_START
    }
}

function postToDoItemSuccess(toDoItem) {
    return {
        type: POST_TO_DO_ITEM_SUCCESS,
        toDoItem
    }
}

function postToDoItemError(error) {
    return {
        type: POST_TO_DO_ITEM_ERROR,
        error
    }
}

export function deleteToDoItem(toDoItemID) {
    return dispatch => {
        dispatch(deleteToDoItemStart())
        axios.delete(`${url}/api/toDoList/${toDoItemID}`)
            .then(res => dispatch(deleteToDoItemSuccess(res.data)))
            .catch(error => dispatch(deleteToDoItemError(error)))
    }
}

function deleteToDoItemStart() {
    return {
        type: DELETE_TO_DO_ITEM_START
    }
}

function deleteToDoItemSuccess(deletedToDoItem) {
    return {
        type: DELETE_TO_DO_ITEM_SUCCESS,
        deletedToDoItem
    }
}

function deleteToDoItemError(error) {
    return {
        type: DELETE_TO_DO_ITEM_ERROR,
        error
    }
}
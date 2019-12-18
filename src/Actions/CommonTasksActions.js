import axios from 'axios'

import { postToDoItem } from './ToDoListActions'
import {
    POST_COMMON_TASK_START,
    POST_COMMON_TASK_SUCCESS,
    POST_COMMON_TASK_ERROR,
    GET_COMMON_TASKS_START,
    GET_COMMON_TASKS_SUCCESS,
    GET_COMMON_TASKS_ERROR
} from './../Constants/CommonTasksConstants'

const url = process.env.API_URL || window.location.origin

export function postCommonTasks(commonTasks) {
    return dispatch => {
        commonTasks.forEach(commonTask => dispatch(postToDoItem(commonTask)))
    }
}

export function postCommonTask(commonTask) {
    return dispatch => {
        dispatch(postCommonTaskStart())
        axios.post(`${url}/api/commonTasks`, { commonTask })
            .then(res => postCommonTaskSuccess(res.data))
            .catch(error => postCommonTaskError(error))
    }
}

function postCommonTaskStart() {
    return {
        type: POST_COMMON_TASK_START
    }
}

function postCommonTaskSuccess(commonTasks) {
    return {
        type: POST_COMMON_TASK_SUCCESS,
        commonTasks
    }
}

function postCommonTaskError(error) {
    return {
        type: POST_COMMON_TASK_ERROR,
        error
    }
}

export function getCommonTasks() {
    return dispatch => {
        dispatch(getCommonTasksStart())
        axios.get(`${url}/api/commonTasks`)
            .then(res => getCommonTasksSuccess(res.data))
            .catch(error => getCommonTasksError(error))
    }
}

function getCommonTasksStart() {
    return {
        type: GET_COMMON_TASKS_START
    }
}

function getCommonTasksSuccess(commonTasks) {
    return {
        type: GET_COMMON_TASKS_SUCCESS,
        commonTasks
    }
}

function getCommonTasksError(error) {
    return {
        type: GET_COMMON_TASKS_ERROR,
        error
    }
}

export function deleteCommonTasks(commonTaskIDs) {
    return dispatch => {
        dispatch(deleteCommonTasksStart())
        axios.delete()
    }
}

function deleteCommonTasksStart() {
    return {

    }
}

function deleteCommonTasksSuccess(deletedCommonTasks) {
    return {

    }
}

function deleteCommonTasksError(error) {
    return {

    }
}

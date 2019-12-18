import { 
    POST_COMMON_TASK_START,
    POST_COMMON_TASK_SUCCESS,
    POST_COMMON_TASK_ERROR,
    GET_COMMON_TASKS_START,
    GET_COMMON_TASKS_SUCCESS,
    GET_COMMON_TASKS_ERROR
} from './../Constants/CommonTasksConstants'

const initialState = {
    loading: false,
    error: null,
    commonTasks: []
}

function CommonTasksReducer(state = initialState, action) {
    switch (action.type) {
        case POST_COMMON_TASK_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case POST_COMMON_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                commonTasks: [...state.commonTasks,action.commonTask]
            }
        case POST_COMMON_TASK_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case GET_COMMON_TASKS_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_COMMON_TASKS_SUCCESS:
            return {
                ...state,
                loading: false,
                commonTasks: action.commonTasks
            }
        case GET_COMMON_TASKS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default CommonTasksReducer
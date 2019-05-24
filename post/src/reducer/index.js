import { combineReducers } from 'redux';

const postsReducer = (state=[], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            // console.log(action.posts);
            return [...state, ...action.posts]
        case 'CREATE_POST_SUCCESS':
            // console.log(action.payload)
            return [ action.payload ];
        default:
            return state;
    }
}

const alertReducer = (state=false, action) => {
    switch (action.type) {
        case 'PLEASE_INPUT':
            return true
        default:
            return state
    }
}

const inputChangeReducer = (state={}, action) => {
    switch (action.type) {
        case 'USER_ID_CHANGE':
            return {
                ...state,
                userId: action.payload
            }
        case 'BODY_CHANGE':
            return {
                ...state,
                body: action.payload
            }
        case 'TITLE_CHANGE':
            return {
                ...state,
                title: action.payload
            }
        default:
            return state;
    }
}

const loadingReducer = (state=true, action) => {
    switch (action.type) {
        case 'FINISH_LOADING':
            return false
        default:
            return state
    }
}

const changePageReducer = (state={pageNumber:1, pageSize:5}, action) => {
    switch (action.type) {
        case 'CHANGE_PAGE':
            return {
                ...state,
                pageNumber: action.payload
            }
        default:
            return state
    }
}

const searchString = (state='', action) => {
    switch (action.type) {
        case 'SEARCH':
            return action.payload;
        default:
            return state;
    }
}

export default (extraReducer) => combineReducers({
    postsReducer,
    alertReducer,
    inputChangeReducer,
    loadingReducer,
    changePageReducer,
    searchString,
    ...extraReducer
})

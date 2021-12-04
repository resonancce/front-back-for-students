import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'

import { getUserToken } from './helper'
import { EDIT_USER_FIELDS } from './contants/userConstants'

const INITIAL_STATE_USER = {
    user: {
        token: getUserToken(),
        userName: '',
        number: '',
        email: '',
        date: '',
        userInfo: '',
        skills: []
    }
}
function rootReducer(state = INITIAL_STATE_USER, action) {
    switch (action.type) {
        case EDIT_USER_FIELDS: {
            const user = action.value
            return {
                ...state,
                user: { ...state.user, ...user }
            }
        }

        default:
            return state
    }
}
const composedEnhancers = composeWithDevTools(...[])

export const store = createStore(rootReducer, INITIAL_STATE_USER, composedEnhancers)

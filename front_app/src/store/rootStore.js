import { createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

import { getUserToken } from '../utils/userToken'
import { EDIT_USER_FIELDS } from './constants/userConstants'

const INITIAL_STATE_USER = {
    user: {
        token: getUserToken(),
        userName: '',
        number: '',
        email: '',
        role: '',
        date: '',
        userInfo: '',
        cars: []
    }
}
function rootReducer(state = INITIAL_STATE_USER, action) {
    switch (action.type) {
        case EDIT_USER_FIELDS: {
            const user = action.value
            return {
                ...state,
                user: user ? { ...state.user, ...user } : { ...INITIAL_STATE_USER.user, token: null }
            }
        }

        default:
            return state
    }
}
const composedEnhancers = composeWithDevTools()

export const store = createStore(rootReducer, INITIAL_STATE_USER, composedEnhancers)

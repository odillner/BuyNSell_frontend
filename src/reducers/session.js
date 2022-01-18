import loginService from '../services/login'
import userService from '../services/users'
import logger from '../utils/logger'

import {info} from './notification'

/* Reducer handling login session, state will contain user object and web token during session */
const sessionReducer = (state = null, action) => {
    switch (action.type) {
    case 'INIT_SESSION': {
        return action.data
    }
    case 'END_SESSION': {
        return null
    }
    default: return state
    }
}

/* Attempts to log user in with the given credentials */
export const logInUser = (username, password) => {
    return async dispatch => {
        const user = {username, password}

        try {
            const res = await loginService.auth(user)

            window.localStorage.setItem('id', res.user.id)
            window.localStorage.setItem('token', res.token)

            dispatch({
                type: 'INIT_SESSION',
                data: res
            })

            dispatch(info("Successfully logged in!", 5))
        } catch (err) {
            throw err;
        }
    }
}

/* Checks localstorage if previous sessions exists and continues that session */
export const initSession = () => {
    return async dispatch => {
        const id = window.localStorage.getItem('id')
        const token = window.localStorage.getItem('token')

        if (id && token) {
            try {
                const user = await userService.getById(id)

                dispatch({
                    type: 'INIT_SESSION',
                    data: {
                        user,
                        token
                    }
                })

                logger.info('Successfully continued previous session')
            } catch (err) {
                logger.error('Failed to continue session from localstorage:', err)
            }
        }
    }
}

/* Logs user out and removes session from localstorage */
export const endSession = () => {
    return async dispatch => {
        window.localStorage.removeItem('id')
        window.localStorage.removeItem('token')

        dispatch(info("Successfully logged out!", 5))
        dispatch({
            type: 'END_SESSION'
        })
    }
}

export default sessionReducer
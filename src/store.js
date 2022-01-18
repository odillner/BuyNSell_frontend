import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import sessionReducer from './reducers/session'
import searchReducer from "./reducers/search";
import notificationReducer from "./reducers/notification";

/* Object containing all reducers */
const reducer = combineReducers({
    session: sessionReducer,
    search: searchReducer,
    notification: notificationReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store


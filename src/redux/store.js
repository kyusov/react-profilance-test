import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/user'
import newsReducer from './reducers/news'

const rootReducer = combineReducers({
    user: userReducer,
    news: newsReducer,
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

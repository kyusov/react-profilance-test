import { createStore } from 'redux'

const initialState = {
    user: {
        id: 0,
        login: 'guest',
        pass: null,
        role: 'guest',
    },
}

const users = (state = initialState, action) => {
    if (action.type === 'ADD_USER') {
        return {
            ...state,
            user: action.payload,
        }
    }

    if (action.type === 'REMOVE_USER') {
        return {
            ...state,
            user: action.payload,
        }
    }

    return { ...state }
}

const store = createStore(
    users,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

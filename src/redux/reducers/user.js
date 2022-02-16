const initialState = {
    login: '',
    role: '',
}

const user = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SET_USER':
            return { ...state, ...payload }
        case 'REMOVE_USER':
            return { ...state, ...payload }
        default:
            return state
    }
}

export default user

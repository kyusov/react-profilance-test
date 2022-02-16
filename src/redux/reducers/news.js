const initialState = []

const news = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'ADD_NEWS': {
            return [...state, payload]
        }
        case 'APPROVE_NEWS': {
            return [
                ...state.map((el) => {
                    if (el.id === payload) el.approve = true
                    return el
                }),
            ]
        }
        case 'REJECT_NEWS':
            return [...state.filter((el) => el.id !== payload)]
        default:
            return state
    }
}

export default news

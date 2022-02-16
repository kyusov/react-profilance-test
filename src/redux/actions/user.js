export const setUser = ({ login, role }) => ({
    type: 'SET_USER',
    payload: { login, role },
})

export const removeUser = () => ({
    type: 'REMOVE_USER',
    payload: { login: '', role: '' },
})

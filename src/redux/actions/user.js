export const addUser = (user) => ({
    type: 'ADD_USER',
    payload: user,
})

export const removeUser = () => ({
    type: 'REMOVE_USER',
    payload: { id: 0, login: 'guest', pass: null, role: 'guest' },
})

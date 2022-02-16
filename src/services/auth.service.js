import fakeAuth from '../utils/fakeAuth'

export const signIn = (login, password) => {
    const user = fakeAuth(login, password)
    localStorage.setItem('user', JSON.stringify(user))
    return user
}

export const signOut = () => {
    localStorage.removeItem('user')
}

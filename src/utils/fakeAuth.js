import users from '../consts'

export default function fakeAuth(login, pass) {
    const user = users.filter((user) => user.login === login && user.pass === pass)
    return user.length > 0 ? user[0] : { login: '', role: '' }
}

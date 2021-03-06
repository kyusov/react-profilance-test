import { useState } from 'react'
import { signIn } from '../../services/auth.service'
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/actions/user'

// import fakeAuth from '../../utils/fakeAuth'

import './authModal.scss'

function AuthModal({ hideModal }) {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState(false)

    const dispatch = useDispatch()

    const overlayHandleClick = (event) => {
        if (event.target.classList.contains('overlay')) {
            hideModal()
            setError(false)
        }
    }

    const signInHandleClick = () => {
        if (login.length > 0 && password.length > 0) {
            const user = signIn(login, password)

            if (user.role !== '') {
                dispatch(setUser({ login: user.login, role: user.role }))
                hideModal()
            } else {
                setError(true)
            }
        } else {
            setError(true)
        }
    }

    return (
        <div className="overlay" onClick={overlayHandleClick}>
            <div className="modal">
                <label className="modal__label" htmlFor="login">
                    Логин
                </label>
                <input
                    className="modal__login"
                    id="login"
                    type="text"
                    value={login}
                    onChange={(event) => setLogin(event.target.value)}
                />
                <label className="modal__label" htmlFor="password">
                    Пароль
                </label>
                <input
                    className="modal__password"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                {error && <div className="modal__error">Неверный логин или пароль</div>}
                <div className="modal__button" onClick={signInHandleClick}>
                    Войти
                </div>
            </div>
        </div>
    )
}

export default AuthModal

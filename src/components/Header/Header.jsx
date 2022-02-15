import './header.scss'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../../redux/actions/user'

function Header({ showModal }) {
    const dispatch = useDispatch()

    const isAuth = useSelector(({ user }) => (user.role === 'guest' ? false : true))

    const modalHandleClick = () => {
        if (isAuth) {
            dispatch(removeUser())
        } else {
            showModal()
        }
    }

    return (
        <header className="header">
            <Link to="/" className="header__link">
                <img className="header__logo" src={logo} alt="logo" />
            </Link>

            <Link to="/news" className="header__link">
                Новости
            </Link>

            <div className="header__button" onClick={modalHandleClick}>
                {isAuth ? 'Выход' : 'Вход'}
            </div>
        </header>
    )
}

export default Header

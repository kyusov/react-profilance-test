import { useSelector } from 'react-redux'

function HomePage() {
    const username = useSelector(({ user }) => (user.role !== '' ? user.login : 'гость'))
    return (
        <div className="greetings">
            Привет, <span>{username}</span>!
        </div>
    )
}

export default HomePage

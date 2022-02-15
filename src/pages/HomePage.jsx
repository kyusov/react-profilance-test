import { useSelector } from 'react-redux'

function HomePage() {
    const username = useSelector(({ user }) => user.login)

    return (
        <div className="greetings">
            Привет, <span>{username}</span>!
        </div>
    )
}

export default HomePage

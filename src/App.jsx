import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { Header, AuthModal } from './components'

import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import { addNews } from './redux/actions/news'

function App() {
    const [modalOpened, setModalOpened] = useState(false)
    const dispatch = useDispatch()

    const mockNews = [
        {
            id: 1,
            title: 'Первая новость',
            description: 'Описание первой новости',
            date: new Date(Date.now()).toLocaleDateString(),
            approve: false,
        },
        {
            id: 2,
            title: 'Вторая новость',
            description: 'Описание второй новости',
            date: new Date(Date.now()).toLocaleDateString(),
            approve: true,
        },
    ]

    useEffect(() => {
        dispatch(addNews(mockNews[0]))
        dispatch(addNews(mockNews[1]))
    }, [])

    return (
        <>
            <div className="container">
                <Header showModal={() => setModalOpened(true)} />
                {modalOpened && <AuthModal hideModal={() => setModalOpened(false)} />}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/news" element={<NewsPage />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </div>
        </>
    )
}

export default App

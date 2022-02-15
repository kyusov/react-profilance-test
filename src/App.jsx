import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header, AuthModal } from './components'

import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'

function App() {
    const [modalOpened, setModalOpened] = useState(false)

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

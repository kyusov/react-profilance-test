import './news.scss'
import searchIcon from '../../assets/search.svg'

import { AddNews, NewsItem } from '..'
import { useSelector } from 'react-redux'
import { useState } from 'react'

function News() {
    const user = useSelector(({ user }) => user)
    const news = useSelector(({ news }) => news)

    const [filtredNews, setFiltredNews] = useState('')

    const changeInputHandler = (value) => {
        setFiltredNews(value)
    }

    const renderItem = (el) => {
        if (user.role === '') {
            if (el.approve) {
                return (
                    <NewsItem
                        key={el.id}
                        id={el.id}
                        title={el.title}
                        description={el.description}
                        date={el.date}
                        approve={el.approve}
                    />
                )
            }
        } else {
            return (
                <NewsItem
                    key={el.id}
                    id={el.id}
                    title={el.title}
                    description={el.description}
                    date={el.date}
                    approve={el.approve}
                />
            )
        }
    }

    return (
        <section className="news">
            <div className="search">
                <img className="search__icon" src={searchIcon} alt="search" />
                <input
                    type="text"
                    className="search__input"
                    placeholder="Поиск..."
                    onChange={(event) => changeInputHandler(event.target.value)}
                />
            </div>

            <div className="news__list">
                {news
                    .filter((el) =>
                        el.title.toLowerCase().includes(filtredNews.toLowerCase())
                    )
                    .map(renderItem)}
                {user.role === 'user' && <AddNews />}
            </div>
        </section>
    )
}

export default News

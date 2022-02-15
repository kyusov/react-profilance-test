import './news.scss'
import searchIcon from '../../assets/search.svg'

import { AddNews, NewsItem } from '..'

function News() {
    return (
        <section className="news">
            <div className="search">
                <img className="search__icon" src={searchIcon} alt="search" />
                <input type="text" className="search__input" placeholder="Поиск..." />
            </div>

            <div className="news__list">
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <AddNews />
            </div>
        </section>
    )
}

export default News

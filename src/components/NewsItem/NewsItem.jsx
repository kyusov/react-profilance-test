import './newsItem.scss'

import approveIcon from '../../assets/approve.svg'
import removeIcon from '../../assets/remove.svg'

function NewsItem() {
    return (
        <div className="news__item">
            <div className="news__body">
                <h5 className="news__title">Заголовок новости</h5>
                <p className="news__description">Описание новости</p>
            </div>
            <div className="news__footer">
                <div className="news__date">01.01.1996</div>
            </div>
            <div className="news__controls">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="news__wrapper">
                <img
                    src={approveIcon}
                    alt="approve"
                    className="news__button news__button-approve"
                />
                <img
                    src={removeIcon}
                    alt="remove"
                    className="news__button news__button-remove"
                />
            </div>
        </div>
    )
}

export default NewsItem

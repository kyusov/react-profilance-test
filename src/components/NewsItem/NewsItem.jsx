import './newsItem.scss'

import approveIcon from '../../assets/approve.svg'
import removeIcon from '../../assets/remove.svg'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeNews, approveNews } from '../../redux/actions/news'

function NewsItem({ id, title, description, date, approve }) {
    const user = useSelector(({ user }) => user)

    const [visibleControls, setVisibleControls] = useState(false)

    const dispatch = useDispatch()

    const controlHandler = () => {
        setVisibleControls(true)
    }

    const confirmNews = () => {
        dispatch(approveNews(id))
        setVisibleControls(false)
    }

    const rejectNews = () => {
        dispatch(removeNews(id))
        setVisibleControls(false)
    }

    return (
        <div className="news__item">
            <div className="news__body">
                <h5 className="news__title">{title}</h5>
                <p className="news__description">{description}</p>
            </div>
            <div className="news__footer">
                <div className="news__date">{date}</div>
            </div>
            {user.role === 'admin' && !approve && (
                <>
                    <div className="news__controls" onClick={controlHandler}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    {visibleControls && (
                        <div className="news__wrapper">
                            <img
                                src={approveIcon}
                                alt="approve"
                                className="news__button news__button-approve"
                                onClick={confirmNews}
                            />
                            <img
                                src={removeIcon}
                                alt="remove"
                                className="news__button news__button-remove"
                                onClick={rejectNews}
                            />
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default NewsItem

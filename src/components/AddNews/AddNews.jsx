import { useState } from 'react'

import './addNews.scss'

import addIcon from '../../assets/add.svg'
import { useDispatch } from 'react-redux'
import { addNews } from '../../redux/actions/news'

function AddNews() {
    const [visible, setVisible] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')

    const dispatch = useDispatch()

    const addCardHandler = () => {
        setVisible(true)
    }

    const addNewsHandler = () => {
        dispatch(
            addNews({
                id: Date.now(),
                title: title,
                description: description,
                date: new Date(date).toLocaleDateString(),
                approve: false,
            })
        )
        setVisible(false)
    }

    return (
        <>
            {!visible && (
                <div className="news__item news__add">
                    <img
                        src={addIcon}
                        alt="add news"
                        className="news__button news__button-add"
                        onClick={addCardHandler}
                    />
                </div>
            )}

            {visible && (
                <div className="news__item">
                    <div className="news__body">
                        <input
                            className="news__input"
                            type="text"
                            placeholder="Заголовок"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                        <textarea
                            className="news__textarea"
                            type="text"
                            placeholder="Содержание"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </div>
                    <div className="news__footer">
                        <input
                            className="news__input"
                            type="date"
                            value={date}
                            onChange={(event) => {
                                setDate(event.target.value)
                                console.log(date)
                            }}
                        />
                    </div>
                    <img
                        src={addIcon}
                        alt="add news"
                        className="news__button news__button-add"
                        onClick={addNewsHandler}
                    />
                </div>
            )}
        </>
    )
}

export default AddNews

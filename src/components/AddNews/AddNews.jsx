import './addNews.scss'

import addIcon from '../../assets/add.svg'

function AddNews() {
    return (
        <>
            {/* Сначала это */}
            <div className="news__item news__add">
                <img
                    src={addIcon}
                    alt="add news"
                    className="news__button news__button-add"
                />
            </div>

            {/* После клика вот это */}

            <div className="news__item">
                <div className="news__body">
                    <input className="news__input" type="text" placeholder="Заголовок" />
                    <textarea
                        className="news__textarea"
                        type="text"
                        placeholder="Содержание"
                    />
                </div>
                <div className="news__footer">
                    <input className="news__textarea" type="date" />
                </div>
                <img
                    src={addIcon}
                    alt="add news"
                    className="news__button news__button-add"
                />
            </div>
        </>
    )
}

export default AddNews

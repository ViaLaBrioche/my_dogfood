import React from 'react'

export const SortMenu = () => {
    return <div className="sort__menu__container">
        <button type="button" className="sort__menu__btn">Популярные</button>
        <button type="button" className="sort__menu__btn">Новинки</button>
        <button type="button" className="sort__menu__btn">Сначала дешёвые</button>
        <button type="button" className="sort__menu__btn">Сначала дорогие</button>
        <button type="button" className="sort__menu__btn">По рейтингу</button>
        <button type="button" className="sort__menu__btn">По скидке</button>
    </div>
}

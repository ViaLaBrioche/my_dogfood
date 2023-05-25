import React from 'react';

export const SortMenu = ({cards, setCards}) => {
    
    const productRate = (reviews) => {
        if (!reviews || !reviews.length) {
            return 0;
        }
        const res = reviews.reduce((acc, el) => acc += el.rating, 0);
        console.log(res / reviews.length);
        return res / reviews.length
    }

    const SortExpensive = (cards) => {
        const newCards = cards.sort((a, b) => b.price - a.price);
        setCards([...newCards]);
        return
    }

    const SortPopular= (cards) => {
        const newCards = cards.sort((a, b) => b.likes.length - a.likes.length);
        setCards([...newCards]);
        return
    }

    const SortCheap = (cards) => {
        const newCards = cards.sort((a, b) => a.price - b.price);
        setCards([...newCards]);
        return
    }

    const SortNew = (cards) => {
        const newCards = cards.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setCards([...newCards]);
        return
    }

    const SortRate = (cards) => {
        const newCards = cards.sort((a, b) => productRate(b.reviews) - productRate(a.reviews))
        setCards([...newCards]);
        return
    }

    const SortDiscount = (cards) => {
        const newCards = cards.sort((a, b) =>  b.discount - a.discount);
        setCards([...newCards]);
        return
    }


    

    return <div className="sort__menu__container">
        <button type="button" onClick={() => SortPopular(cards)}  className="sort__menu__btn">Популярные</button>
        <button type="button" onClick={() => SortNew(cards)}  className="sort__menu__btn">Новинки</button>
        <button type="button" onClick={() => SortCheap(cards)}  className="sort__menu__btn">Сначала дешёвые</button>
        <button type="button" onClick={() => SortExpensive(cards)}  className="sort__menu__btn">Сначала дорогие</button>
        <button type="button" onClick={() => SortRate(cards)}  className="sort__menu__btn">По рейтингу</button>
        <button type="button" onClick={() => SortDiscount(cards)}  className="sort__menu__btn">По скидке</button>
    </div>
}

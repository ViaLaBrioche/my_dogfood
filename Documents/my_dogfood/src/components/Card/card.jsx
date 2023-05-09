import React from "react";

export const Card = ({name, price, discount,wight,picture,isFavorite}) => {
    return (
        <div className='card'>
            <img src={picture}  className='card__image'></img>
            <div className="item__price">{price}</div>
            <div className="item__info">
                <span className="item__wight">{wight}</span>
                <span className="item__name">{name}</span>
            </div>
            <div className="card__container__btn">
            <button className="card__btn" type="button">В корзину</button>
        </div>
    </div>
    )
} 


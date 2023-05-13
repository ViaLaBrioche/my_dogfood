import React from "react";

export const Card = ({name, price,wight,pictures}) => {
    return (
        <div className='card'>
            <img src={pictures} alt="description of image" className='card__image'></img>
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


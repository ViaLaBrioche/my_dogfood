import React from "react";
import { Link, NavLink } from 'react-router-dom';

export const Card = ({name, price,wight,pictures,_id}) => {
    return (
        <div className="card" >
            <Link className="card__link" to={`/product/${_id}`}>
                <img src={pictures} alt="description of image" className='card__image'></img>
                <div className="item__price">{price}</div>
                <div className="item__info">
                    <span className="item__wight">{wight}</span>
                    <span className="item__name">{name}</span>
                </div>
            </Link>
            <div className="card__container__btn">
            <button id={_id}  className="card__btn" type="button">В корзину</button>
        </div>
    </div>
    )
} 


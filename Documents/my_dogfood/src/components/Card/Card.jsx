import React from "react";
import { Link, NavLink } from 'react-router-dom';

export const Card = ({name, price,wight,pictures,_id, discount}) => {
    return (
        <div className="card" >
            <Link className="card__link" to={`/product/${_id}`}>
                <div className="card__container__sticky">
                    <img src={pictures} alt="description of image" className='card__image'></img>
                    {!!discount && <div className="card__discount"> 
                        <span className='card__discount'>-{discount}%</span>
                    </div>}
                </div>
                <div className="item__price">{price}&nbsp;₽</div>
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


import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as IconHeart } from './Icons/heart.svg'

export const Card = ({name, price,wight,pictures,_id, discount}) => {
    function Price(discount) {
        const isDiscount = discount.discount;
        if (!!isDiscount) {
            return <div><div className="item__price__discount" >{price}&nbsp;₽</div>
            <div className="item__price item__price_red">{price-(price / 100 * isDiscount)}&nbsp;₽</div></div>
        } else {
        return <div className="item__price">{price}&nbsp;₽</div>
    }
}
    return (
        <div className="card" >
            <div className="card__container__sticky">
            {!!discount && <div className="card__discount"> 
                        <span className='card__discount'>-{discount}%</span>
                    </div>}
                    <button className="card__favorite__btn"><IconHeart className="card__favorite_heart"/></button>
            </div>
            <Link className="card__link" to={`/product/${_id}`}>
                    <img src={pictures} alt="description of image" className='card__image'></img>
                <Price discount={discount}/>
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


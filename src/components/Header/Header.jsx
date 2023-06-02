import { ReactComponent as LogoDogo} from './LogoDogo/logoDogo.svg'
import { ReactComponent as IconHeart } from './Icons/heart.svg'
import { ReactComponent as IconDog } from './Icons/dog.svg'
import { ReactComponent as IconBasket } from './Icons/basket.svg'
import { Search } from '../Header/Search/Search.jsx'
import React from 'react'
import './header.css';
import { Link } from 'react-router-dom';

export const Header = ({setSearchTerm, favoritesCards}) => {

    return <header>
                <div className="main__container">
                    <div className="header__container">
                        <Link to="/my_dogfood"><LogoDogo className="header__logo"/></Link>
                        <Search setSearchTerm={setSearchTerm}/>
                        <div className="header__icons">
                            <div className='header__heart__icon__conteiner'>
                            <Link to="/favorite">
                                <IconHeart/>
                                <div className='header__heart__favorite__amount'>{favoritesCards.length}</div>
                            </Link>
                            </div>
                        <IconBasket/>
                        <IconDog/>
                        </div>
                    </div>
                </div>
            </header>
}
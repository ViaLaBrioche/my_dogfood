import { ReactComponent as LogoDogo} from './LogoDogo/logoDogo.svg'
import { ReactComponent as IconHeart } from './Icons/heart.svg'
import { ReactComponent as IconDog } from './Icons/dog.svg'
import { ReactComponent as IconBasket } from './Icons/basket.svg'
import { Search } from '../Header/Search/search.jsx'
import React from 'react'
import './header.css';

export const Header = () => {
    return <header className="header__container">
        <LogoDogo className="header__logo"/>
        <Search/>
        <div className="header__icons">
            <IconHeart/>
            <IconBasket/>
            <IconDog/>
        </div>

    </header>
}
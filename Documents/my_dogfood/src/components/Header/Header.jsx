import { ReactComponent as LogoDogo} from './LogoDogo/logoDogo.svg'
import { ReactComponent as IconHeart } from './Icons/heart.svg'
import { ReactComponent as IconDog } from './Icons/dog.svg'
import { ReactComponent as IconBasket } from './Icons/basket.svg'
import { Search } from '../Header/Search/Search.jsx'
import React from 'react'
import './header.css';

export const Header = ({setSearchTerm}) => {

    return <header>
                <div className="main__container">
                    <div className="header__container">
                        <LogoDogo className="header__logo"/>
                        <Search setSearchTerm={setSearchTerm}/>
                        <div className="header__icons">
                        <IconHeart/>
                        <IconBasket/>
                        <IconDog/>
                        </div>
                    </div>
                </div>
            </header>
}
import { ReactComponent as LogoDogo} from './LogoDogo/logoDogo.svg'
import { ReactComponent as IconHeart } from './Icons/heart.svg'
import { ReactComponent as IconDog } from './Icons/dog.svg'
import { ReactComponent as IconBasket } from './Icons/basket.svg'
import { Search } from '../Header/Search/Search.jsx'
import React from 'react'
import './header.css';
import { Link } from 'react-router-dom';

export const Header = ({setSearchTerm}, {setSearch}) => {

    return <header>
                <div className="main__container">
                    <div className="header__container">
                        <LogoDogo className="header__logo"/>
                        <Search setSearchTerm={setSearchTerm} setSearch={setSearch}/>
                        <div className="header__icons">
                        <Link to="/favorite"><IconHeart/></Link>
                        <IconBasket/>
                        <IconDog/>
                        </div>
                    </div>
                </div>
            </header>
}
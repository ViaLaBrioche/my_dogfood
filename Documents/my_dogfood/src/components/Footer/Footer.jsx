import React from "react";
import { ReactComponent as LogoFooter } from "./Logo/logoFooter.svg";
import { ReactComponent as LogoInstagram } from "./Logo/logo-instagram.svg";
import { ReactComponent as LogoPhone } from "./Logo/logo-phone.svg";
import { ReactComponent as LogoTelegram } from "./Logo/logo-telegram.svg";
import { ReactComponent as LogoViber } from "./Logo/logo-viber.svg";
import { ReactComponent as LogoVk } from "./Logo/logo-vk.svg";
import './footer.css';

export const Footer = () => {
    return (
    <footer>
        
        <div className='main__container'>
            <div className="footer__container">
                <div className="footer__logo">
                    <LogoFooter/>
                    <span className="logo__info">© «Интернет-магазин DogFood.ru»</span>
                </div>
                <div className="footer__links">
                    <a>Каталог</a>
                    <a>Акции</a>
                    <a>Новости</a>
                    <a>Отзывы</a>
                </div>
                <div className="footer__links">
                    <a>Оплата и доставка</a>
                    <a>Часто спрашивают</a>
                    <a>Обратная связь</a>
                    <a>Контакты</a>
                </div>
                <div className="footer__links">
                    <span className="link__phone">Мы на связи</span>
                    <a className="link__phone">8 (999) 00-00-00</a>
                    <a className="link__email">dogfood.ru@gmail.com</a>
                    <div className="footer__icons">
                        <LogoPhone/>
                        <LogoTelegram/>
                        <LogoViber/>
                        <LogoVk/>
                        <LogoInstagram/>
                    </div>
                </div>
            </div>  
        </div>

    </footer>
    );
}
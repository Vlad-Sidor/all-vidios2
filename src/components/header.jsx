import logo from "../assets/images/logo.svg";
import React, {useState} from 'react';
import coll from "../assets/images/coll.svg";
import telegram from "../assets/images/telegram.svg";
import vk from "../assets/images/vk.svg";
import instagram from "../assets/images/instagram.svg";
import collbutton from "../assets/images/coll-button.svg";
import rectangleone from "../assets/images/rectangleone.svg"; 
import rectangletwo from "../assets/images/rectangletwo.svg"; 
import rectanglethree from "../assets/images/rectanglethree.svg"; 



const Header = () => {
    
    return ( 
        <>
            <div className="header">
                <div className="wrapper">
                    <div className="navbar">
                        <ul className="position-mini">
                            <div>
                                <div className="logo-position">
                                    <li className="logo"><img src={logo} alt=""/></li>
                                </div>
                                <li className="title-page">
                                    <ul className="call-mini">
                                        <li className="phone-img"><img src={coll} alt="" /></li>
                                        <li className="phone-number">+7 (988) 287-08-17</li>
                                    </ul>
                                    <h2><span>Все</span>Видео.ру</h2>
                                    <p>Установка видеонаблюдения</p>
                                </li>
                            </div>
                            <ul className="social">
                                <li className="item-telegram"><a href=""><img src={telegram} alt="" /></a></li>
                                <li className="item-vk"><a href=""><img src={vk} alt="" /></a></li>
                                <li className="item-instagram"><a href=""><img src={instagram} alt="" /></a></li>
                            </ul>
                        </ul>

                            <div class="burger-menu">
                                <input id="menu-toggle" type="checkbox" />
                                <label class="menu-btn" for="menu-toggle">
                                <span></span>
                                </label>
                            
                                <ul class="menubox navbar-nav">
                                    <li><a class="menu-item" href="#">Ваша прибыль</a></li>
                                    <li><a class="menu-item" href="#">Спецпредложение</a></li>
                                    <li><a class="menu-item" href="#">Пакеты</a></li>
                                </ul>
                            </div>
                        <div className="connection element-hidden">
                            <ul className="call">
                                <li className="phone-img"><img src={coll} alt="" /></li>
                                <li className="phone-number">+7 (988) 287-08-17</li>
                            </ul>
                            <ul className="social">
                                <li className="item-telegram"><a href=""><img src={telegram} alt="" /></a></li>
                                <li className="item-vk"><a href=""><img src={vk} alt="" /></a></li>
                                <li className="item-instagram"><a href=""><img src={instagram} alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="header-content">
                        <div className="header-content-border">
                            <h1>Начните зарабатывать</h1>
                            <h2>от 200 000 рублей</h2>
                            <p>оказывая услуги по<br/><span>установке видеонаблюдения</span></p>
                        </div>
                    </div>
                    <div className="header-buttons">
                        <div className="buttons">
                            <a href="">Узнать подробнее</a>
                            <button>Записаться на консультацию</button>
                        </div>
                        <div className="coll-button">
                            <a href=""><img src={collbutton} alt="" /></a>
                        </div>
                    </div>
                    <div className="advantages">
                        <div className="advantages-item">
                            <img src={rectangleone} alt="" />
                            <h2><span>Быстрый</span> запуск</h2>
                            <div className="advantages-content">
                                <p>Офис не нужен<br/> Собственный склад не нужен<br/> Начало работы через 20 дней</p>
                            </div>
                        </div>
                        <div className="advantages-item">
                            <img src={rectangletwo} alt="" />
                            <h2>Опыт<span> не нужен</span></h2>
                            <div className="advantages-content">
                                <p>Полное сопровождение маркетинга<br/> Все сервисы для работы настроены<br/> Доведем за руку до результата</p>
                            </div>
                        </div>
                        <div className="advantages-item">
                            <img src={rectanglethree} alt="" />
                            <h2><span>100% гарантия</span> качества</h2>
                            <div className="advantages-content">
                                <p>Холдинг из 4х бизнесов<br/> Опыт работы в сфере<br/> безопасности с 2005 года</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Header;
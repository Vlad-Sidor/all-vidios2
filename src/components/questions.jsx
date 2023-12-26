import rectanglefor from "../assets/images/rectanglefor.svg";
import cameraone from "../assets/images/cameraone.svg";
import calculator from "../assets/images/calculator.svg";
import questionsicon from "../assets/images/questionsicon.png";
import questionsiconone from "../assets/images/questionsiconone.png";
import questionsicontwo from "../assets/images/questionsicontwo.png";
import ellipse from "../assets/images/ellipse.svg";

const Questions = () => {
    return ( 
        <>
            <div className="questions">
                <div className="wrapper">
                    <div className="questions-one">
                        <div className="questions-title">
                            <img className="img-absolute" src={rectanglefor} alt="" />
                            <h2>На чем Вы будете<br />зарабатывать?</h2>
                        </div>
                        <div className="questions-content">
                            <div className="questions-content-item">
                                <h2>01</h2>
                                <p><span>Продажа</span> готовых систем<br /> оборудования</p>
                            </div>
                            <div className="questions-content-item">
                                <h2>02</h2>
                                <p><span>Монтаж</span> системы видеонаблюдения,<br /> умных домофонов и системы<br /> управления контроля доступом</p>
                            </div>
                            <div className="questions-content-item">
                                <h2>03</h2>
                                <p>На <span>техническом обслуживании</span><br /> и <span>ремонте</span> уже установленных<br /> систем</p>
                            </div>
                        </div>
                    </div>
                    <div className="questions-two">
                        <div className="questions-title">
                            <img className="img-absolute" src={rectanglefor} alt="" />
                            <h2>Кто будет Вашими <br />клиентами?</h2>
                        </div>
                        <div className="questions-two-content">
                            <div className="questions-two-content-item">
                                <h2>#1</h2>
                                <h3>Клиент <span>#1</span></h3>
                                <p>Физические лица, которые хотят<br /> обезопасить своё имущество</p>
                            </div>
                            <div className="questions-two-content-item">
                                <h2>#2</h2>
                                <h3>Клиент <span>#2</span></h3>
                                <p>​​​​​​​Юридические лица, которые хотят<br /> управлять и контролировать свой<br /> бизнес удаленно</p>
                            </div>
                            <div className="questions-two-content-item">
                                <h2>#3</h2>
                                <h3>Клиент <span>#3</span></h3>
                                <p>​​​​​​​Государственные объекты и<br /> объекты, где безопасность<br /> является неотъемлемой частью</p>
                            </div>
                        </div>
                    </div>
                    <div className="questions-three">
                        <div className="questions-three-content">
                            <div className="questions-title">
                                <img className="img-absolute" src={rectanglefor} alt="" />
                                <h2>Почему этим бизнесом<br /> стоит заняться?</h2>
                            </div>
                            <div className="questions-three-content-item">
                                <p>Эксперты показывают увеличение рынка к 2025 году до финансового объема в 87 млрд. американских долларов, а это означает, что рынок видеонаблюдения станет больше в два раза по сравнению с 2020 годом.</p>
                            </div>
                        </div>
                        <div className="questions-photo">
                            <img className="cameraone" src={cameraone} alt="" />
                        </div>
                        <div className="profit-calculator">
                            <img className="calculator img-absolute" src={calculator} alt="" />
                        </div>
                    </div>
                    <div className="profit">
                        <div className="profit-content">
                            <div className="profit-title">
                                <h3 className="img-absolute profit-title-shadow">#прибыль</h3>
                                <h3 className="profit-title-item">Ваша прибыль</h3>
                            </div>
                            <div className="profit-content-items">
                                <div className="profit-content-item">
                                    <div className="rectangle"></div>
                                    <div className="profit-content-item-content">
                                        <h4 className="text-right">64 000 рублей</h4>
                                        <p className="text-right">Средний чек по итогам 2022 года</p>
                                    </div>
                                </div>
                                <div className="profit-content-item">
                                    <div className="rectangle"></div>
                                    <div className="profit-content-item-content displacement-item">
                                        <h4>8-12 клиентов ежемесячно</h4>
                                        <p>Мы работаем на рынке в сфере услуг и радуем своих клиентов</p>
                                    </div>
                                </div>
                                <div className="profit-content-item">
                                    <div className="rectangle color-one"></div>
                                    <div className="profit-content-item-content">
                                        <h4 className="text-right">33 000 рублей</h4>
                                        <p className="text-right">Затратная часть на оборудование</p>
                                    </div>
                                </div>
                                <div className="profit-content-item">
                                    <div className="rectangle color-one"></div>
                                    <div className="profit-content-item-content">
                                        <h4>от 512 000 рублей</h4>
                                        <p>Средний валовый доход</p>
                                    </div>
                                </div>
                                <div className="profit-content-item">
                                    <div className="rectangle color-two"></div>
                                    <div className="profit-content-item-content">
                                        <h4 className="text-right">3 000 рублей</h4>
                                        <p className="text-right">Стоимость привлечения клиента</p>
                                    </div>
                                </div>
                                <div className="profit-content-item color-three">
                                    <div className="rectangle color-for"></div>
                                    <div className="profit-content-item-content color-text">
                                        <h4>от 150 000 рублей</h4>
                                        <p>Чистая прибыль за вычетом всех зарплат</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="profit-calculator element-hidden">
                            <img className="calculator img-absolute" src={calculator} alt="" />
                        </div>
                    </div>
                    <div className="questions-for">
                        <div className="questions-for-content">
                            <div className="questions-title questions-for-title">
                                <img className="img-absolute" src={rectanglefor} alt="" />
                                <h2>Почему стоит начинать бизнес вместе с нами?</h2>
                                <h3>Выгодные стороны, отличающие нас от конкурентов</h3>
                            </div>
                        </div>
                        <div className="questions-for-advantages">
                            <div className="questions-for-item">
                                <img src={questionsicon} alt="" />
                                <div className="questions-for-content">
                                    <h3>Документация</h3>
                                    <p>Договор на предоставление услуг <br />Чек-лист первичного осмотра объекта <br />Готовые макеты смет и коммерческих предложений.</p>
                                </div>
                            </div>
                            <div className="questions-for-item">
                                <img src={questionsiconone} alt="" />
                                <div className="questions-for-content text-left">
                                <h3>Программное обеспечение</h3>
                                <p>Конверсионный сайт <br />Настроенная CRM система <br />Настроенная рекламная компания <br />Техническая поддержка <br />Социальные сети</p>
                                </div>
                            </div>
                            <div className="questions-for-item">
                                <img src={questionsicontwo} alt="" />
                                <div className="questions-for-content">
                                    <h3>Автоматизация</h3>
                                    <p>Выстраивание всех бизнес процессов <br />Персональный менеджер по запуску бизнеса <br />Гарантия возврата при отсутствии продаж</p>
                                </div>
                            </div>
                        </div>
                        <div className="questions-for-conteiner">
                            <div  className="ellipse-releitive">
                                <img className="img-absolute" src={ellipse} alt="" />
                            </div>
                            <div className="questions-for-text">
                                <p>Количество клиентов в месяц может варьироваться от 8 до 12 клиентов ежемесячно</p>
                                <p className="text-padding-top">Средний чек может быть от 40 000 рублей - базовый комплект системы наблюдения для Дачи и до 240 000 - полный комплект IP системы видеонаблюдения + Домофон</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Questions;
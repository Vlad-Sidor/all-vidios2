import rectanglefor from "../assets/images/rectanglefor.svg";
import rectanglecalculation from "../assets/images/rectanglecalculation.png";

const Packages = () => {
    return ( 
        <>
            <div className="packages">
                <div className="wrapper">
                    <div>
                        <div className="packages-title">
                            <img className="img-absolute" src={rectanglefor} alt="" />
                            <h2>Пакеты</h2>
                        </div>
                    </div>
                </div>
                <div  className="packages-standard">
                    <div className="packages-rectangle"></div>
                    <div className="packages-standard-title">
                        <h2>пакет 1</h2>
                        <h3>Стандарт</h3>
                        <h4>Все могу делать сам</h4>
                        <p>(владелец бизнеса самостоятельно занимается принятием и обзвоном заявок и самостоятельно выполняет монтаж)</p>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="packages-standard-items">
                        <div className="flex-collumn">
                            <div className="packages-standard-item">
                                <div className="packages-standard-item-content">
                                    <h2 className="line">Оформление ИП </h2>
                                    <p>госпошлина 800 руб.</p>
                                </div>
                            </div>
                            <div className="packages-standard-item standard-item-width">
                                <div className="packages-standard-item-content">
                                    <h2 className="line">Платформа для сайта на Тильде</h2>
                                    <p>от 500 руб. (платеж ежемесячный, достаточно для одного сайта)</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="packages-standard-item standard-item-width">
                                <div className="packages-standard-item-content">
                                    <h2 className="line">Оплата CRM системы </h2>
                                    <p>от 800 руб./месяц пользования</p>
                                </div>
                                <p>(настройка CRM системы производиться нами, бесплатно)</p>
                            </div>
                            <div className="packages-standard-item">
                                <div className="packages-standard-item-content">
                                    <h2 className="line">Рекламный бюджет на Яндекс Директ</h2>
                                    <p>от 15000 руб.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="packages-standard-item standard-item-width">
                                <div className="packages-standard-item-content">
                                    <h2 className="line">Рекламный бюджет Авито</h2>
                                    <p>от 8000 руб.</p>
                                </div>
                                <p>(на начальном этапе)</p>
                            </div>
                            <div className="packages-standard-item">
                                <div className="packages-standard-item-content">
                                    <h2 className="line">Ноутбук</h2>
                                    <p>от 25000 руб. </p>
                                </div>
                                <p> (для работы с клиентами и настройки оборудования на объекте)</p>
                            </div> 
                        </div>     
                    </div>
                    <div className="profit-calculation">
                        <div>
                            <div className="profit-calculation-title">
                               <h2>Примерный расчет прибыли</h2> 
                            </div>
                            <div className="position-img">
                                <img src={rectanglecalculation} alt="" />
                            </div>
                            <div className="position-items">
                                <div className="profit-calculation-items">
                                    <div className="profit-calculation-item">
                                        <h2>Среднее количество клиентов</h2>
                                        <h3>6-8</h3>
                                    </div>
                                    <div className="profit-calculation-item">
                                        <h2>Средняя стоимость привлечения клиента</h2>
                                        <h3>от 3000 руб.</h3>
                                    </div>
                                    <div className="profit-calculation-item">
                                        <h2>Средний чек</h2>
                                        <h3>в районе 60 000 руб.</h3>
                                        <p>(чек одного клиента может варьироваться от 15000 руб. до 240000 и более)</p>
                                    </div>
                                    <div className="profit-calculation-item">
                                        <h2>Чистая прибыль с 1-го клиента, за вычетом стоимости оборудования</h2>
                                        <p>(реальная стоимость оборудования 45% от среднего чека)</p>
                                        <h3>33000 руб.</h3>
                                    </div>
                                    <div className="profit-calculation-item">
                                        <h2>Затратная часть на первичные выезды к клиентам</h2>
                                        <h3>от 5000 руб.</h3>
                                    </div>
                                    <div className="profit-calculation-item">
                                        <h2>Средний валовый доход</h2>
                                        <p>(за вычетом стоимости оборудования)</p>
                                        <h3>от 198000 руб. <br />до 264000 руб.</h3>
                                    </div>
                                    <div className="profit-calculation-item">
                                        <h2>Затратная часть от</h2>
                                        <h3>29300 руб.</h3>
                                        <h2>+ услуги маркетолога</h2>
                                        <h3>25000 руб.</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="net-profit">
                                <div className="net-profit-content">
                                    <div className="h-content">
                                        <h2><span>Чистый доход</span>, за вычетом затратной части и налога 6%</h2>
                                    </div>
                                    <h3>от 135078 руб.</h3>
                                    <h3>до 197118 руб.</h3>
                                    <div className="p-content">
                                        <p>(процент налога зависит от выбранной системы налогообложения)</p>
                                    </div>
                                    <h4>Гарантированно выводим на чистый доход<br /> от 150000 руб. в течении года</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Packages;
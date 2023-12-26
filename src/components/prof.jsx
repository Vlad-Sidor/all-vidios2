import rectanglefor from "../assets/images/rectanglefor.svg";
import rectanglecalculation from "../assets/images/rectanglecalculation.png";
import rectanglecalculationtwo from "../assets/images/rectanglecalculationtwo.png";

const Prof = () => {
    return ( 
        <>
            <div className="packages prof">
                <div  className="packages-standard">
                    <div className="packages-rectangle"></div>
                    <div className="packages-standard-title">
                        <h2>пакет 2</h2>
                        <h3>Профи</h3>
                        <h4>Наличие шоу-рум и монтажной <br /> бригады по сдельной оплате</h4>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="packages-standard-items">
                        <div className="flex-collumn">
                            <div className="packages-standard-item standard-item-litle-width">
                                <div className="packages-standard-item-content standard-item-padding">
                                    <h2 className="line">Оформление ИП</h2>
                                    <p>госпошлина 800 руб.</p>
                                </div>
                            </div>
                            <div className="packages-standard-item standard-item-width">
                                <div className="packages-standard-item-content">
                                    <h2 className="line">Платформа для сайта на Тильде</h2>
                                    <p>от 500 руб. (платеж ежемесячный, достаточно для одного сайта)</p>
                                </div>
                            </div>
                            <div className="packages-standard-item standard-item-width">
                                <div className="packages-standard-item-content standard-item-padding">
                                    <h2 className="line">Аренда помещения (20-30 кв.м)</h2>
                                    <h3>800 - 1000 руб/кв.м</h3>
                                    <p>от 30 000 руб.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="packages-standard-item standard-item-width">
                                <div className="packages-standard-item-content ">
                                    <h2 className="line">Оплата CRM системы </h2>
                                    <p>от 800 руб./месяц пользования</p>
                                </div>
                                <p>(настройка CRM системы производиться нами, бесплатно)</p>
                            </div>
                            <div className="packages-standard-item">
                                <div className="packages-standard-item-content standard-item-padding">
                                    <h2 className="line">Рекламный бюджет на Яндекс Директ</h2>
                                    <p>от 15000 руб.</p>
                                </div>
                            </div>
                            <div className="packages-standard-item standard-item-litle-width">
                                <div className="packages-standard-item-content standard-item-padding">
                                    <h2 className="line">Услуги маркетолога</h2>
                                    <p>от 25000 руб.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="packages-standard-item standard-item-width">
                                <div className="packages-standard-item-content standard-item-padding">
                                    <h2 className="line">Рекламный бюджет Авито</h2>
                                    <p>от 11000 руб.</p>
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
                            <div className="packages-standard-item standard-item-litle-width">
                                <div className="packages-standard-item-content item-litle-width standard-item-padding">
                                    <h2 className="line">Первоначальные инвестиции для презентационного оборудования</h2>
                                    <p>от 100 000 руб.</p>
                                </div>
                            </div>
                            <div className="packages-standard-item standard-item-litle-width">
                                <div className="packages-standard-item-content standard-item-padding">
                                    <h2 className="line">Менеджер по продажам </h2>
                                    <p>от 35000 руб. + % от реализации </p>
                                </div>
                            </div> 
                        </div>     
                    </div>
                    <div className="profit-calculation">
                        <div>
                            <div className="profit-calculation-title">
                               <h2>Примерный расчет прибыли</h2> 
                            </div>
                            <div className="position-img profit-calculation-position-img">
                                <img src={rectanglecalculationtwo} alt="" />
                            </div>
                            <div className="position-items">
                                <div className="profit-calculation-items">
                                    <div className="profit-calculation-item ">
                                        <h2>На монтажных работах (продажа оборудования и монтаж) <br />среднее количество клиентов</h2>
                                        <h3>10-14</h3>
                                    </div>
                                    <div className="profit-calculation-item">
                                        <h2>Средняя стоимость привлечения клиента</h2>
                                        <h3>от 3000 руб.</h3>
                                    </div>
                                    <div className="profit-calculation-item profit-calculation-item-padding">
                                        <h2>Средний чек</h2>
                                        <h3>в районе 60 000 руб.</h3>
                                        <p>(чек одного клиента может варьироваться от 15000 руб. до 240000 и более)</p>
                                    </div>
                                    <div className="profit-calculation-item">
                                        <h2>Чистая прибыль с 1-го клиента, за вычетом стоимости оборудования</h2>
                                        <p>(реальная стоимость оборудования 45% от среднего чека)</p>
                                        <h3><span>33000 руб.</span></h3>
                                    </div>
                                    <div className="profit-calculation-item profit-calculation-item-padding-top">
                                        <h2>Стоимость услуг монтажной бригады</h2>
                                        <h3>15000 руб.</h3>
                                    </div>
                                    <div className="profit-calculation-item profit-calculation-item-padding-top">
                                        <h2>Чистая прибыль с одного объекта</h2>
                                        <h3>от 8000 руб.</h3>
                                    </div>
                                    <div className="profit-calculation-item">
                                        <h2>Затратная часть на<br /> первичные выезды к<br /> клиентам</h2>
                                        <h3>от 5000 руб.</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="net-profit">
                                <div className="net-profit-content">
                                    <div className="h-content">
                                        <h2><span>Средний чистый</span> доход</h2>
                                    </div>
                                    <h3>от 80000 </h3>
                                    <h3>до 112000 руб.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profit-calculation">
                        <div>
                            <div className="profit-calculation-title">
                               <h2>На продаже самого оборудования (без монтажа) <br />и настройки готовых комплектов</h2> 
                            </div>
                            <div className="position-items">
                                <div className="profit-calculation-items on-sale">
                                    <div className="on-sale-item">
                                        <h2>Среднее количество продаж комплектов оборудования</h2>
                                        <div className="on-sale-item-content">
                                            <h3>12</h3>
                                            <p>(средний показатель по году)</p>
                                        </div>
                                    </div>
                                    <div className="on-sale-item">
                                        
                                        <h2>Средний чек при продаже оборудования</h2>
                                        <h3> в районе 15000</h3>
                                        <p>(чек одного клиента может варьироваться от 5800 руб. до 123000 руб.  и более)</p>
                                    </div>
                                    <div className="on-sale-item">
                                        <h2>Средняя стоимость настройки и подготовки комплектов видеонаблюдения</h2>
                                        <h3>от 3000 руб.</h3>
                                    </div>
                                    <div className="on-sale-item">
                                        <h2>Количество подготовки готовых комплектов (настройки в офисе)</h2>
                                        <div className="on-sale-item-content">
                                            <h3>5</h3>
                                            <p>(средний показатель по году)</p>
                                        </div>
                                    </div>
                                    <div className="on-sale-item">
                                        <h2>Чистая прибыль с 1-го клиента, за вычетом стоимость оборудование (реальная стоимость оборудования 20% от среднего чека)</h2>
                                        <h3>от 3000 руб.</h3>
                                    </div>
                                    <div className="on-sale-item">
                                        <h2>Чистая прибыль с 1-го клиента, за настройку оборудования</h2>
                                        <h3>15000 руб.</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="net-profit on-sale-profit">
                                <div className="net-profit-content">
                                    <div className="h-content">
                                        <h2><span>Чистая</span> прибыль</h2>
                                    </div>
                                    <h3>41000 руб.</h3>
                                </div>
                                <p>На техническом обслуживании (после взятия объекта на техническое обслуживание, оплата<br /> производиться ежемесячно, онлайн мониторинг, выезд не более й раза в 2 месяца, по<br /> необходимости)</p>
                            </div>
                            <div className="position-items">
                                <div className="profit-calculation-items on-sale">
                                    <div className="on-sale-item client-item">
                                        <h2>Среднее количество<br /> клиентов</h2>
                                        <h3>от 10</h3>
                                        <p>(в течении 2х лет)</p>
                                    </div>
                                    <div className="on-sale-item client-item">
                                        <h2>Средняя стоимость<br /> технического<br /> обслуживания 1го<br /> объекта</h2>
                                        <h3>от 23000 руб.</h3>
                                    </div>
                                    <div className="on-sale-item client-item">
                                        <h2>Чистая прибыль с 10 <br />объектов</h2>
                                        <h3>230000 руб.</h3>
                                        <h2>ежемесячно на<br /> постоянной основе</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="net-profit on-sale-profit">
                                <div className="net-profit-content">
                                    <div className="h-content span-content">
                                        <h2>Средняя чистая прибыль до</h2>
                                        <h3><span>383000</span> руб.</h3>
                                    </div>
                                </div>
                                <div className="content-center">
                                    <p>Гарантированно выводим на доход от 300000 руб. в<br /> течении 2-х лет</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Prof;
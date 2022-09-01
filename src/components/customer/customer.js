import React from 'react';

const Customer = () => {
    return (
        <section id="customer">
            <div className="container">
                <div className="customer--general">
                    <div className="customer--general__block">
                        <h1>Есть груз <span>прямо сейчас?</span></h1>
                        <label className="customer--general__block--group">
                            <input type="text" placeholder="Ф.И.О.*" className="customer--general__block--group__name"/>
                                <input type="number" placeholder="Номер вашего телефона*" className="customer--general__block--group__name2"/>
                        </label>
                        <h2>Выберите <span>подходящие</span> услуги:*</h2>
                        <div className="customer--general__block--radio">
                            <div>
                                <input type="radio"/>
                                <p>Портер</p>
                            </div>
                            <div>
                                <input type="radio"/>
                                <p>Грузчики</p>
                            </div>
                            <div>
                                <input type="radio"/>
                                <p>Разборка/сборка <br />мебели</p>
                            </div>
                            <div>
                                <input type="radio"/>
                                <p>Вывоз мусора</p>
                            </div>
                        </div>
                        <textarea cols="10" rows="3">Комментарии к заказу (необязательно)</textarea>
                    </div>
                    <p>  Услуги портер такси и грузчиков в Бишкеке - мы любим и гордимся своей работой и сделаем все <br />возможное, чтобы  наши услуги грузоперевозок были максимально качественными и быстрыми.
                        <br /><br />Мы всегда будем рады видеть Вас среди наших постоянных Гостей!
                        <br /><br />У нас разработаны выгодные тарифы, которые позволят недорого заказать Портер Такси для <br />перевозки мебели, техники, вещей, строительных материалов, а также перевезти крупногабаритный <br />и тяжелый груз.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Customer;
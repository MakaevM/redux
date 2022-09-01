import React from 'react';
import Slider from "react-slick";
import Data from "../../styles/services/data";


const Services = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: false,
    };
    return (<section id="services">
        <div className="container">
            <div className="services--general__line"></div>
            <p className="services--general__description">Грузовые перевозки по низкой цене осуществляются в <br/>любое
                время дня и ночи. Организуем комфортный переезд <br/>или быструю доставку груза по Бишкеку и
                Кыргызстану.</p>
            <div className="services--general">
                <Slider {...settings}>
                    {
                        Data.map(el => {
                            return (
                                <div key={el.id}>
                                    <div>
                                        <div className="services--general__block">
                                            <img src={el.img} alt="img"/>
                                            <h1>{el.title}</h1>
                                            <p>{el.desc}</p>
                                            <h2>{el.price}</h2>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    </section>);
};

export default Services;
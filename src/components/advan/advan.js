import React from 'react';
import h from "./../../asstets/img/home.png"
import pr from"./../../asstets/img/pr.png"
import gr from "./../../asstets/img/gr.png"
import lk from "./../../asstets/img/lk.png"

const Advan = () => {
    return (
        <section id="advan">
            <div className="container">
                <div className="advan--general">
                    <div className="advan--general__block">
                        <img src={h} alt="img" className="home"/>
                        <p>Надёжная и бережная <br/>доставка</p>
                    </div>
                    <h1>Преи<span>мущес</span>тва</h1>
                    <div className="advan--general__block">
                        <img src={pr} alt="img" className="home"/>
                        <p>Саблюдаем дорожные <br />правила и этикет</p>
                    </div>
                </div>
                <div className="advan--general">
                    <div className="advan--general__block">
                        <img src={gr} alt="img" className="home"/>
                        <p>5 лет опыта работы</p>
                    </div>
                    <div className="advan--general__block">
                        <img src={lk} alt="img" className="home"/>
                        <p>На месте когда и где <br />нужно</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advan;
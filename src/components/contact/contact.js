import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <div className="contact--general">
                    <h1>Кон<span>такты</span></h1>
                    <div className="contact--general__group">
                        <h3>0555-07-12-39</h3>
                        <h3>0704-72-28-62</h3>
                    </div>
                    <h1>Напи<span>сать</span></h1>
                    <div className="contact--general__group1">
                        <div className="contact--general__group1--tel">
                            <div><i className="fa-brands fa-telegram"></i></div>
                        </div>
                       <div className="contact--general__group1--wpp">
                           <div><i className="fa-brands fa-whatsapp"></i></div>
                       </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
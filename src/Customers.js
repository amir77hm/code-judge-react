import React, { Component } from 'react'
import TextHeader from "./TextHeader";
import { BeOurClientItem as Item } from "./BeOurClientItem";
import unnamed from "./assets/img/unnamed.png";
import logoG5DpWX52RM from "./assets/img/logo-G5DpWX52RM.png";

export default class Customers extends Component {
    render() {
        return (
            <section className="customers">
                <TextHeader purple='اینجا' prev=' چه کسانی' next='هستند' />
                <div className="content">
                    <div className="container">
                        <div className="services">
                            <div className="services__recivers">
                                <h4 className="services__recivers-title">سرویس گیرنده های ما</h4>
                                <div className="services__recivers-images">
                                    <img src={unnamed} alt="iut" className="iut" />
                                    <img src={logoG5DpWX52RM} alt="mizan" className="mizan" />
                                </div>
                            </div>

                            <div className="services__nums">
                                <Item name='مراکز آموزشی' num='+8' />
                                <Item name='استاد' num='+50' />
                                <Item name='دانشجو' num='+10000' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

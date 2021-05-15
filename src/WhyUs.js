import React, { Component } from 'react'
import TextHeader from "./TextHeader";
import Illustration2 from "./assets/img/Illustration2.png";

export default class WhyUs extends Component {
    render() {
        return (
            <section className="whyUs">
                <div className="container">
                    <TextHeader prev='چرا ما را انتخاب میکنند ؟' />
                    <div className="content">
                        <div className="left-list">
                            <ul className="items">
                                <li className="item" className="item">
                                    تخصصی‌ترین فضا برای مدیریت دوره‌های برنامه‌نویسی</li>
                                <li className="item">بک‌آپ گیری‌های منظم</li>
                                <li className="item">ساخت آزمون و تکالیف تشریحی</li>
                                <li className="item">امکان ارتقاء سامانه متناسب با نیاز مراکز</li>
                            </ul>
                        </div>
                        <div className="center-image">
                            <img src={Illustration2} alt="Illustration" />
                        </div>
                        <div className="right-list">
                            <ul className="items">
                                <li className="item">انعطاف و کنترل کامل کلاس</li>
                                <li className="item">پشتیبانی از اکثر زبان‌های برنامه‌نویسی</li>
                                <li className="item">امکان پذیرش همزمان کاربران</li>
                                <li className="item">تعهد به ارایه سرویس در بلند‌مدت</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

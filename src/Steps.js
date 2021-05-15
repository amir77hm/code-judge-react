import React, { Component } from 'react'
import StepsCard from "./StepsCard";
import TextHeader from "./TextHeader";
import icon_timer from "./assets/img/icon_timer.png";

export default class Steps extends Component {
    render() {
        return (
            <section className="steps">
                <div className="container">

                    <TextHeader prev='تنها با سه گام مدیریت کلاس خود را متحول کنید' />
                    <div className="items">
                        <div className="item active">
                            <StepsCard number='1' text1='کلاس آموزشی خود را ایجاد و ' text2='.فراگیران خود را به آن اضافه کنید' />
                        </div>
                        <div className="item arrows">
                            <StepsCard number='2' text1='محتوای درسی و تکالیف یا آزمون را ' text2='.برای هر جلسه آموزشی تعریف کنید' color='benafsh' />
                        </div>
                        <div className="item">
                            <StepsCard number='3' text1='فراگیران می‌توانند پس مشاهده محتوا' text2='پاسخ ارسال کنند و تنها پس از چند ' text3='.لحظه نتیجه کار دریافت کنند' />
                        </div>
                    </div>
                    <div className="timing">
                        <div className="timing__box">
                            <img src={icon_timer} alt="timer" />
                            <p>بدون نیاز به آموزش اولیه در چند ثانیه</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

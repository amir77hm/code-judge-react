import React, { Component } from 'react'
import Navbar from './Navbar'

import Illustration from "./assets/img/Illustration.png"

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <Navbar />
                    <div className="content">
                        <div className="content__img">
                            <img src={Illustration} alt="Illustration" />
                        </div>
                        <div className="content__text">
                            <h1>کد جاج</h1>
                            <h3>
                                <span> یک ارزیاب هوشمند و داینامیک ، پلتفرمی تخصصی برای </span>
                                <span>.مدیریت هوشمندانه‌ی کلاس‌های مجازی برنامه نویسی است</span>
                            </h3>
                            <a href="# " className="btn btn-hover btn-hover__primary">!همین حالا شروع کن</a>
                        </div>
                    </div>
                </div>
            </header>

        )
    }
}

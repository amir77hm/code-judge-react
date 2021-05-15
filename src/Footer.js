import React, { Component } from 'react'

import iran1 from "./assets/img/iran1.png";
import isfahan1 from "./assets/img/isfahan1.png";
import samandehi from "./assets/img/samandehi.png";
import LogoFooter from "./assets/img/Logo-footer.png";
import instagram from "./assets/img/001-instagram.png";
import twitter from "./assets/img/002-twitter.png";
import linkedin from "./assets/img/003-linkedin.png";
import whatsapp from "./assets/img/004-whatsapp.png";
import github from "./assets/img/005-github.png";

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="email-box">
                        <form>
                            <label for="email">
                                .برای دریافت پیشنهادات ویژه ایمیل خود را وارد کنید</label>
                            <div className="email">
                                <input
                                    type="email"
                                    id="email"
                                    className="inputEmail"
                                    name="email"
                                    placeholder="ایمیل خود را وارد کنید"
                                />
                                <a className="submitBtn btn btn-hover btn-hover__white">ارسال</a>
                            </div>
                        </form>
                    </div>
                    <div className="content-box">
                        <div className="grid-system">
                            <div className="logos">
                                <div className="img">
                                    <img className="iran" src={iran1} alt="iran" />
                                </div>
                                <div className="img">
                                    <img src={isfahan1} alt="isfahan" />
                                </div>
                                <div className="img">
                                    <img src={samandehi} alt="samandehi" />
                                </div>
                            </div>
                            <div className="Helpful-links">
                                <ul className="Helpful-links__items">
                                    <li className="Header Helpful-links__item">
                                        <a href="#" className="Helpful-links__link"> لینک‌های مفید </a>
                                    </li>
                                    <li className="Helpful-links__item">
                                        <a href="#" className="Helpful-links__link">
                                            شرکت میزان گستر علم و دانش</a>
                                    </li>
                                    <li className="Helpful-links__item">
                                        <a href="#" className="Helpful-links__link">
                                            شرکت علمی و تحقیقاتی اصفهان
                                        </a>
                                    </li>
                                    <li className="Helpful-links__item">
                                        <a href="#" className="Helpful-links__link">
                                            دانشگاه صنعتی اصفهان
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="codejudge-links">
                                <ul className="codejudge-links__items">
                                    <li className="Header codejudge-links__item">
                                        <a href="#" className="codejudge-links__link"> کدجاج </a>
                                    </li>
                                    <li className="codejudge-links__item">
                                        <a href="#" className="codejudge-links__link">داستان ما</a>
                                    </li>
                                    <li className="codejudge-links__item">
                                        <a href="#" className="codejudge-links__link">ارتباط با ما</a>
                                    </li>
                                    <li className="codejudge-links__item">
                                        <a href="#" className="codejudge-links__link">راهنمای راهبری</a>
                                    </li>
                                    <li className="codejudge-links__item">
                                        <a href="#" className="codejudge-links__link">راهنمای کاربری</a>
                                    </li>
                                    <li className="codejudge-links__item">
                                        <a href="#" className="codejudge-links__link">وبلاگ</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="codejudge-logo">
                                <img src={LogoFooter} alt="logo" />
                                <p>اولین و تنها سامانه تمرین و آزمون آنلاین در ایران</p>
                                <p className="details">
                                    <span>کدجاج یک ارزیاب هوشمند و داینامیک</span>

                                    <span>پلتفرمی تخصصی برای مدیریت هوشمندانه‌ی</span>

                                    <span>.کلاس‌های مجازی برنامه‌نویسی است</span>
                                </p>
                            </div>
                            <div className="social">
                                <p>ما را در شبکه‌های اجتماعی دنبال کنید</p>
                                <div className="social__logos">
                                    <img src={instagram} alt="instagram" />
                                    <img src={twitter} alt="twitter" />
                                    <img src={linkedin} alt="linkedin" />
                                    <img src={whatsapp} alt="whatsapp" />
                                    <img src={github} alt="github" />
                                </div>
                            </div>
                            <div className="phones">
                                <div className="title">
                                    پشتیبانی ۷ روز هفته
                                        <i className="fal fa-phone-alt"></i>
                                </div>
                                <div className="phone">
                                    <span>۰۳۱۳۳۳۹۳۲۲۴۰ </span>
                                    <span>۰۹۱۳۰۳۹۴۵۲۷</span>
                                </div>
                            </div>
                            <div className="addresses">
                                <div className="title">
                                    : دفتر مرکزی
                                    <i className="far fa-map-marker-alt"></i>
                                </div>
                                <div className="address">
                                    - اصفهان - شهرک علمی و تحقیقاتی اصفهان

                                <br />
                                ساختمان ابوریحان - واحد ۱۳۵
                            </div>
                            </div>
                        </div>
                        <div className="copyRight">
                            <p>
                                <span className="rtl"> می باشد. بهاره داودی</span>
                                <span>codejudge</span>
                                <span className="rtl">کلیه حقوق این سایت متعلق به</span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

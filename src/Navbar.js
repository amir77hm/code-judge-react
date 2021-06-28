import React, { useContext } from 'react'
import logo from './assets/img/logo-header.png'
import { LoginContext } from "./contexts/Login.context";



export default function Navbar(props) {

    return (
        <nav className="navigation">
            <input type="checkbox" name="toggler" id="toggler" />
            <label htmlFor="toggler" className="toggle-nav__label">
                <div className="toggle-nav__icon"></div>
            </label>
            <div className="toggle-menu">
                <div className="authentication">
                    <div
                        onClick={() => props.history.push('/login')}
                        className="btn btn-hover btn-hover__white"
                    >ورود / ثبت نام</div>
                </div>
                <ul className="menu">
                    <li className="menu__item">
                        <a href="# " className="menu__link">صفحه اصلی</a>
                    </li>
                    <li className="menu__item">
                        <a href="# " className="menu__link">معرفی سرویس</a>
                    </li>
                    <li className="menu__item">
                        <a href="# " className="menu__link">خدمات ما</a>
                    </li>
                    <li className="menu__item">
                        <a href="# " className="menu__link">راهکارهای توسعه</a>
                    </li>
                    <li className="menu__item">
                        <a href="# " className="menu__link">چرا ما ؟</a>
                    </li>
                    <li className="menu__item">
                        <a href="# " className="menu__link">مشتریان ما</a>
                    </li>
                    <li className="menu__item">
                        <a href="# " className="menu__link">سوالات متداول</a>
                    </li>
                    <li className="menu__item">
                        <a href="# " className="menu__link">درباره ما</a>
                    </li>
                </ul>
            </div>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
        </nav>
    )
}

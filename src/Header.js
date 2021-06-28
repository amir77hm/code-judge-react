import React, { useContext } from 'react'
import Navbar from './Navbar'
import { LoginContext } from "./contexts/Login.context";
import { SignUpContext } from './contexts/SignUp.context'
import Illustration from "./assets/img/Illustration.png"

export default function Header(props) {

    // const { name, isUserLoggedIn, email, changeState } = useContext(LoginContext)
    // const { family } = useContext(SignUpContext)
    // console.log([family])

    return (
        <header className="header">
            <div className="container">
                <Navbar history={props.history} />
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


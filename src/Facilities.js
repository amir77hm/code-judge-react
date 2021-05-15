import React, { Component } from 'react'
import { FactilitiesCard as Card } from "./FactilitiesCard";
import TextHeader from "./TextHeader";
import icon_presentation from "./assets/img/icon_presentation.png";
import icon_creation from "./assets/img/icon_creation.png";
import icon_management from "./assets/img/icon_management.png";


export default class Facilities extends Component {
    render() {
        return (
            <section className="facilities">
                <div className="container">
                    <TextHeader purple='جامع' prev='امکانات ' next=' ما' />

                    <p className="Needless">...شما بی نیاز می شوید</p>
                    <div className="items">
                        <Card image={icon_presentation} alt='presentation' text1='ارایه سرویس ارزیابی هوشمندانه ' text2='سورس کدهای برنامه نویسی' />
                        <Card image={icon_creation} alt='creation' text1='ایجاد و تصحیح تکالیف و ' text2='آزمون‌های تشریحی برنامه نویسی' />
                        <Card image={icon_management} alt='management' text1='مدیریت هوشمند و تخصصی ' text2='کلاس‌های مجازی برنامه نویسی' />
                    </div>
                    <div className="btns">
                        <a href="# " className="btn-catalog btn-hover btn-hover__red">
                            دانلود کاتالوگ</a>
                        <a href="# " className="btn-more btn-hover btn-hover__white">بیشتر</a>
                    </div>
                </div>
            </section>
        )
    }
}

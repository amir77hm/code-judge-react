import React, { Component } from 'react'

export default class BeOurClient extends Component {
    render() {
        return (
            <section className="ourClient">
                <div className="container">
                    <div className="box">
                        <h2>سرویس‌گیرنده ما باشید</h2>
                        <span>اگر شما ارائه‌دهنده سامانه‌های مدیریت دروس هستید یا قبلا سامانه‌های
                            مشابه را تهیه کرده‌اید</span>
                        <span>می‌توانید جهت مشاوره‌ی افزودن این امکان به سامانه خود و
            یکپارچه‌سازی آن با ما در تماس باشید</span>
                        <div className='button'>
                            <a href="#" className="btn btn-hover btn-hover__primary">تماس بگیرید</a>

                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

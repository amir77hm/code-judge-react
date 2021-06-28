import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import icon from './assets/img/sign-up.png'
// import { CSSTransition } from 'react-transition-group'
import { SignUpContext } from './contexts/SignUp.context'

const useStyles = makeStyles((theme) => ({
    form: {
        minWidth: '35rem',
        backgroundColor: 'white',
        padding: '2rem',
        maxHeight: 'auto',
        borderRadius: '6px',
        position: 'relative'
    },
}));

export default function SignUp2(props) {
    const classes = useStyles();
    const { step, email, password, handleChange } = useContext(SignUpContext)
    if (step === 2) {
        return (
            <div className='signUp'>
                <form className={classes.form}>
                    <div
                        className='close'
                        onClick={() => props.history.push('/')}
                    />
                    <div className='icon-login'>
                        <img src={icon} alt='icon' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email2">ایمیل</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email2"
                            value={email}
                            onChange={(e) => handleChange('email', e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd12">کلمه عبور</label>
                        <input
                            type="password"
                            className="form-control"
                            id="pwd12"
                            value={password}
                            onChange={(e) => handleChange('password', e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">تکرار کلمه عبور</label>
                        <input type="password" className="form-control" id="pwd" />
                    </div>
                    <div className='btns'>
                        <button
                            onClick={() => handleChange('next')}
                            className="btn-sign"
                        >مرحله بعد</button>
                        <button
                            className="btn-sign"
                            onClick={() => handleChange('back')}
                        >مرحله قبل</button>
                    </div>
                </form>
            </div >
        );
    }
    return null
}
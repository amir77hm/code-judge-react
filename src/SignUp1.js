import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import icon from './assets/img/sign-up.png'
import { CSSTransition } from 'react-transition-group'
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

export default function SignUp1(props) {
    const classes = useStyles();
    const { step, family, mobile, handleChange } = useContext(SignUpContext)

    if (step === 1) {
        return (
            <div className='signUp'>
                <CSSTransition
                    timeout={30000}
                    classNames="form"
                    in={props.match != null}
                >
                    <form className={classes.form}>
                        <div
                            className='close'
                            onClick={() => props.history.push('/')}
                        />
                        <div className='icon-login'>
                            <img src={icon} alt='icon' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="family">نام و نام خانوادگی</label>
                            <input
                                type="text"
                                className="form-control"
                                id="family"
                                value={family}
                                onChange={(e) => handleChange('family', e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mobile">شماره موبایل</label>
                            <input
                                type="number"
                                className="form-control"
                                id="mobile"
                                value={mobile}
                                onChange={(e) => handleChange('mobile', e.target.value)}
                            />
                        </div>
                        <div className='btns'>
                            <button
                                className="btn-sign"
                                onClick={() => handleChange('next')}
                            >مرحله بعدی</button>
                        </div>
                    </form>
                </CSSTransition>
            </div >
        );
    }
    return null
}



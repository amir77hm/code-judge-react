import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import icon from './assets/img/sign-up.png'
import { SignUpContext } from './contexts/SignUp.context'
import { LoginContext } from './contexts/Login.context';
import { useForm } from 'react-hook-form'

const useStyles = makeStyles((theme) => ({
    form: {
        minWidth: '35rem',
        backgroundColor: 'white',
        padding: '2rem',
        maxHeight: 'auto',
        borderRadius: '6px',
        position: 'relative',
    },
}));

export default function SignUp2(props) {
    const classes = useStyles();
    const { step, email, password, handleChange } = useContext(SignUpContext)
    const { changeState } = useContext(LoginContext)
    const { register, handleSubmit, formState: { errors }, trigger } = useForm({
        defaultValues: {
            email: email,
            password: password,
        }
    })
    const onSubmit = (data) => {
        handleChange('email', data.email)
        handleChange('password', data.password)
        handleChange('next')
        setTimeout(() => {
            changeState('logged')
        }, 2000)
    }
    if (step === 2) {
        return (
            <div className='signUp' >
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
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
                            {...register('email', {
                                required: 'email is required',
                                pattern: {
                                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'invalid email'
                                }
                            })}
                            className={`form-control ${errors.email ? 'invalid' : null}`}
                            id="email2"
                            style={{ textAlign: 'left' }}
                            onKeyUp={() => trigger('email')}
                        />
                        {errors.email && <div className='input-error'>{errors.email.message}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd2">کلمه عبور</label>
                        <input
                            {...register('password', {
                                required: 'password is required',
                                minLength: {
                                    value: 4,
                                    message: 'weak password'
                                }
                            })}
                            type="password"
                            className={`form-control ${errors.password ? 'invalid' : null}`}
                            id="pwd2"
                            style={{ textAlign: 'left' }}
                            onKeyUp={() => trigger('password')}
                        />
                        {errors.password && <div className='input-error'>{errors.password.message}</div>}
                    </div>
                    <div className='btns'>
                        <button
                            type='submit'
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
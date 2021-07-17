import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import icon from './assets/img/locksmith.png'
import { LoginContext } from "./contexts/Login.context";
import Spinner from "./Spinner";
import { useForm } from 'react-hook-form'


const useStyles = makeStyles((theme) => ({
    sinUp: {
        cursor: 'pointer',
        fontSize: '1.2rem',
        marginTop: theme.spacing(1.3),
        color: 'green',
        '&:hover': {
            color: 'black',
            fontWeight: 'bold'
        }
    },
}));

export default function Login(props) {
    const classes = useStyles();
    const { name, spinner, email, password, rememberMe, changeState } = useContext(LoginContext)

    const { register, handleSubmit, formState: { errors }, trigger } = useForm({
        defaultValues: {
            name: name,
            email: email,
            password: password
        }
    }
    )

    const onSubmit = (data) => {
        changeState('spinner')
        changeState('email', data.email)
        changeState('password', data.password)
        changeState('name', data.name)
        setTimeout(() => {
            changeState('logged')
            changeState('spinner')
            props.history.push('/')
        }, 1000)
    }

    if (spinner) return <div className='login'><Spinner /></div>
    return (
        <div className='login'>
            <form
                className='form'
                onSubmit={handleSubmit(onSubmit)}>
                <div
                    className='close'
                    onClick={() => props.history.push('/')}
                />
                <div className='icon-login'>
                    <img src={icon} alt='icon' />
                </div>
                <div className="form-group">
                    <label htmlFor="email1">ایمیل</label>
                    <input
                        {...register('email', {
                            required: 'email is required',
                            pattern: {
                                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'invalid email'
                            }
                        })}
                        className={`form-control ${errors.email ? 'invalid' : null}`}
                        id="email1"
                        onKeyUp={() => trigger('email')}
                    />
                    {errors.email && <div className='input-error'>{errors.email.message}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">پسورد</label>
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
                        id="password"
                        onKeyUp={() => trigger('password')}
                    />
                    {errors.password && <div className='input-error'>{errors.password.message}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="name">نام شما</label>
                    <input
                        {...register('name', {
                            required: 'name is required',
                        })}
                        type="text"
                        className={`form-control ${errors.name ? 'invalid' : null}`}
                        id="name"
                        onKeyUp={() => trigger('name')}
                    />
                    {errors.name && <div className='input-error'>{errors.name.message}</div>}
                </div>
                <div className="checkbox" >
                    <label>
                        <input
                            type="checkbox"
                            value={rememberMe}
                            onClick={(e) => changeState('rememberMe')}
                        /> مرا به یادآور</label>
                </div>
                <button type='submit' className="btnLogin">ورود</button>
                <div
                    className={classes.sinUp}
                    onClick={() => props.history.push('/signUp')}
                ><p>عضو نیستی؟ ثبت نام کن</p></div>
            </form>
        </div >
    );
}
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
        position: 'relative'
    },
}));

export default function SignUp1(props) {
    const classes = useStyles();
    const { step, family, mobile, handleChange } = useContext(SignUpContext)
    const { changeState } = useContext(LoginContext)
    const { register, handleSubmit, formState: { errors }, trigger } = useForm({
        defaultValues: {
            family: family,
            mobile: mobile,
        }
    })

    const onSubmit = (data) => {
        handleChange('next')
        handleChange('family', data.family)
        changeState('name', data.family)
        handleChange('mobile', data.mobile)
    }

    if (step === 1) {
        return (
            <div className='signUp'>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
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
                            {...register('family', {
                                required: 'this field required',
                            })}
                            className={`form-control ${errors.family ? 'invalid' : null}`}
                            id="family"
                            onKeyUp={() => trigger('family')}
                        />
                        {errors.family && <div className='input-error'>{errors.family.message}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">شماره موبایل</label>
                        <input
                            {...register('mobile', {
                                required: 'phone is required',
                                pattern: {
                                    value: /^[0-9]*$/,
                                    message: 'only numbers are allowed'
                                },
                            })}
                            className={`form-control ${errors.mobile ? 'invalid' : null}`}
                            id="mobile"
                            onKeyUp={() => trigger('mobile')}
                        // value={mobile}
                        // onChange={(e) => handleChange('mobile', e.target.value)}
                        />
                        {errors.mobile && <div className='input-error'>{errors.mobile.message}</div>}
                    </div>
                    <div className='btns'>
                        <button
                            className="btn-sign"
                            type="submit"
                        >مرحله بعدی</button>
                    </div>
                </form>
            </div>
        );
    }
    return null
}



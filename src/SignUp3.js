import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { CSSTransition } from 'react-transition-group'
import { SignUpContext } from './contexts/SignUp.context'

const useStyles = makeStyles((theme) => ({
    form: {
        minWidth: '35rem',
        backgroundColor: 'white',
        padding: '2rem',
        maxHeight: 'auto',
        borderRadius: '6px',
        position: 'relative',
        fontSize: '1.6rem'
    },
}));

export default function SignUp3(props) {
    const classes = useStyles();
    const { step, handleChange } = useContext(SignUpContext)


    if (step === 3) {
        setTimeout(() => {
            handleChange('reset')
            props.history.push('/')
        }, 2000)

        return (
            <div className='signUp'>
                <form className={classes.form}>
                    <p>ثبت نام شما با موفقیت انجام شد در حال انتفال به سایت ...</p>
                </form>
            </div>
        );
    }
    return null
}
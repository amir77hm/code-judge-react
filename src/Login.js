import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import icon from './assets/img/locksmith.png'
import { CSSTransition } from 'react-transition-group'
import { LoginContext } from "./contexts/Login.context";
import Spinner from "./Spinner";

const useStyles = makeStyles((theme) => ({
    // '@global': {
    //     ".item-enter": {
    //         opacity: '0',
    //     },
    //     '.item-enter-active': {
    //         opacity: '1',
    //         transition: 'opacity 500ms ease-in',
    //     },
    //     '.item-exit': {
    //         opacity: '1',
    //     },
    //     '.item-exit-active': {
    //         opacity: '0',
    //         transition: 'opacity 500ms ease-in',
    //     },
    // },
    // form: {
    //     minWidth: '35rem',
    //     backgroundColor: 'white',
    //     padding: '2rem',
    //     maxHeight: 'auto',
    //     borderRadius: '6px',
    //     position: 'relative',
    //     transition: 'opacity 500ms ease-in-out',
    // },
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        changeState('spinner')
        changeState('logged')
        setTimeout(() => {
            changeState('spinner')
            props.history.push('/')
        }, 1000)
    }

    // console.log([name, email])

    if (spinner) return <div className='login'><Spinner /></div>
    return (
        <div className='login'>
            <CSSTransition
                timeout={300}
                classNames="form"
                in={props.match != null}
            >
                <form
                    className='form'
                    onSubmit={(e) => handleSubmit(e)}>
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
                            type="email"
                            className="form-control"
                            id="email1"
                            value={email}
                            onChange={(e) => changeState('email', e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">پسورد</label>
                        <input
                            type="password"
                            className="form-control"
                            id="pwd"
                            value={password}
                            onChange={(e) => changeState('password', e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">نام شما</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={(e) => changeState('name', e.target.value)}
                        />
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
            </CSSTransition>
        </div >
    );
}
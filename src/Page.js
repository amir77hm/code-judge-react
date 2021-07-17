import React from 'react'
import { withStyles } from "@material-ui/styles";

const styles = {
    '@global': {
        ".page-enter": {
            opacity: '0',
        },
        '.page-enter-active': {
            opacity: '1',
            transition: 'opacity 300ms',
        },
        '.page-exit': {
            opacity: '1',
        },
        '.page-exit-active': {
            opacity: '0',
            transition: 'opacity 300ms',
        },
    },
    page: {
        width: "100vw",
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'fixed',
        top: '0',
        left: '0',
        overflow: 'hidden',
        zIndex: '10',
        direction: 'rtl',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'opacity 5000ms ease-in-out',
    },
}

function Page({ children, classes }) {
    return (
        <section className={classes.page}>
            {children}
        </section>
    )
}

export default withStyles(styles)(Page)
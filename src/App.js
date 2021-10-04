import { Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from './Header'
import Facilities from "./Facilities";
import Customers from "./Customers";
import Steps from "./Steps";
import WhyUs from "./WhyUs";
import BeOurClient from "./BeOurClient";
import Footer from "./Footer";
import Login from './Login'
import SignUp1 from './SignUp1'
import SignUp2 from './SignUp2'
import SignUp3 from './SignUp3'
import { LoginProvider } from "./contexts/Login.context";
import { SignUpProvider } from './contexts/SignUp.context'
import './assets/sass/main.scss'

function App() {

  return (
    <LoginProvider>
      <SignUpProvider>
        <Route render={({ location, history }) => (
          <>
            <Header history={history} />
            <Facilities />
            <Customers />
            <Steps />
            <WhyUs />
            <BeOurClient />
            <Footer />

            <TransitionGroup>
              <CSSTransition
                key={location.key}
                classNames='page'
                timeout={500}
              >
                <Switch location={location}>
                  <Route path='/login' render={(routeProps) =>
                    <Login {...routeProps} />
                  } />
                  <Route path='/SignUp' render={(routeProps) =>
                    <>
                      <SignUp1 {...routeProps} />
                      <SignUp2 {...routeProps} />
                      <SignUp3 {...routeProps} />
                    </>
                  } />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </>
        )} />
      </SignUpProvider>
    </LoginProvider>
  );
}

export default App;


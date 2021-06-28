import { Route } from 'react-router-dom'
import './assets/sass/main.scss'
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


function App() {

  return (
    <>
      <Route path='/' render={routeProps =>
        <>
          <LoginProvider>
            <Header {...routeProps} />
          </LoginProvider>
          <Facilities />
          <Customers />
          <Steps />
          <WhyUs />
          <BeOurClient />
          <Footer />
        </>
      } />

      <Route path='/login' render={(routeProps) =>
        <LoginProvider>
          <Login {...routeProps} />
        </LoginProvider>
      } />

      <Route path='/SignUp' render={(routeProps) =>
        <SignUpProvider>
          <SignUp1 {...routeProps} />
          <SignUp2 {...routeProps} />
          <SignUp3 {...routeProps} />
        </SignUpProvider>
      } />
    </>
  );
}

export default App;


import { Route } from 'react-router-dom'
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
        <Route path='/' render={routeProps =>
          <>
            <Header {...routeProps} />
            <Facilities />
            <Customers />
            <Steps />
            <WhyUs />
            <BeOurClient />
            <Footer />
          </>
        } />
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
      </SignUpProvider>
    </LoginProvider>
  );
}

export default App;


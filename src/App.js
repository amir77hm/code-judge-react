import './assets/sass/main.scss'
import Header from './Header'
import Facilities from "./Facilities";
import Customers from "./Customers";
import Steps from "./Steps";
import WhyUs from "./WhyUs";
import BeOurClient from "./BeOurClient";
import Footer from "./Footer";


function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Facilities />
        <Customers />
        <Steps />
        <WhyUs />
        <BeOurClient />
        <Footer />
      </>
    </div>
  );
}

export default App;

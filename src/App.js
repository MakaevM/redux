import './styles/style.scss'
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Advan from "./components/advan/advan";
import Services from "./components/services/services";
import Customer from "./components/customer/customer";
import Contact from "./components/contact/contact";

function App() {
    return (
        <>
            <Header/>
            <Hero/>
            <Advan/>
            <Services/>
            <Customer/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default App;

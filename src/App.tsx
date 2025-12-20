import NavBar from './components/navbar/NavBar';
import './App.css';
import AboutSec from './components/sections/about_section/AboutSec';
import HomeSec from './components/sections/home_section/HomeSec';
import ContactSec from './components/sections/contact_section/ContactSec';
import PriceSec from './components/sections/pricing_section/PriceSec';

function App() {
  const navButtonOptions: string[] = ["Home","About Us", "Contact", "Pricing"];

  return (
    <>
        <NavBar navButtonOptions={navButtonOptions} />
        <HomeSec />
        <AboutSec/>
        <ContactSec/>
        <PriceSec/>
    </>
  )
}

export default App

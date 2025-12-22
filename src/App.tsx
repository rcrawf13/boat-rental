import NavBar from './components/navbar/NavBar';
import SectionBase from './components/SectionBase';
import { Link, Element } from 'react-scroll';

import './App.css';

function App() {
  const navButtonOptions: string[] = ["Home","About Us", "Contact", "Pricing"];
  
  return (
    <>
        <NavBar Link={Link} navButtonOptions={navButtonOptions} />
        {navButtonOptions.map((navButtonOption)=>
        <SectionBase
        Element={Element}
        key={navButtonOption} 
        navButtonOption={navButtonOption} />)}
        
    </>
  )
}

export default App

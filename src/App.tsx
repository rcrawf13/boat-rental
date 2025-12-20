import './App.css'
import HomeSec from './components/HomeSec'
import NavBar from './components/navbar/NavBar'

function App() {
  const navButtonOptions: string[] = ["Home","About Us", "Contact", "Pricing"]

  
  return (
    <>

        <NavBar navButtonOptions={navButtonOptions} />
        <HomeSec />
        <section id='about'></section>
        <section id='contact'></section>
        <section id='pricing'></section>

    </>
  )
}

export default App

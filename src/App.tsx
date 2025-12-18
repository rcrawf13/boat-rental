import './App.css'
import NavBar from './components/NavBar'
function App() {
  const navButtonOptions: string[] = ["Home","About Us", "Contact", "Pricing"]

  return (
    <>
      <NavBar navButtonOptions={navButtonOptions} />
    </>
  )
}

export default App

import Root from './routes/booking/Root';
import Booking from './routes/booking/Booking';
import { Routes, Route } from 'react-router';
import ActivePriceContext from './context/ActivePriceContext';
import { useState } from 'react';
import './App.css';

function App() {
  const [active, setActive] = useState(2);
  const [currentPrice,setCurrentPrice] = useState('$250.00');

  return (
    <>
    <ActivePriceContext.Provider value={{active,setActive,currentPrice,setCurrentPrice}}>
      <Routes>
          <Route path='/' element={<Root/>}/>
          <Route path='/booking' element={<Booking />}/>
      </Routes>
    </ActivePriceContext.Provider>
        
    </>
  )
}

export default App

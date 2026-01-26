import Root from './routes/root/Root';
import Booking from './routes/booking/Booking';
import { Routes, Route } from 'react-router';
import ActivePriceContext from './context/ActivePriceContext';
import { useState } from 'react';
import dayjs from 'dayjs';
import './App.css';

function App() {
  const [active, setActive] = useState(2);
  const [currentPrice,setCurrentPrice] = useState('$250.00');
  const [selectedDayJSObj,setSelectedDayJSObj] = useState(dayjs().hour(17).minute(30));
  const [isCalendar,setIsCalendar] = useState(false);

  return (
    <>
    <ActivePriceContext.Provider value={{
      active,
      setActive,
      currentPrice,
      setCurrentPrice,
      selectedDayJSObj,
      setSelectedDayJSObj,
      isCalendar,
      setIsCalendar
      }}>
      <Routes>
          <Route path='/' element={<Root/>}/>
          <Route path='/booking' element={<Booking />}/>
      </Routes>
    </ActivePriceContext.Provider>
        
    </>
  )
}

export default App

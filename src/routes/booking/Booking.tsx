import BookingForm from './components/BookingForm';
import FadeDiv from '../../components/fade_div/FadeDiv';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import StaticDateTime from '../../components/staticdatetimepicker/StaticDateTime';
import Fab from '@mui/material/Fab';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import APIResContext from '../../context/APIResContext';
import NumberValueContext from '../../context/NumberValueContext';
import type { APIResponse } from '../../context/contexts_types/APIRes';
import './booking.css';

const Booking = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  }
  
  const [fakeAPIRes, setfakeAPIRes] = useState<APIResponse>();
  const [numberValue, setNumberValue] = useState<number>(2);

  useEffect(()=>{
    setTimeout(()=>{
      // Standard Days - set
      const standardWeekday = {startHour:17,startMinute:30, endHour: 22, endMinute:0, isOpen: true};
      const standardWeekend = { startHour: 10, startMinute:0, endHour: 20, endMinute:0, isOpen: true };

      // 7-day array - Using the array 0-6 as days of the week
      const weeklySchedule = [
        standardWeekend, // SUN (0)
        standardWeekday, // MON (1)
        standardWeekday, // TUE (2)
        standardWeekday, // WED (3)
        standardWeekday, // THU (4)
        standardWeekday, // FRI (5)
        standardWeekend, // SAT (6)
      ];
      setfakeAPIRes({
        schedule: weeklySchedule,
        bookedSlots:[]

      })


      },1500)
      },[])
  

  if(fakeAPIRes){
  return (
    <>
      <Fab 
      onClick={handleClick}
      sx={{position:'absolute',top:'1rem', left:'1rem'}}>
        <ChevronLeftIcon/>
      </Fab>
    <div className="container" >


      <APIResContext.Provider value={fakeAPIRes}>
      <FadeDiv >
        <div className="bookingContainer">
              <NumberValueContext.Provider value={{numberValue,setNumberValue}}>
                  <StaticDateTime/>
                  <BookingForm />
              </NumberValueContext.Provider>
        </div>
      </FadeDiv>  
      </APIResContext.Provider>
    </div>
    </>
)
  } else {
      return (
    <div className="container" style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',position:'relative'}}>
      <Fab 
      onClick={handleClick}
      sx={{position:'absolute',top:'1rem', left:'1rem'}}>
        <ChevronLeftIcon/>
      </Fab>
        <CircularProgress 
        sx={{color:'#D7E3E2'}}
        size="10vh" />
    </div>
)
  }

}

export default Booking
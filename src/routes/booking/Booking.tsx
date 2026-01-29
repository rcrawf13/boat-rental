import BookingForm from './components/BookingForm';
import FadeDiv from '../../components/fade_div/FadeDiv';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import StaticDateTime from '../../components/staticdatetimepicker/StaticDateTime';
import Fab from '@mui/material/Fab';
import './booking.css';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import APIResContext from '../../context/APIResContext';
import NumberValueContext from '../../context/NumberValueContext';

import type { APIResponse } from '../../context/contexts_types/APIRes';

const Booking = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  }
  
  const [fakeAPIRes, setfakeAPIRes] = useState<APIResponse>();
  const [numberValue, setNumberValue] = useState<number>(2);

  useEffect(()=>{
    setTimeout(()=>{
      setfakeAPIRes({
        weekDayAvailability:{
          startTime:17,
          endTime:22
        }
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
            <div className="bookingContentContainer">
              <NumberValueContext.Provider value={{numberValue,setNumberValue}}>
                <StaticDateTime  />
                <BookingForm />
              </NumberValueContext.Provider>
            </div>
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
import {motion} from 'motion/react';
import { useContext } from 'react';
import ActivePriceContext from '../../../context/ActivePriceContext';
import APIResContext from '../../../context/APIResContext';
import { useState } from 'react';
import type{ Dispatch, SetStateAction } from 'react';
import type { Dayjs } from 'dayjs';
import BookingNumber from './BookingNumber';


interface ActiveContextType {
  active?:number;
  setActive?: Dispatch<SetStateAction<number>>;
  setCurrentPrice?: Dispatch<SetStateAction<string>>;
  selectedDayJSObj?:Dayjs;
}

const APIDurationComponents = () => {
  const {selectedDayJSObj,active,setActive,setCurrentPrice}:ActiveContextType = useContext(ActivePriceContext);
  const handleChange = (e:Event):void => {
    const value = (e.target as HTMLInputElement).value;
    setActive(parseInt(value));
    updateCurrentPrice(parseInt(value));
  } 
  const updateCurrentPrice = (value:number | null ):void => {
      if(value && value > 1 ) {
        const additionalHours:number = value - 4;
        const priceAdditional:number = 400.00 + additionalHours * 75;
        setCurrentPrice(`$${priceAdditional}.00`);
      }    
    }
  const [open,setOpen] = useState<boolean>(true);

  const handleOpen = ():void => {
    setOpen(!open);
    }



    const day = selectedDayJSObj.day();
    const isWeekday =  day > 0 && day <= 5;
    const apiRes = useContext(APIResContext);
    if(isWeekday && apiRes && selectedDayJSObj) {
            // {console.log('API Component Mounted')}
            {console.log(selectedDayJSObj.hour())}
      // if It is weekday get start & end time availability
      // Find the diff between End and Start to calculate duration
      const endTime = apiRes.weekDayAvailability.endTime;
      const totalAvailableBookingTime =  endTime - selectedDayJSObj.hour();
      // console.log(totalAvailableBookingTime);
      if(totalAvailableBookingTime >= 2 && totalAvailableBookingTime >= 4) {
        // Return 2, 4 & + buttons
        return(
              <>
        {open?(    
    <div className="durCont">
    <p>Choose Your time on the water</p>
      <div className="durationBtns">
        <motion.button
        whileHover={{cursor:'pointer'}}
        initial={{scale:1}}
        whileTap={{scale:.95}}
        style={active == 2 ? {"backgroundColor":"#2F6F66"}:{"backgroundColor":"transparent","border":"solid #2F6F66 2pt", "color":"#2F6F66",transformOrigin:'center'}} 
        value={2} 
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>handleChange(e.nativeEvent)}
        >2 Hrs</motion.button>

        <motion.button
        whileHover={{cursor:'pointer'}}         
        initial={{scale:1}}
        whileTap={{scale:.95}}
        style={active == 4 ? {"backgroundColor":"#2F6F66"}:{"backgroundColor":"transparent","border":"solid #2F6F66 2pt", "color":"#2F6F66",transformOrigin:'center'}} value={4} 
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>handleChange(e.nativeEvent)}>4 Hrs
        </motion.button>

        <motion.button 
        whileHover={{cursor:'pointer'}}
        initial={{scale:1}}
        whileTap={{scale:.95}}
        style={{transformOrigin:'center'}}
        id="customTime" 
        onClick={handleOpen}></motion.button>
      </div>
    </div>)
    
    :
    
    (
      <>
        <div className="durCont">
          <p>Choose Your time on the water</p>
          <BookingNumber totalAvailableBookingTime={totalAvailableBookingTime} updateCurrentPrice={updateCurrentPrice}/>
        </div>
      </>
    )}
    
    </>
        )
      } 
      
      else {
        if(totalAvailableBookingTime > 2 && totalAvailableBookingTime <= 3) {
          // Return only 2 button
        return(
              <>
        {open?(    
    <div className="durCont">
    <p>Choose Your time on the water</p>
      <div className="durationBtns">
        <motion.button
        whileHover={{cursor:'pointer'}}
        initial={{scale:1}}
        whileTap={{scale:.95}}
        style={active == 2 ? {"backgroundColor":"#2F6F66"}:{"backgroundColor":"transparent","border":"solid #2F6F66 2pt", "color":"#2F6F66",transformOrigin:'center'}} 
        value={2} 
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>handleChange(e.nativeEvent)}
        >2 Hrs</motion.button>


        <motion.button 
        whileHover={{cursor:'pointer'}}
        initial={{scale:1}}
        whileTap={{scale:.95}}
        style={{transformOrigin:'center'}}
        id="customTime" 
        onClick={handleOpen}></motion.button>
      </div>
    </div>)
    
    :
    
    (
      <>
        <div className="durCont">
          <p>Choose Your time on the water</p>
          <BookingNumber totalAvailableBookingTime={totalAvailableBookingTime} updateCurrentPrice={updateCurrentPrice}/>
        </div>
      </>
    )}
    
    </>
        )
        }
        
        } if (totalAvailableBookingTime % 2 == 0) {
        return(
              <>
        {open?(    
    <div className="durCont">
    <p>Choose Your time on the water</p>
      <div className="durationBtns">
        <motion.button
        whileHover={{cursor:'pointer'}}
        initial={{scale:1}}
        whileTap={{scale:.95}}
        style={active == 2 ? {"backgroundColor":"#2F6F66"}:{"backgroundColor":"transparent","border":"solid #2F6F66 2pt", "color":"#2F6F66",transformOrigin:'center'}} 
        value={2} 
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>handleChange(e.nativeEvent)}
        >2 Hrs</motion.button>

      </div>
    </div>)
    
    :
    
    (
    <div className="durCont">
    <p>Choose Your time on the water</p>
      <div className="durationBtns">
        <motion.button
        whileHover={{cursor:'pointer'}}
        initial={{scale:1}}
        whileTap={{scale:.95}}
        style={active == 2 ? {"backgroundColor":"#2F6F66"}:{"backgroundColor":"transparent","border":"solid #2F6F66 2pt", "color":"#2F6F66",transformOrigin:'center'}} 
        value={2} 
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>handleChange(e.nativeEvent)}
        >2 Hrs</motion.button>

      </div>
    </div>
    )}
    
    </>
        )
        }
    }
}

export default APIDurationComponents
import { motion } from 'motion/react';
import { useContext, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import ActivePriceContext from '../../../context/ActivePriceContext';
import APIResContext from '../../../context/APIResContext';
import BookingNumber from './BookingNumber';

// Define types clearly
interface ActiveContextType {
  active?: number;
  setActive?: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPrice: React.Dispatch<React.SetStateAction<string>>;
  selectedDayJSObj?: Dayjs;
}

const APIDurationComponents = () => {
  const { selectedDayJSObj, active, setActive, setCurrentPrice } = useContext(ActivePriceContext) as ActiveContextType;
  const apiRes = useContext(APIResContext);
  const [open, setOpen] = useState<boolean>(true);

  // 1. Calculate the REAL available time (Closing vs. Next Booking)
  const calculateMaxDuration = (): number => {
    if (!selectedDayJSObj || !apiRes) return 0;

    const dayIndex = selectedDayJSObj.day();
    const dailyRule = apiRes.schedule[dayIndex];

    // Safety: If shop is closed or data missing
    if (!dailyRule || !dailyRule.isOpen) return 0;

    const startHour = selectedDayJSObj.hour();
    const closeHour = dailyRule.endHour;
    
    // A. Time until closing
    let maxDuration = closeHour - startHour;

    // B. Check for collision with the NEXT booking
    const currentSlotStart = selectedDayJSObj;
    
    // Sort bookings just in case
    const sortedBookings = [...apiRes.bookedSlots].sort((a, b) => 
      new Date(a.start).getTime() - new Date(b.start).getTime()
    );

    for (const booking of sortedBookings) {
      const bookingStart = dayjs(booking.start);
      // If there is a booking AFTER our start time...
      if (bookingStart.isAfter(currentSlotStart)) {
        const hoursUntilBooking = bookingStart.diff(currentSlotStart, 'hour');
        
        // ...and it's sooner than closing time, that's our new limit.
        if (hoursUntilBooking < maxDuration) {
          maxDuration = hoursUntilBooking;
        }
        break; // We hit the first wall, stop checking.
      }
    }

    return maxDuration;
  };

  const maxDuration = calculateMaxDuration();

  const handleChange = (val: number): void => {
    if (setActive) setActive(val);
    updateCurrentPrice(val);
  };

  const updateCurrentPrice = (value:number | null ):void => {
      if(value ) {
        const additionalHours:number = value - 4;
        const priceAdditional:number = 400.00 + additionalHours * 75;
        setCurrentPrice(`$${priceAdditional}.00`);
      }    
    }

  const handleOpen = (): void => {
    setOpen(!open);
  };

  // If less than 2 hours available, don't show booking options
  if (maxDuration < 2) return null; 

  return (
    <div className="durCont">
      <p>Choose Your time on the water</p>
      
      {open ? (
        <div className="durationBtns">
          {/* Always show 2 Hrs (since maxDuration >= 2) */}
          <motion.button
            whileHover={{ cursor: 'pointer' }}
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.95 }}
            style={active === 2 ? { backgroundColor: "#2F6F66" } : { backgroundColor: "transparent", border: "solid #2F6F66 2pt", color: "#2F6F66", transformOrigin: 'center' }}
            onClick={() => handleChange(2)}
          >
            2 Hrs
          </motion.button>

          {/* Only show 4 Hrs if we have space */}
          {maxDuration >= 4 && (
            <motion.button
              whileHover={{ cursor: 'pointer' }}
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.95 }}
              style={active === 4 ? { backgroundColor: "#2F6F66" } : { backgroundColor: "transparent", border: "solid #2F6F66 2pt", color: "#2F6F66", transformOrigin: 'center' }}
              onClick={() => handleChange(4)}
            >
              4 Hrs
            </motion.button>
          )}

          {/* Custom Button - Logic to show input */}
          <motion.button
            whileHover={{ cursor: 'pointer' }}
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.95 }}
            style={{ transformOrigin: 'center' }}
            id="customTime"
            onClick={handleOpen}
          />
        </div>
      ) : (
        /* Custom Input View */
        <BookingNumber 
           totalAvailableBookingTime={maxDuration} 
           updateCurrentPrice={updateCurrentPrice} 
        />
      )}
    </div>
  );
};

export default APIDurationComponents;
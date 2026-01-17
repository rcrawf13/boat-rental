import pontonImg from './../../../assets/PontoonBoatBlr.webp';
import DurationButtons from './DurationButtons';
import BookingButton from '../../booking_button/BookingButton';
import { useContext, useEffect, type SetStateAction } from 'react';
import { motion, useAnimate } from "motion/react";
import ActivePriceContext from '../../../context/ActivePriceContext';
import type { Dispatch } from 'react';

interface ActiveContextTypes {
  currentPrice?:string | undefined;
  setCurrentPrice?: Dispatch<SetStateAction<string>>;
}

const PriceSecMobile = () => {
  const [scope,animate] = useAnimate();
  const {currentPrice}:ActiveContextTypes = useContext(ActivePriceContext);
  useEffect(()=>{
    animate(scope.current,{opacity:[0,1],scale:[0,1]},)
  },[currentPrice])
  return (
      <div className="mobile-content-container">
        <h3>Pontoon Cruise</h3>
        <div className="priceQuoteCont">
          <div className="priceQuote">
        <motion.p 
        ref={scope}
        >
          {currentPrice}
        </motion.p>
          </div>
          <img src={pontonImg} alt="" />
        </div>
        <DurationButtons/>
        
        <div className="includedList">
          <h4>Whats Included</h4>
          <ul>
            <li>Bluetooth Speaker</li>
            <li>Life Jackets</li>
            <li>Cooler With Ice</li>
            <li>Free Cancellations <small>(24hrs)</small></li>
          </ul>
        </div>

        <BookingButton variant={'filled'} />

      </div>  )
}

export default PriceSecMobile
import pontoonPic from './../../../assets/PontoonBoatBlr.webp'
import DurationButtons from './DurationButtons';
import { useEffect } from 'react';
import { motion,useAnimate } from "motion/react";
import BookingButton from '../../booking_button/BookingButton';
import FadeDiv from '../../fade_div/FadeDiv';
import { useContext } from 'react';
import ActivePriceContext from '../../../context/ActivePriceContext';
import './pricesecwide.css';
type setCurrentPriceType = React.Dispatch<React.SetStateAction<string>>;

interface PriceSecWide {
  currentPrice:string;
  setCurrentPrice:setCurrentPriceType
  
}
const PriceSecWide = () => {

  const {currentPrice} = useContext(ActivePriceContext)
  const [scope,animate] = useAnimate();
  useEffect(()=>{
    animate(scope.current,{ scale: [1,1.2],opacity:[0,1]},{ duration: 0.5 })
  },[currentPrice]);

  return (
    <FadeDiv>
          <div className="priceWideScreenContainer">
        <div className="dynamicPricingSect">
        <h3>Pontoon Cruise</h3>
        <DurationButtons  />
        
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
        </div>
        <div className="vidCon">
            <div className="priceQuoteCont">
            </div>
            <div className="imgCon">
                  <div className="priceQuote">
                  <p>
                  <motion.span 
                  ref={scope}
                  >
                    {currentPrice}
                  </motion.span>
                  </p>
                </div>
              <img src={pontoonPic} alt="" />
            </div>
        </div>
    </div>
    </FadeDiv>
  )
}

export default PriceSecWide
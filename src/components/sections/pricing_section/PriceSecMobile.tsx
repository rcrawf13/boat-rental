import pontonImg from './../../../assets/PontoonBoatBlr.webp';
import DurationButtons from './DurationButtons';
import { useEffect } from 'react';
import { motion, useAnimate } from "motion/react";
type setCurrentPriceType = React.Dispatch<React.SetStateAction<string>>;
type setActiveType = React.Dispatch<React.SetStateAction<number>>;
interface PriceSecMobileProps {
  currentPrice:string;
  active:number;
  setCurrentPrice:setCurrentPriceType;
  setActive:setActiveType
}

const PriceSecMobile = ({currentPrice,active,setCurrentPrice,setActive}:PriceSecMobileProps) => {
  const [scope,animate] = useAnimate();
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
        <DurationButtons 
        setCurrentPrice={setCurrentPrice} 
        active={active} 
        setActive={setActive}/>
        
        <div className="includedList">
          <h4>Whats Included</h4>
          <ul>
            <li>Bluetooth Speaker</li>
            <li>Life Jackets</li>
            <li>Cooler With Ice</li>
            <li>Free Cancellations <small>(24hrs)</small></li>
          </ul>
        </div>

        <button id='submitBttn'>Book Now</button>
      </div>  )
}

export default PriceSecMobile
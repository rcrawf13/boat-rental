import pontoonPic from './../../../assets/PontoonBoatBlr.webp'
import DurationButtons from './DurationButtons';
import { useEffect } from 'react';
import { motion,useAnimate } from "motion/react";
import './pricesecwide.css';
type setCurrentPriceType = React.Dispatch<React.SetStateAction<string>>;
type setActiveType = React.Dispatch<React.SetStateAction<number>>;

interface PriceSecWide {
  currentPrice:string;
  active:number;
  setCurrentPrice:setCurrentPriceType
  setActive:setActiveType
  
}
const PriceSecWide = ({currentPrice,active,setCurrentPrice,setActive}:PriceSecWide) => {
  const [scope,animate] = useAnimate();
  useEffect(()=>{
    animate(scope.current,{ scale: [1,1.2],opacity:[0,1]},{ duration: 0.5 })
  },[currentPrice]);

  return (
    <div className="priceWideScreenContainer">
        <div className="dynamicPricingSect">
        <h3>Pontoon Cruise</h3>
        <DurationButtons  setCurrentPrice={setCurrentPrice} active={active} setActive={setActive}/>
        
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
        </div>
        <div className="vidCon">
            <div className="priceQuoteCont">
                <div className="priceQuote">
                <p>
                <motion.span 
                ref={scope}
                >
                  {currentPrice}
                </motion.span>
                </p>
                </div>
            </div>
            <img src={pontoonPic} alt="" />
        </div>
    </div>
  )
}

export default PriceSecWide
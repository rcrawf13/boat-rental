import { useState } from 'react';
import './pricesec.css';
import lakevideo from '../../../assets/lake.mp4'
import PriceSecMobile from './PriceSecMobile';
import PriceSecWide from './PriceSecWide';
const PriceSec = () => {
const [currentPrice,setCurrentPrice] = useState<string>('$250.00');
const [active,setActive] = useState<number>(2);



  return (
    <>
      <PriceSecMobile 
      currentPrice={currentPrice}
      active={active}
      setActive={setActive}
      setCurrentPrice={setCurrentPrice}
      />

      <PriceSecWide
      currentPrice={currentPrice}
      active={active}
      setActive={setActive}
      setCurrentPrice={setCurrentPrice}
      />
      <div className='pricingVideoContainer'>
        <video playsInline autoPlay muted loop preload='auto' id='pricingBgVideo' >
          <source src={lakevideo} type='video/mp4' />
        </video>
      </div>
    </>
  )
}

export default PriceSec
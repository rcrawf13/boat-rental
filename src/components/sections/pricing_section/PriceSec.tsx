import { useState } from 'react';
import './pricesec.css';
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

    </>
  )
}

export default PriceSec
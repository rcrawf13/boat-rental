import { useState, } from 'react';
import FadeDiv from '../../fade_div/FadeDiv';
import PriceSecMobile from './PriceSecMobile';
import PriceSecWide from './PriceSecWide';
import './pricesec.css';
const PriceSec = () => {
const [currentPrice,setCurrentPrice] = useState<string>('$250.00');
const [active,setActive] = useState<number>(2);


  return (
    <FadeDiv>
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
    </FadeDiv>

  )
}

export default PriceSec
import { useState, } from 'react';
import './pricesec.css';
import PriceSecMobile from './PriceSecMobile';
import PriceSecWide from './PriceSecWide';
import { motion } from 'motion/react';
const PriceSec = () => {
const [currentPrice,setCurrentPrice] = useState<string>('$250.00');
const [active,setActive] = useState<number>(2);


  return (
    <motion.div
    initial={{opacity:.5}}
    whileInView={{opacity:1}}
    viewport={{once:true}}
    style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
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

    </motion.div>
  )
}

export default PriceSec
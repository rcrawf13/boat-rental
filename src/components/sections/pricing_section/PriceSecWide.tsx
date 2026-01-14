import pontonVid from './../../../assets/pVid2.mp4';
import DurationButtons from './DurationButtons';
import './pricesecwide.css'
type setCurrentPriceType = React.Dispatch<React.SetStateAction<string>>;
type setActiveType = React.Dispatch<React.SetStateAction<number>>;

interface PriceSecWide {
  currentPrice:string;
  active:number;
  setCurrentPrice:setCurrentPriceType
  setActive:setActiveType
  
}
const PriceSecWide = ({currentPrice,active,setCurrentPrice,setActive}:PriceSecWide) => {
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
                <p>{currentPrice}</p>
                </div>
            </div>
            <video playsInline loop autoPlay muted>
                <source type='video/mp4' src={pontonVid} />
            </video>
        </div>
    </div>
  )
}

export default PriceSecWide
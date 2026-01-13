import pontonVid from './../../../assets/pVid2.mp4';
import DurationButtons from './DurationButtons';

const PriceSecMobile = ({currentPrice,active,setCurrentPrice,setActive}) => {
  return (
      <div className="mobile-content-container">
        <h3>Pontoon Cruise</h3>
        <div className="priceQuoteCont">
          <div className="priceQuote">
          <p>{currentPrice}</p>
          </div>
          <video playsInline loop autoPlay muted>
            <source type='video/mp4' src={pontonVid} />
          </video>
        </div>
        <DurationButtons setCurrentPrice={setCurrentPrice} active={active} setActive={setActive}/>
        
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
import DurationButtons from './DurationButtons';
import BookingButton from '../../booking_button/BookingButton';
import FadeDiv from '../../fade_div/FadeDiv';
import ImageWideCont from '../../image_component/ImageWideCont';
import './pricesecwide.css';
type setCurrentPriceType = React.Dispatch<React.SetStateAction<string>>;

interface PriceSecWide {
  currentPrice:string;
  setCurrentPrice:setCurrentPriceType
  
}
const PriceSecWide = () => {



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
        <ImageWideCont/>
    </div>
    </FadeDiv>
  )
}

export default PriceSecWide
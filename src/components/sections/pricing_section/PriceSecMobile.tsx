import DurationButtons from './DurationButtons';
import BookingButton from '../../booking_button/BookingButton';
import ImageWideCont from '../../image_component/ImageWideCont';



const PriceSecMobile = () => {

  return (
      <div className="mobile-content-container">
        <h3>Pontoon Cruise</h3>
        <div className="priceQuoteCont">
        <ImageWideCont/>
        </div>
        <DurationButtons/>
        
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

      </div>  )
}

export default PriceSecMobile
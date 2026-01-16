import BookingForm from './components/BookingForm';
import FadeDiv from '../../components/fade_div/FadeDiv';
import './booking.css';
const Booking = () => {
  return (
    <div className="container" style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
      <FadeDiv>
        <div className="bookingContainer">
            <div className="bookingContentContainer">
              <BookingForm/>
              <div className="visual"></div>
            </div>
        </div>
      </FadeDiv>  
    </div>
)
}

export default Booking
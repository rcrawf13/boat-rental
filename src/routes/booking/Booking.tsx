import BookingForm from './components/BookingForm';
import './booking.css';
const Booking = () => {
  return (
    <div className="bookingContainer">
        <div className="bookingContentContainer">
          <BookingForm/>
          <div className="visual"></div>
        </div>
    </div>
)
}

export default Booking
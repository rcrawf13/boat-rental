import splashImage from "../../../assets/hero-text.svg";
import BookingButton from "../../booking_button/BookingButton"
const HomeSec = () => {

  return (
    <>
      <div className="wallpaper"></div>
      <div draggable="false" className="splashItems">
          <img className="heroText" src={splashImage} alt="Nomad Adventure Rental" />
          <p>Affordable boat rentals for every adventure.</p>
          <BookingButton/>
        </div>
    </>
    
    

  )
}

export default HomeSec
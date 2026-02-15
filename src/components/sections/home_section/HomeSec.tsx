import splashImage from "../../../assets/hero-text.svg";
import BookingButton from "../../booking_button/BookingButton"
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade'

const HomeSec = () => {
  const [emblaRef] = useEmblaCarousel({loop:true},[Autoplay(),Fade()]);
  return (
    <>
      <div className="wallpaper"></div>
      <div draggable="false" className="splashItems">
          <img className="heroText" src={splashImage} alt="Nomad Adventure Rental" />
            <div ref={emblaRef} className="textCarouselRoot">
              <div className="textCarouselContainer">
                <div id="p1">
                  <p>Affordable boat rentals for every adventure.</p>
                </div>
                <div id="p2">
                  <p>Your perfect pontoon getaway starts here.</p>
                </div>
                <div id="p3">
                  <p>Smooth cruising, zero stress.</p>
                </div>
              </div>
          </div>
          <BookingButton/>
        </div>
    </>
    
    

  )
}

export default HomeSec
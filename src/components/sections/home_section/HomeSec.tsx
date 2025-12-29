import splashImage from "../../../assets/hero-text.svg"
const HomeSec = () => {

  return (
    <>
      <div className="wallpaper"></div>
      <div draggable="false" className="splashItems">
          <img className="heroText" src={splashImage} alt="Nomad Adventure Rental" />
          <p>Affordable boat rentals for every adventure.</p>
          <button>Book Now</button>
        </div>
    </>
    
    

  )
}

export default HomeSec
import splashImage from "../../../assets/hero-text.svg";
import {motion} from 'motion/react';
const HomeSec = () => {

  return (
    <>
      <div className="wallpaper"></div>
      <div draggable="false" className="splashItems">
          <img className="heroText" src={splashImage} alt="Nomad Adventure Rental" />
          <p>Affordable boat rentals for every adventure.</p>
          <motion.button
          initial={{scale:1}}
          whileTap={{scale:.9}}
          >
            Book Now
          </motion.button>
        </div>
    </>
    
    

  )
}

export default HomeSec
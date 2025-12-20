import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router';


const HomeSec = () => {
  const {ref,inView} = useInView({threshold:1});
  const navigate = useNavigate()
  useEffect(()=>{
    console.log(inView);
    if(inView) {
      navigate("/Home")
    }
  },[inView])
  return (
    <section ref={ref} id='home'>
        <div draggable="false" className="splashText">
            <h1>Nomad <br /> Adventure <br /> Rentals</h1>
            <p>Affordable boat rentals for every adventure.</p>
            <button>Book Now</button>
        </div>
    </section>

  )
}

export default HomeSec
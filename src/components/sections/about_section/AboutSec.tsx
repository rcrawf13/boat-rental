import { useEffect } from "react";
import { useInView } from "react-intersection-observer"
import { useNavigate } from "react-router";


const AboutSec = () => {
    const {ref,inView} = useInView({threshold:1});
    const navigate = useNavigate()
    useEffect(()=>{
        if (inView) {
            console.log(`About: ${inView}`)
            navigate("/About%20Us")
        }
    },[inView])
  return (
    <section ref={ref} id='about'></section>
  )
}

export default AboutSec
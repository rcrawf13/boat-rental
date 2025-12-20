import { useEffect } from "react";
import { useInView } from "react-intersection-observer"
import { useNavigate } from "react-router";

const ContactSec = () => {
    const {ref,inView} = useInView({threshold:1});
    const navigate = useNavigate();
    useEffect(()=>{
        if(inView){
            navigate("/Contact")
        }
    },[inView])

  return (
    <section ref={ref} id='contact'></section>
)
}

export default ContactSec
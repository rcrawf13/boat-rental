import {motion, useAnimate} from 'motion/react';
import { useNavigate } from "react-router";
import './bookingbutton.css';
interface BookingButtonProps {
    variant?: "outlined" | "filled";
    label?: string;
    customCB? : ()=>void; 
}
const BookingButton = ({variant = "outlined", label = "Book Now", customCB = undefined}:BookingButtonProps) => {
    const navigate = useNavigate();
    const navigateToBooking = () => navigate('/booking');
    const [scope, animate] = useAnimate();

    const handleTapAnimation = async () => {
        await animate(scope.current,{scale:[1.2,.5,1]},{duration:.2});
        navigateToBooking();
    }
    const addAnimationToCB = async () => {
        if(customCB) {
            await animate(scope.current,{scale:[1.2,.5,1]},{duration:.2});
            customCB()
        } else {
            handleTapAnimation()
            return (undefined)
        }
    }

return (
    <>
        {variant === "outlined"? 
        (
            <motion.button
            ref={scope}
            id='outlined'
            whileHover={{scale:1.2}}
            onTap={addAnimationToCB}
            
            >
                {label}
            </motion.button> 
        ) : (
            <motion.button 
            ref={scope}
            id='filled'
            whileHover={{scale:1.2}}
            onTap={addAnimationToCB}
            >
                {label}
            </motion.button>
        )
        }

    </>
)
}

export default BookingButton
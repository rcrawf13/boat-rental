import {motion} from "motion/react";
import React from "react";
import type { ReactNode } from "react";
import './fade-div.css'
interface Props {
   children:ReactNode; 
}
const FadeDiv:React.FunctionComponent<Props> = ({children}) => {
  return (
    <motion.div
    id="fade"
    initial={{opacity:.1}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    // viewport={{once:true}} Enable if you wan fade animation to play once
    >
        {children}
    </motion.div>
    )
}

export default FadeDiv
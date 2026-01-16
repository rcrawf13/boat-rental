import {motion} from "motion/react";
import React from "react";
import type { ReactNode } from "react";
interface Props {
   children:ReactNode; 
}
const FadeDiv:React.FunctionComponent<Props> = ({children}) => {
  return (
    <motion.div
    initial={{opacity:.1}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    // viewport={{once:true}} Enable if you wan fade animation to play once
    style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100%',maxWidth:'1600px',width:'100%'}}>
        {children}
    </motion.div>
    )
}

export default FadeDiv
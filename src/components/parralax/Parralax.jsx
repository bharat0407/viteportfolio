import { useRef } from "react";
import "./parralax.scss";
import {motion,useScroll,useTransform} from "framer-motion";


const Parralax = ({type}) => {
  const ref = useRef();
    const {scrollYProgress} = useScroll({
      target:ref,
      offset:["start start", "end start"]
    })
    const ytext = useTransform(scrollYProgress,[0,1],["0%","500%"])
    const ybg = useTransform(scrollYProgress,[0,1],["0%","500%"])
    const xbg = useTransform(scrollYProgress,[0,1],["0%","200%"])
  return (
    <div className="parralax"  ref={ref} style={{background:type==="Services"
    ? "linear-gradient(180deg,#111132,#0c0c1d )" : 
    "linear-gradient(180deg,#111132,#505064 )"}}>
      <motion.h1 style={{y: ytext}}>{type==="Services" ? "WHAT WE DO" : "WHAT WE DID"}</motion.h1>
         <motion.div className="mountains">
         </motion.div>
         <motion.div  style={{y :ybg,backgroundImage:`url(${type==="Services" ?"/planets.png":"sun.png"})`}} className="planets">
         </motion.div>
         <motion.div style={{x :xbg}} className="stars">
         </motion.div>
    </div>
  )
}

export default Parralax;
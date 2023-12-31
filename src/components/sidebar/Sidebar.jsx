import { useState } from "react";
import Links from "./links/Links";
import "./sidebar.scss";
import {motion} from "framer-motion";
import Togglebutton from "./togglebutton/Togglebutton";


const Sidebar = () => {
    const[open,setOpen] = useState(false);
    
    const variants = {
        open:{
            clipPath:"circle(1200px  at 50px 50px)",
            transition:{
                type:"spring",
                stiffness:200,
                damping:20
            }
        },
        closed:{
               clipPath:"circle(30px at 50px 50px)",
               transition:{
                delay:0.5,
                type:"spring",
                stiffness:400,
            damping:40               
        }
    }
    }
  return (
    <motion.div className="sidebar" animate={open ? "open":"closed"}>
        <motion.div className="bg" variants={variants}>
            <Links />
        </motion.div>
        <Togglebutton open = {open} setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar
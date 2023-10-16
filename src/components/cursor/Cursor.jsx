import { useEffect, useState } from "react";
import "./cursor.scss";
import {motion} from "framer-motion";


const Cursor = () => {
    const[postition,setPosition] = useState({x:0,y:0});

    useEffect(()=>{
        const mouseMove = (e)=>{
            setPosition({x:e.clientX,y:e.clientY});
        };
        window.addEventListener("mousemove",mouseMove);

        return ()=>{
            window.removeEventListener("mousemove",mouseMove);
        }

    },[]);

  return (
    <motion.div animate={{x:postition.x+20,y:postition.y+20}} className="cursor"></motion.div>
  )
}

export default Cursor
import { useRef } from "react";
import "./services.scss";
import { animate, motion,useInView } from "framer-motion";

const wrapperVaraints= {
    initial:{
        x:-500,
        opacity:0,
        y:100
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    }
}

const Services = () => {
    const ref  = useRef();
    //const Inview = useInView(ref,{margin:"-100px"})
    return (
        <motion.div   className="services" variants={wrapperVaraints}
        //initial="initial"
        //animate="animate"
         //animate ={Inview && "animate"}
         whileInView="animate"
        >
            <motion.div className="textContainer" variants={wrapperVaraints}>
                <p>I focus on helping your brand grow and
                    <br />move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer">
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{color:"orange"}}>For Your </motion.b> Bussiness</h1>
                    <button>What we Do</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={wrapperVaraints}>
                <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}} >
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur
                         adipisicing elit. Sequi quos unde omnis, beatae iure 
                         maxime consectetur a, totam quae ea fugit. Totam aperiam,
                          aliquam impedit sed iusto alias velit dolore?
                          </p>
                          <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur
                         adipisicing elit. Sequi quos unde omnis, beatae iure 
                         maxime consectetur a, totam quae ea fugit. Totam aperiam,
                          aliquam impedit sed iusto alias velit dolore?
                          </p>
                          <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur
                         adipisicing elit. Sequi quos unde omnis, beatae iure 
                         maxime consectetur a, totam quae ea fugit. Totam aperiam,
                          aliquam impedit sed iusto alias velit dolore?
                          </p>
                          <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur
                         adipisicing elit. Sequi quos unde omnis, beatae iure 
                         maxime consectetur a, totam quae ea fugit. Totam aperiam,
                          aliquam impedit sed iusto alias velit dolore?
                          </p>
                          <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services
import "./hero.scss";
import {animate, motion} from "framer-motion";
const textvariants = {
    initial:{
        opacity: 0,
        x: -500
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    },
    scrollBtn:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,  
        }
    }
};
const sliderVariant = {
    initial:{
        x:0
    },
    animate:{
       x:"-200%",
       opacity:1,
       transition:{
          repeat:Infinity,
          repeatType:"mirror",
          duration:20
       }
    }
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer"variants={textvariants}
                initial="initial"
                animate="animate"
                 >
                    <motion.h2 variants={textvariants}>Bharat Kumar</motion.h2>
                    <motion.h1 variants={textvariants}>MERN Stack Developer , UI Developer and  Designer!!</motion.h1>
                    <motion.div variants={textvariants} className="buttons">
                        <motion.button variants={textvariants}>See my Projects</motion.button>
                        <motion.button variants={textvariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textvariants} animate="scrollBtn" src="assets/scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div  initial="initial" animate="animate" className="textSliderContainer" variants={sliderVariant}>
                Writer Content Creator Influencer
            </motion.div>
            <div className="imgContainer">
                <img src="assets/profile.jpg" alt="" />
            </div>
        </div>
    )
}

export default Hero
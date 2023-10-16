import { useRef } from "react";
import "./portfolio.scss";
import {motion,useScroll, useSpring, useTransform} from "framer-motion";


const items = [
    {
        id:1,
        title:"React -js",
        image:"https://images.pexels.com/photos/378268/pexels-photo-378268.jpeg?auto=compress&cs=tinysrgb&w=1600",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi eligendi magnam illum laborum sint sequi, maxime placeat. Dicta, veniam unde. Consectetur ad voluptatum harum sed quidem ipsam in? Veritatis, provident!"
    },
    {
        id:2,
        title:"Next-Js -Blog",
        image:"https://images.pexels.com/photos/17681378/pexels-photo-17681378/free-photo-of-young-woman-sitting-at-the-table-and-using-a-laptop.jpeg?auto=compress&cs=tinysrgb&w=1600",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi eligendi magnam illum laborum sint sequi, maxime placeat. Dicta, veniam unde. Consectetur ad voluptatum harum sed quidem ipsam in? Veritatis, provident!"
    },
    {
        id:3,
        title:"Vanilla- Js",
        image:"https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1600",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi eligendi magnam illum laborum sint sequi, maxime placeat. Dicta, veniam unde. Consectetur ad voluptatum harum sed quidem ipsam in? Veritatis, provident!"
    },
    {
        id:4,
        title:"DSA- AND- ALGORITHUM",
        image:"https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi eligendi magnam illum laborum sint sequi, maxime placeat. Dicta, veniam unde. Consectetur ad voluptatum harum sed quidem ipsam in? Veritatis, provident!"
    },
]

const Single = ({item})=>{
    const ref = useRef();
    const{scrollYProgress} = useScroll({target:ref,});
    const ysc = useTransform(scrollYProgress,[0,1],[-300,300]);
    return (

        <section>
            <div className="container">
                <div className="wrapper">
                <div className="imgContainer" ref={ref} >
                    <img src={item.image} alt="" />
                </div>
                <motion.div style={{y:ysc}} className="textContainer"   >
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                    <button>see Project</button>
                </motion.div>
                </div>

            </div>
        </section>
    )
}
const Portfolio = () => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({target:ref,offset:["end end","start start"]});
const scaleX  = useSpring(scrollYProgress,{
    stiffness:200,
    damping:20
})
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
        <h1>Feartured Works</h1>
        <motion.div style={{scaleX}} className="progressbar"></motion.div>
        </div>
        {items.map((item)=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio;
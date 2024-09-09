import { useRef } from "react"
import "./parallax.scss"
import {motion,useScroll,useTransform} from "framer-motion"
const Parallax = ({type}) => {
  const ref =useRef()

  const {scrollYProgress}=useScroll({
target:ref,
offset:["start start","end start"]
  })
  const yText=useTransform(scrollYProgress,[0,1],["0%","500%"])
  const yBg=useTransform(scrollYProgress,[0,1],["0%","200%"])
  const xBg=useTransform(scrollYProgress,[0,1],["0%","-50%"])
  return (
    <div className='parallax' ref={ref}>
    <motion.h1 style={{y:yText}}>{type==="Skills"?"What I Do ?":"What I Did ?"}</motion.h1>
    <motion.div className="mountains"></motion.div>
    <motion.div className="planets" style={{y:yBg}}></motion.div>
    <motion.div className="stars" style={{x:xBg}}></motion.div>
    
    </div>
  )
}

export default Parallax
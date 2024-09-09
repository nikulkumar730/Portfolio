import Sidebar from "../siderbar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <>
    
    
 
    <div className=" navbar container ">
      <Sidebar />

      <div className="wrapper  ">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {" "}
          <span className="text-xs-small1">N I K U L</span>{" "}
          <span className="text-xs-small1">K U M A R</span>
        </motion.span>
        <div className="social ms-auto d-none d-sm-flex ">
          <a href="#">
            <img src="/facebook.png" />
          </a>
          <a href="#">
            <img src="/dribbble.png" />
          </a>
          <a href="#">
            <img src="/youtube.png" />
          </a>
          <a href="#">
            <img src="/instagram.png" />
          </a>
        </div>
      </div>
    </div>

    </>
  );
};

export default Navbar;

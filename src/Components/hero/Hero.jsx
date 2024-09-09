import "./hero.scss";
import { motion } from "framer-motion";

const Hero = () => {
  const textVeriants = {
    initial: {
      x: -300,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        duration: 40,
      },
    },
  };
  return (
    <div className="hero align-items-center">
      <div className="wrapperHero container mb-5">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-12 col-lg-6 align-self-center">
            <motion.div
              className="textContainer align-self-center"
              variants={textVeriants}
              initial="initial"
              animate="animate"
            >
              <motion.h2 variants={textVeriants}>
                N I K U L&nbsp;&nbsp;&nbsp;&nbsp;K U M A R
              </motion.h2>
              <motion.h1 className="h1" variants={textVeriants}>
                FULL STACK WEB
                <br />
                <motion.span variants={textVeriants}>DEVELOPER</motion.span>
              </motion.h1>
              <motion.div className="button" variants={textVeriants}>
                <motion.button
                  variants={textVeriants}
                  className="btn"
                  onClick={() => console.log("See my latest work")}
                >
                  See my latest work
                </motion.button>
                <button
                  variants={textVeriants}
                  style={{ cursor: "pointer" }}
                  className="btn"
                  onClick={() => console.log("Contact me")}
                >
                  Contact me
                </button>
              </motion.div>
              <motion.img
                src="/scroll.png"
                alt="Scroll down"
                variants={textVeriants}
                animate="scrollButton"
              />
            </motion.div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <motion.div className="hidden-576-600">
              <img 
                src="nikul2.png"
                alt="Nikul Kumar"
                className="img-fluid mt-5 d-none d-sm-block img-hide hidden-576-600 nikul"
                style={{ height: "85vh", width: "100vw" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="container hide-show mb">
        <div className="social ms-auto d-flex d-sm-none flex-column justify-content-center align-items-center">
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
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Innovative, dedicated, passionate developer.
      </motion.div>
    </div>
  );
};

export default Hero;

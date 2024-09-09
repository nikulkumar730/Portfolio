// ====================================================
import { useRef } from "react";
import DOMPurify from "dompurify";
import "./Project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

const items = [
  {
    id: 1,
    title: "Home page replica",
    subTitle: `Discover our sleek homepage designed with HTML and CSS:`,
    description: `
      About Us: Learn about our company and values.<br/>
      Services: Explore what we offer.<br/>
      Features: Unique benefits and innovations.<br/>
      Testimonials: Feedback from our happy clients.<br/>
      Team: Meet our talented professionals.<br/>
      Contact Us: Get in touch easily.`,
    img: "/project1.png",
    url: "https://nikulkumar730.github.io/Replica-Of-Homepage/",
  },
  {
    id: 2,
    title: "login Registration Page",
    subTitle: ` login and registration webpage using HTML, CSS, and JavaScript.`,
    description: `Login and Registration Forms: Separate forms for user login and registration.<br/>
LocalStorage: Stores registered user details dynamically.<br/>
Field Validation: Validates all fields on form submission.<br/>
Error Handling: Displays error messages immediately if validation fails.`,
    img: "/logIn-register.gif",
    url: "https://nikulkumar730.github.io/log_Register_page/",
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description: `Location Search: Find weather data for any city/region.<br/>
    Current Conditions: Up-to-date temperature, humidity, visibility.<br/>
    Wind Speed: Check current wind speeds.<br/>
    Sky Conditions: Know if it's clear, cloudy, or sunny.<br/>
    Current Date: View weather data for today.`,
    subTitle: `Get detailed, accurate weather info for any location. Features include:`,
    img: "/weather.gif",
    url: "https://nikulkumar730.github.io/weather_Api_fetch/",
  },
  {
    id: 4,
    title: "Portfolio react app4",
    description:
      "ext ever since the 1500s, when an unknown printer took a galley of type and <br/> scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
    img: "/Project.jpeg",
    url: "",
  },
  {
    id: 5,
    title: "Portfolio react app5",
    description:
      "ext ever since the 1500s, when an unknown printer took a galley of type and <br/> scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
    img: "/Project.jpeg",
    url: "",
  },
];

const Single = ({ item }) => {
  // Use a default image if not provided
  const imgAlt = "/Project.jpeg";

  // Sanitize the description to prevent XSS attacks
  const sanitizedDescription = DOMPurify.sanitize(item.description);
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  return (
    <section className="projectSection overflow-hidden" ref={ref}>
      <div className="container">
        <div className="row mt-sm d-flex align-items-center">
          <div className="col-md-6 col-12 col-12 mt-sm imgDiv">
            <img
              className="img-fluid"
              src={item.img ? item.img : imgAlt}
              alt={item.title}
            />
          </div>
          <motion.div className="col-md-6 col-12 col-12-fs-1" style={{ y }}>
            <div className="content">
              <h1>{item.title}</h1>
              <h4 className="text-primary">{item.subTitle}</h4>
              <p dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
              <a
                className="btn bg-primary text-white"
                href={item.url}
                target="_blank"
              >
                View...
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Project = () => {
  const ref1 = useRef();
  const { scrollYProgress } = useScroll({
    target: ref1,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 150, damping: 30 });

  return (
    <div id="project" className="Project" ref={ref1}>
      <div className="Title-and-Progressbar">
        <h1>My Projects</h1>
        <motion.div
          className="progress"
          style={{ scaleX, transformOrigin: "center center" }}
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Project;

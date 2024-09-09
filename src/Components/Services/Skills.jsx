import "./Skills.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [img, setImg] = useState();
  let items = [
    {
      id: 1,
      title: "HTML",
      subtitle:
        "In HTML, there’s no ‘why.’ Only ‘why not’ and ‘what could go wrong?",
      img: "/Html.png",
    },
    {
      id: 2,
      title: "CSS",
      subtitle:
        "Writing CSS is like playing a game of 'Guess Who?' but with elements that never quite look the way you expect.",
      img: "/css.png",
    },
    {
      id: 3,
      title: "JavaScript",
      subtitle:
        "JavaScript: The language that promises you 'undefined' is not 'undefined' and delivers it with a smile.",
      img: "/js.png",
    },
    {
      id: 4,
      title: "React",
      subtitle:
        "Why did the React developer get promoted? Because they knew how to handle a ‘prop’er crisis.",
      img: "/react.webp",
    },
    {
      id: 5,
      title: "Node.js",
      subtitle:
        "Using Node.js is like juggling chainsaws: it’s impressive when it works, but one slip and you’re in trouble.",
      img: "/node.webp",
    },
    {
      id: 6,
      title: "Express.js",
      subtitle:
        "Express.js: Turning 'request' and 'response' into a never-ending ping pong match since 2010.",
      img: "/ex.png",
    },
    {
      id: 7,
      title: "Mongo DB",
      subtitle:
        "MongoDB: The database that doesn't follow SQL because it has commitment issues.",
      img: "/mongo.png",
    },
    {
      id: 8,
      title: "Sass",
      subtitle:
        "Why did the Sass file always feel superior? It knew it had all the right 'variables'.",
      img: "/sass.png",
    },
    {
      id: 9,
      title: "My sql",
      subtitle:
        "Why did the MySQL query never get promoted? Because it kept getting stuck in a loop.",
      img: "/mysql.png",
    },
    {
      id: 10,
      title: "Figma",
      subtitle:
        "Using Figma is like hosting a design rave: everyone’s invited, and things get colorful fast.",
      img: "/figma.png",
    },
  ];

  const selectedItem = items.find((item) => item.id === selectedId);

  return (
    <div className="main1 container-fluid d-flex  justify-content-center">
      {items.map((item) => (
        <motion.div
          className= " id  d-flex  flex-column align-items-center justify-content-start border  "
          id={"id" + item.id}
          layoutId={item.id.toString()}
          key={item.id}
          onClick={() => {
            setSelectedId(item.id), setImg(item.img);
          }}
        >
          <motion.img
            className="animated-image"
            src={item.img}
            alt={item.subtitle}
          />
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && selectedItem && (
          <div className="centerMain">
            <motion.div
              className="center"
              layoutId={selectedId.toString()}
              key={selectedItem.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <img src={img} />
              <motion.h1>{selectedItem.title}</motion.h1>
              <motion.div class={"loader" + `${selectedItem.id}`}></motion.div>
              <motion.h2>{selectedItem.subtitle}</motion.h2>

              <motion.button onClick={() => setSelectedId(null)}>
                X
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Skills;

// import "./Skills.scss";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Skills = () => {
//   const [selectedId, setSelectedId] = useState(null);
//   const [img, setImg] = useState();
//   let items = [
//     { id: 1, subtitle: "HTML", title: "Click me", img: "/Html.png" },
//     { id: 2, subtitle: "CSS", title: "nikul2", img: "/css.png" },
//     { id: 3, subtitle: "JavaScript", title: "nikul3", img: "/js.png" },
//     { id: 4, subtitle: "React", title: "nikul4", img: "/react.webp" },
//     { id: 5, subtitle: "Node.js", title: "nikul5", img: "/node.webp" },
//     { id: 6, subtitle: "Express.js", title: "nikul6", img: "/ex.png" },
//   ];

//   const selectedItem = items.find((item) => item.id === selectedId);

//   return (
//     <div className="main1 container-fluid d-flex flex-wrap justify-content-center">
//       {items.map((item) => (
//         <motion.div
//           className="id col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center justify-content-start border mb-4"
//           id={"id" + item.id}
//           layoutId={item.id.toString()}
//           key={item.id}
//           onClick={() => {
//             setSelectedId(item.id);
//             setImg(item.img);
//           }}
//         >
//           <motion.img
//             className="animated-image"
//             src={item.img}
//             alt={item.subtitle}
//           />
//           <motion.button className="btn btn-primary mt-2">
//             {item.title}
//           </motion.button>
//         </motion.div>
//       ))}

//       <AnimatePresence>
//         {selectedId && selectedItem && (
//           <motion.div
//             className="center p-4"
//             layoutId={selectedId.toString()}
//             key={selectedItem.id}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <img src={img} alt={selectedItem.subtitle} />
//             <motion.h5 className="mt-3">{selectedItem.subtitle}</motion.h5>
//             <motion.h2 className="mt-2">{selectedItem.title}</motion.h2>
//             <motion.button
//               className="btn btn-danger mt-3"
//               onClick={() => setSelectedId(null)}
//             >
//               Close
//             </motion.button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Skills;

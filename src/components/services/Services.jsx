// import { useRef, useCallback } from "react";
// import "./services.scss";
// import { motion, useInView } from "framer-motion";

// const variants = {
//   initial: {
//     x: -500,
//     y: 100,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const Services = () => {

//   const handleWhatWeDoClick = useCallback(() => {
//     // Get the next slide element
//     const nextSlide = document.getElementById("Portfolio"); // Replace with the actual ID of the next slide

//     // Scroll to the next slide
//     nextSlide.scrollIntoView({ behavior: "smooth" });
//   }, []);

//   const ref = useRef();


//   const isInView = useInView(ref, { margin: "-100px" });

//   return (
//     <motion.div
//       className="services"
//       variants={variants}
//       initial="initial"
//       // animate="animate"
//       // whileInView="animate"
//       ref={ref}
//       animate={"animate"}
//     >
//       <motion.div className="textContainer" variants={variants}>
//         <p>
//           I focus on helping your brand grow
//           <br /> and move forward
//         </p>
//         <hr />
//       </motion.div>
//       <motion.div className="titleContainer" variants={variants}>
//         <div className="title">
//           <img src="/people.webp" alt="" />
//           <h1>
//             <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
//           </h1>
//         </div>
//         <div className="title">
//           <h1>
//             <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
//           </h1>
//           <button onClick={handleWhatWeDoClick} >WHAT WE DO?</button>
//         </div>
//       </motion.div>
//       <motion.div className="listContainer" variants={variants}>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Building Scalable Web Solutions</h2>
//           <p>
//           "We build fast, reliable, and easy-to-use websites for your business. Our web development services include custom design, e-commerce, maintenance, and optimization."
//           </p>
//           <button>Go</button>
//         </motion.div>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Crafting Responsive Web Designs</h2>
//           <p>
//           We design responsive websites that look great on any device. Our web design services include responsive design, UX/UI design, and conversion optimization."
//           </p>
//           <button>Go</button>
//         </motion.div>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Developing Secure E-commerce Solutions</h2>
//           <p>
//           We create secure e-commerce websites that protect your customers' information. Our e-commerce website development services include custom design, payment gateway integration, and inventory management."
//           </p>
//           <button>Go</button>
//         </motion.div>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Optimizing Website Performance</h2>
//           <p>
//           We optimize your website's speed and performance to keep your visitors happy. Our website optimization services include code optimization, image compression, and caching.
//           </p>
//           <button>Go</button>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Services;


import { useRef, useCallback } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const handleWhatWeDoClick = useCallback(() => {
    const nextSlide = document.getElementById("Portfolio");
    if (nextSlide) {
      nextSlide.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate="animate"
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="People" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
          </h1>
          <button onClick={handleWhatWeDoClick}>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Building Scalable Web Solutions</h2>
          <p>
            We build fast, reliable, and easy-to-use websites for your business. Our web development services include custom design, e-commerce, maintenance, and optimization.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Crafting Responsive Web Designs</h2>
          <p>
            We design responsive websites that look great on any device. Our web design services include responsive design, UX/UI design, and conversion optimization.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Developing Secure E-commerce Solutions</h2>
          <p>
            We create secure e-commerce websites that protect your customers' information. Our e-commerce website development services include custom design, payment gateway integration, and inventory management.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Optimizing Website Performance</h2>
          <p>
            We optimize your website's speed and performance to keep your visitors happy. Our website optimization services include code optimization, image compression, and caching.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;

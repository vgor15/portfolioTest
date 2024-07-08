// import"./portfolio.scss"
// import { useRef } from "react";
// import { motion, useScroll, useSpring, useTransform } from "framer-motion";


// const items = [
//     {
//       id: 1,
//       title: "cafeerio-online-foods",
//       img: "./public/cafeerio-online-foods.png",
//       desc: "Savor the flavor of your favorite cuisine from the comfort of your own home. Order online and get delicious food delivered right to your door!",
//     },
//     {
//       id: 2,
//       title: "Travelia",
//       img: "./public/project-3.png",
//       desc: "Where wanderlust meets wonder. Plan your perfect getaway with us and create memories that last a lifetime.",
//     },
//     {
//       id: 3,
//       title: "Digital Media",
//       img: "./public/Digitalmedia.png",
//       desc: "Where creativity meets technology. Elevate your brand's online presence with our cutting-edge digital media services.",
//     },
//     {
//       id: 4,
//       title: "NFC App",
//       img: "./public/nfc.jpg",
//       desc: "Tap into the future. Seamlessly connect, exchange, and experience with our innovative NFC app.",
//     },
//   ];

//   const Single = ({ item }) => {
//     const ref = useRef();
  
//     const { scrollYProgress } = useScroll({
//       target: ref,
//     });
  
//     const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  
//     return (
//       <section >
//         <div className="container">
//           <div className="wrapper">
//             <div className="imageContainer" ref={ref}>
//               <img src={item.img} alt="" />
//             </div>
//             <motion.div className="textContainer" style={{y}}>
//               <h2>{item.title}</h2>
//               <p>{item.desc}</p>
//               <button>See Demo</button>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     );
//   };
  
  




// const Portfolio = () => {
//     const ref = useRef();

//     const { scrollYProgress } = useScroll({
//       target: ref,
//       offset: ["end end", "start start"],
//     });
  
//     const scaleX = useSpring(scrollYProgress, {
//       stiffness: 100,
//       damping: 30,
//     });
  
//     return (
//       <div className="portfolio" ref={ref}>
//         <div className="progress">
//           <h1>Featured Works</h1>
//           <motion.div style={{ scaleX }} className="progressBar"></motion.div>
//         </div>
//         {items.map((item) => (
//           <Single item={item} key={item.id} />
//         ))}
//       </div>
//     );
//   };
  

// export default Portfolio

import "./portfolio.scss"
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
    {
      id: 1,
      title: "cafeerio-online-foods",
      img: "./public/cafeerio-online-foods.png",
      desc: "Savor the flavor of your favorite cuisine from the comfort of your own home. Order online and get delicious food delivered right to your door!",
      demoUrl: "https://cafeerio-online-foods.netlify.app/index.html"
    },
    {
      id: 2,
      title: "MUSEUM-OF-CANDY",
      img: "./public/Screenshot 2024-07-04 135215.png",
      desc: "Explore the Museum of Candy, an interactive digital experience showcasing the vibrant world of confectionery. Discover the history, take virtual tours, and indulge in the sweet allure of candy through engaging visuals and content. A delightful treat for all ages!",
      demoUrl: "https://vgor15.github.io/MUSEUM-OF-CANDY-/"
    },
    {
      id: 3,
      title: "QuizMaster",
      img: "./public/QuizMaster.png",
      desc: "Dive into QuizMaster, a dynamic platform designed to test your knowledge with engaging quizzes across various topics. Whether you're looking to challenge yourself or learn something new, QuizMaster offers an interactive and fun way to expand your horizons. Perfect for all trivia enthusiasts!",
      demoUrl: "https://vgor15.github.io/QuizMaster/"
    },
    {
      id: 4,
      title: "NFC App",
      img: "./public/nfc.jpg",
      desc: "Tap into the future. Seamlessly connect, exchange, and experience with our innovative NFC app.",
      demoUrl: "https://www.youtube.com"
    },
  ];

  const Single = ({ item }) => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  
    return (
      <section >
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <a href={item.demoUrl} target="_blank" rel="noopener noreferrer">
                <button>See Demo</button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };
  
  




const Portfolio = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"],
    });
  
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
    });
  
    return (
      <div className="portfolio" ref={ref}>
        <div className="progress">
          <h1>Featured Works</h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    );
  };
  

export default Portfolio
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AnimateHero from "./AnimateHero";
import '../css/index.css'

const Home = () => {
  const herotextani1 = "Ignite Your ".split("");
  const herotextani2 = "Learning Spark !!".split("");
  const navigate = useNavigate();
  return (
    <>
      <div className="hero-section">
        <div className="hero-text">
          <h1>
            {herotextani1.map((letter, index) => {
            return (
              <AnimateHero key={index}>
                {letter == " " ? "\u00A0" : letter}
              </AnimateHero>
            );
          })}
          </h1>
          <h2>{herotextani2.map((letter, index) => {
            return (
              <AnimateHero key={index}>
                {letter == " " ? "\u00A0" : letter}
              </AnimateHero>
            );
          })}</h2>
          <h3 className="second">
            Discover a world of knowledge and growth, fueled by the collective
            wisdom of your peers.
          </h3>
          <button onClick={() => navigate("/academics/2022scheme")}>
            Get started
          </button>
        </div>
        {/* <div className="hero-images">
          <motion.img
            initial={{ scale: 0, opacity: 0, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.2, rotate: 20, borderRadius: "0%" }}
            whileTap={{
              scale: 0.8,
              rotate: -20,
              borderRadius: "0%",
            }}
            className="hero-image"
            src="../images/frontImage.png"
            alt="book"
          />
        </div> */}
        {/* <div className="flag banner-1"></div>
          <div className="flag banner-2"></div>
          <div className="flag banner-3"></div> */}
      </div>
    </>
  );
};

export default Home;

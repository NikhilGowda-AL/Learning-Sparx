import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AnimateHero from "./AnimateHero";
import Header from "./Header";
import Home from "./Home";
import Header2 from "./Header2";
import Home2 from "./home2"
const Landingpage = () => {
  const herotextani = "Ignite Your Learning Spark".split("");
  const navigate = useNavigate();
  return (
    <>
    <div className="land" id="Home">
      <div className="overlay-vid"></div>
      <video autoPlay muted   src="../images/bgvid22.mp4" type="video/mp4"></video>
        <div className="nav-land">
        <Header/>
        {/* <Header2/> */}
            </div>
        <Home/>
    </div>
    </>
  );
};

export default Landingpage;

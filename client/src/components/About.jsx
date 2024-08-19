
import { Link } from "react-router-dom";
import Marks from "./Mark.svg";
import Resources from "./Resources.svg";
import Join from "./Join.svg";
import Promise from "./Promise.svg";
import '../css/index.css'
const Aboutus = () => {
  return (
    <div className="about-cover" id="About">

    
    <div className="about">
      <div className="text-head">About Learning Spark</div>
      <div className="about-boxes">
        <div className="left-about">
          <div className="box-head">
            Who We Are: A Community of Learners, Driven by Passion and Purpose
          </div>
          <div className="box-content">
            At [Your Institution Name], we are more than just an institution of
            higher learning; we are a community of passionate learners, driven
            by a shared pursuit of knowledge, innovation, and a positive impact
            on the world. We are a vibrant tapestry of individuals from diverse
            backgrounds, united by a common desire to explore the world,
            challenge convention, and make a meaningful difference.
          </div>
        </div>
        <div className="right-about">
          <img src={Marks} alt="" className="right-image" />
          {/* <Mark/> */}
        </div>
      </div>
      <div className="about-boxes-2">
        <div className="left-about">
          <div className="box-head">
            Our Resources: Extensive Notes and Study Materials
          </div>
          <div className="box-content">
            We have developed an extensive library of notes and study materials
            that are available to all of our students.Whether you're a
            first-year engineering student seeking foundational concepts or a
            senior preparing for complex exams, our comprehensive notes and
            study materials will provide you with the support you need to excel
            in your studies
          </div>
        </div>
        <div className="right-about">
          <img src={Resources} alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Aboutus;

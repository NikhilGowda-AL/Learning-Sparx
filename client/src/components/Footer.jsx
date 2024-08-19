import React from "react";
import { Link } from "react-router-dom";
import '../css/index.css'

function Footer() {
  return (
    <div className="footer-cover">
      <footer>
        <ul className="footUl">
          <li>
            <img
              src="..\Images\logo.png"
              alt="logo"
              style={{ width: "90px" }}
            />
          </li>
          <li>Copyright &#169; 2023 | Learning Spark All Rights Reserved</li>
        </ul>
        <ul className="footUl ul-2">
          {" "}
          <li>
            <a href="">Login</a>
          </li>
          <li>
            <a href="">Academics</a>
          </li>
          <li>
            <a href="">Activites</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;

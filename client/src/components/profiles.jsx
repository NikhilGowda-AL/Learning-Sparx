import React from "react";

import "../css/profile.css";
import Footer from "./Footer";
import { useNavigate,useLocation } from "react-router-dom";





const Profiles = () => {

  let navigate = useNavigate();

  const [click, setClick] = React.useState(false);
  let [isActive, setActive] = React.useState({
    profile: true,
    results: false,
  });

  let server = async (e) => {
    e.preventDefault();
    await axios.get('http://localhost:3030/api/v1/login')
    .then((response) => {
      navigate("/login/userProfile")
    })
  }

  
  return (

    <>
      <div className="profileContainer">
        <div>
          <img src="..\Images\logo.png" alt="logo" className="spark" />
        </div>

        <nav>
          <ul>
            <div className="hamburger">
              <i
                id="bar"
                onClick={() => {
                  setClick(!click)

                }
                }
                className={click ? "fas fa-times fa-2x":"fas fa-bars fa-2x"}
              ></i>
            </div>
            <div className="visibility">
            
            <li>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setActive({ ...isActive, profile: true, results: false });
                }}
                className={isActive.profile ? "underline" : ""}
              >
                My Profile
              </a>
            </li>
            <li>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setActive({ ...isActive, profile: false, results: true });

                }}
                className={isActive.results ? "underline" : ""}
              >
                Result Analysis
              </a>
            </li>
            <li>
              <button className="logout" onClick={() => navigate("/")}>
                Logout
              </button>
            </li>
            </div>
          </ul>
          <div style={{"display": click ? "block": "none"}} className="dropdown-menu">
            <li   onClick={(e) => {
                  e.preventDefault();
                  setActive({ ...isActive, profile: true, results: false });
                  setClick(false);
                }}
                
                >
              <a
                href=""
                className={isActive.profile ? "color" : ""}
              >
                My Profile
              </a>
            </li>
            <li  onClick={(e) => {
                  e.preventDefault();
                  setActive({ ...isActive, profile: false, results: true });
                  setClick(false);
                }}
                >
                
              <a
                href=""
                className={isActive.results ? "color" : ""}
                
              >
                Result Analysis
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/")}>
                Logout
              </a>
            </li>
            </div>
        </nav>
        {isActive.results ? (
          <div className="analysis">
            {" "}
            This page requires many backend suport to complete the Analysis of
            results{" "}
          </div>
        ) : (
          <>
            {" "}
            <div className="details">
              <h1>Student Details</h1>
              <div className="profilePic"></div>
              <span className="name">Nikhil A L</span>
              <table className="studentDetails">
                <tr>
                  <td>USN</td>
                  <td>1BI22IS071</td>
                </tr>
                <tr>
                  <td>BRANCH</td>
                  <td>ISE</td>
                </tr>
                <tr>
                  <td>YEAR</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>COLLEGE</td>
                  <td>BIT</td>
                </tr>
              </table>
            </div>

            <div className="academics">
              <h1>Academics</h1>
              <table className="studentAcademics">
                <tr>
                  <td>CURRENT SEM</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>TOTAL MARKS</td>
                  <td>715/800</td>
                </tr>
                <tr>
                  <td>SGPA</td>
                  <td>9.6</td>
                </tr>
              </table>
            </div>
            <div className="results">
              <h1>PREV. SEM SGPAs</h1>
              <table className="studentResults">
                <tr>
                  <td>1st SEM</td>
                  <td>9.7</td>
                </tr>
                <tr>
                  <td>2nd SEM</td>
                  <td>9.3</td>
                </tr>
                <tr>
                  <td>3rd SEM</td>
                  <td>9.6</td>
                </tr>
                <tr>
                  <td>CGPA</td>
                  <td>9.5</td>
                </tr>
              </table>
            </div>
            <div className="classRanks rankings">
              <h1>CLASS RANKS</h1>
              <table className="studentRanks">
                <tr>
                  <td style={{ fontSize: "30px" }}>🥇</td>
                  <td>
                    <div className="nameAndUsn">
                      <h4>Nikhil</h4>
                      <span>1BI22IS071</span>
                    </div>
                  </td>
                  <td>715</td>
                </tr>
                <tr>
                  <td style={{ fontSize: "30px" }}>🥈</td>
                  <td>
                    <div className="nameAndUsn">
                      <h4>Nikhil</h4>
                      <span>1BI22IS071</span>
                    </div>
                  </td>
                  <td>715</td>
                </tr>
                <tr>
                  <td style={{ fontSize: "30px" }}>🥉</td>
                  <td>
                    <div className="nameAndUsn">
                      <h4>Nikhil</h4>
                      <span>1BI22IS071</span>
                    </div>
                  </td>
                  <td>715</td>
                </tr>
              </table>
            </div>
            <div className="vtuRanks rankings">
              <h1>UNIVERSITY RANKS</h1>
              <table className="studentRanks">
                <tr>
                  <td style={{ fontSize: "30px" }}>🥇</td>
                  <td>
                    <div className="nameAndUsn">
                      <h4>Nikhil</h4>
                      <span>1BI22IS071</span>
                    </div>
                  </td>
                  <td>715</td>
                </tr>
                <tr>
                  <td style={{ fontSize: "30px" }}>🥈</td>
                  <td>
                    <div className="nameAndUsn">
                      <h4>Nikhil</h4>
                      <span>1BI22IS071</span>
                    </div>
                  </td>
                  <td>715</td>
                </tr>
                <tr>
                  <td style={{ fontSize: "30px" }}>🥉</td>
                  <td>
                    <div className="nameAndUsn">
                      <h4>Nikhil</h4>
                      <span>1BI22IS071</span>
                    </div>
                  </td>
                  <td>715</td>
                </tr>
              </table>
            </div>
            <div className="footer">
      <Footer/>
      </div>
          </>
        )}
      </div>
    </>
  );
};

export default Profiles;

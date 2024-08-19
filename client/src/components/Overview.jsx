import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";
const Overview = () => {
  var navigate = useNavigate();
  return (
    <div className="overview-section-cover" id="Overview">
      <div className="overview-section">
        <div className="overview-head">Overview:</div>
        <div className="overview-content">
          At StudentSpark, we believe in the transformative power of
          peer-powered learning. We're not just another notes repository; we're
          a vibrant community built by students, for students. Here, you'll find
          more than just comprehensive notes – you'll discover a supportive
          network of peers ready to help you excel.
        </div>
        <div className="card-container">
          <Tilt>
            <div className="cards" id="card-1">
              <div className="overlay-card">
                <h2 className="overlay-head">Vision and Mission</h2>
                <p>
                  To cultivate a student-empowered learning ecosystem where
                  students actively shape their learning experiences, fostering
                  a culture of collaboration, innovation, and lifelong learning.
                  To create a student-led platform, exclusively designed for
                  students, where knowledge is shared, passions are ignited, and
                  success stories are born, nurturing a thriving community of
                  engaged learners.
                </p>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className="cards" id="card-2"onClick={()=> { navigate("/login")}}>
              <div className="overlay-card">
                <h2 className="overlay-head" >Login With USN</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  quisquam dolorum blanditiis, labore voluptatem tempore beatae
                  laboriosam impedit officia incidunt debitis! Recusandae
                  cupiditate et porro cumque quas nemo aliquid sit voluptatibus
                  eius ratione? Ad, dolor.
                </p>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div className="cards" id="card-3">
              <div className="overlay-card">
                <h2 className="overlay-head">CONTACT US </h2>
                <p>
                  Our support team will be available to you any time.Our team
                  will available whole day, so donot be shy to ask questions.
                  Our is ready solve any problems so ask them without any fear.
                </p>
                <div style={{ textAlign: "center", marginTop: "3rem"  }} className="media-cont">
                      
                  <a href="">
                    <svg
                      className="media-svg"
                      height="50px"
                      style={{
                        enableBackground: "new 0 0 512 512",
                      }}
                      version="1.1"
                      viewBox="0 0 152 152"
                      width="50px"
                      x="0"
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      y="0"
                    >
                      <g>
                        <linearGradient
                          gradientUnits="userSpaceOnUse"
                          id="a"
                          x1="22.26"
                          x2="129.74"
                          y1="22.26"
                          y2="129.74"
                        >
                          <stop offset="0" stopColor="#fae100" />
                          <stop offset=".15" stopColor="#fcb720" />
                          <stop offset=".3" stopColor="#ff7950" />
                          <stop offset=".5" stopColor="#ff1c74" />
                          <stop offset="1" stopColor="#6c1cd1" />
                        </linearGradient>
                        <g data-name="Layer 2">
                          <g data-name="03.Instagram">
                            <rect
                              className=""
                              data-original="url(#a)"
                              fill="url(#a)"
                              height="152"
                              opacity="1"
                              rx="76"
                              width="152"
                            />
                            <g fill="#fff">
                              <path
                                className=""
                                d="M133.2 26c-11.08 20.34-26.75 41.32-46.33 60.9S46.31 122.12 26 133.2q-1.91-1.66-3.71-3.46A76 76 0 1 1 129.74 22.26q1.8 1.8 3.46 3.74z"
                                data-original="#ffffff10"
                                fill="#ffffff10"
                                opacity="1"
                              />
                              <path
                                className=""
                                d="M94 36H58a22 22 0 0 0-22 22v36a22 22 0 0 0 22 22h36a22 22 0 0 0 22-22V58a22 22 0 0 0-22-22zm15 54.84A18.16 18.16 0 0 1 90.84 109H61.16A18.16 18.16 0 0 1 43 90.84V61.16A18.16 18.16 0 0 1 61.16 43h29.68A18.16 18.16 0 0 1 109 61.16z"
                                data-original="#ffffff"
                                fill="#ffffff"
                                opacity="1"
                              />
                              <path
                                className=""
                                d="m90.59 61.56-.19-.19-.16-.16A20.16 20.16 0 0 0 76 55.33 20.52 20.52 0 0 0 55.62 76a20.75 20.75 0 0 0 6 14.61 20.19 20.19 0 0 0 14.42 6 20.73 20.73 0 0 0 14.55-35.05zM76 89.56A13.56 13.56 0 1 1 89.37 76 13.46 13.46 0 0 1 76 89.56zM102.43 54.38a4.88 4.88 0 0 1-4.85 4.92 4.81 4.81 0 0 1-3.42-1.43 4.93 4.93 0 0 1 3.43-8.39 4.82 4.82 0 0 1 3.09 1.12l.1.1a3.05 3.05 0 0 1 .44.44l.11.12a4.92 4.92 0 0 1 1.1 3.12z"
                                data-original="#ffffff"
                                fill="#ffffff"
                                opacity="1"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                  
                  <a href="">
                    <svg
                      className="media-svg"
                      height="50px"
                      style={{
                        enableBackground: "new 0 0 512 512",
                      }}
                      version="1.1"
                      viewBox="0 0 512 512"
                      width="50px"
                      x="0"
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      y="0"
                    >
                      <g>
                        <path
                          className=""
                          d="M512 256c0 141.387-114.613 256-256 256S0 397.387 0 256 114.613 0 256 0s256 114.613 256 256zm0 0"
                          data-original="#009ae5"
                          fill="#009ae5"
                          opacity="1"
                        />
                        <path
                          d="M506.047 311.05 392.602 198.286c-3.559-3.894-7.747-7.297-12.543-10.164-8.239-4.914-19.223-7.402-32.649-7.402-18.035 0-34.215 3.383-48.09 10.062-4.734 2.278-9.12 4.903-13.152 7.856l-16.664-14.028h-20.477l-76.742-76.703c-6.715-7.41-16.406-12.074-27.172-12.074h-.418c-20.234 0-36.695 16.461-36.695 36.695 0 9.766 3.84 18.649 10.086 25.227l26.84 26.851h-32.598v207.157l119.055 119.054A258.952 258.952 0 0 0 256 512c122.484 0 224.86-86.027 250.047-200.95zm0 0"
                          data-original="#0070b4"
                          fill="#0070b4"
                          opacity="1"
                        />
                        <g fill="#fff">
                          <path
                            d="M145.113 95.832h-.418c-20.234 0-36.695 16.461-36.695 36.695s16.46 36.696 36.695 36.696h.418c20.235 0 36.696-16.461 36.696-36.696s-16.461-36.695-36.696-36.695zM112.324 184.605h65.156v207.153h-65.156zM408.176 232.91c-1.45-9.215-4.453-17.824-8.934-25.594-4.515-7.832-10.972-14.289-19.183-19.195-8.239-4.914-19.223-7.402-32.649-7.402-18.035 0-34.215 3.383-48.09 10.062-12.37 5.95-22.383 14.246-29.816 24.692v-30.868h-58.93v207.157h65.153V273.453a53.318 53.318 0 0 1 7.304-13.781c3.14-4.274 6.778-8.04 10.813-11.192 4.02-3.144 8.222-5.628 12.496-7.386 4.219-1.735 8.48-2.617 12.672-2.617 7.914 0 14.101 2.82 18.918 8.617 4.808 5.804 7.25 15.375 7.25 28.445v116.223h65.152V259.59c0-8.559-.723-17.535-2.156-26.68zm0 0"
                            data-original="#ffffff"
                            fill="#ffffff"
                            opacity="1"
                          />
                        </g>
                        <path
                          d="M410.328 259.59v132.172H345.18V275.539c0-13.07-2.442-22.64-7.25-28.437-4.82-5.801-11.008-8.622-18.918-8.622-4.192 0-8.453.88-12.672 2.61-4.27 1.762-8.48 4.25-12.5 7.39-4.031 3.149-7.668 6.918-10.809 11.192a53.163 53.163 0 0 0-7.3 13.777v118.313H256V184.609h13.5v30.86c7.441-10.438 17.45-18.739 29.82-24.688 13.871-6.68 30.051-10.062 48.09-10.062 13.43 0 24.41 2.492 32.649 7.402 8.21 4.91 14.671 11.367 19.18 19.2 4.48 7.769 7.491 16.378 8.94 25.59 1.43 9.14 2.15 18.12 2.15 26.679zm0 0"
                          data-original="#fff5cb"
                          fill="#fff5cb"
                          opacity="1"
                        />
                      </g>
                    </svg>
                  </a>
                  <a href="">
                    <svg
                      className="media-svg"
                      height="50px"
                      style={{
                        enableBackground: "new 0 0 512 512",
                      }}
                      version="1.1"
                      viewBox="0 0 24 24"
                      width="50px"
                      x="0"
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      y="0"
                    >
                      <g>
                        <circle
                          className=""
                          cx="12"
                          cy="12"
                          data-original="#039be5"
                          fill="#039be5"
                          opacity="1"
                          r="12"
                        />
                        <path
                          d="m5.491 11.74 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"
                          data-original="#ffffff"
                          fill="#ffffff"
                          opacity="1"
                        />
                      </g>
                    </svg>
                  </a>
                  <a href="">
                        <svg
                          className="media-svg"
                          height="50px"
                          style={{
                            enableBackground: "new 0 0 512 512",
                            backgroundColor:"white",
                            borderRadius:"200px"
                          }}
                          version="1.1"
                          viewBox="0 0 176 176"
                          width="50px"
                          x="0"
                          xmlSpace="preserve"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          y="0"
                        >
                          <g transform="matrix(1,0,0,1,0,0)">
                            <path
                              className=""
                              d="M152 0H24A24 24 0 0 0 0 24v128a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24V24a24 24 0 0 0-24-24zm-46.75 140.55c-2.82.54-3.78-1.16-3.78-2.57 0-1.76.07-7.57.07-14.8 0-5.07-1.79-8.38-3.71-10 12.23-1.33 25.09-5.9 25.09-26.66A20.71 20.71 0 0 0 117.28 72c.55-1.37 2.41-6.87-.55-14.31 0 0-4.6-1.45-15 5.54a52.85 52.85 0 0 0-27.5 0c-10.52-7-15.13-5.54-15.13-5.54-3 7.46-1.1 12.96-.53 14.31a20.64 20.64 0 0 0-5.66 14.5c0 20.7 12.84 25.35 25 26.7a11.45 11.45 0 0 0-3.48 7.23c-3.15 1.38-11.12 3.77-16-4.49 0 0-2.9-5.2-8.42-5.57 0 0-5.37-.07-.39 3.28 0 0 3.62 1.67 6.12 7.9 0 0 3.23 10.51 18.53 7.26 0 4.5.06 7.9.06 9.19s-1 3.1-3.75 2.59C48.76 133.47 33 113.22 33 89.34c0-29.85 24.61-54 55-54s55 24.2 55 54.05c0 23.79-15.74 44.06-37.75 51.16z"
                              data-name="Layer 2"
                              data-original="#000000"
                              fill="#000000"
                              opacity="3"
                            />
                          </g>
                        </svg>
                      </a>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Overview;

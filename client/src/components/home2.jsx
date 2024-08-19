import { useNavigate } from "react-router-dom";

const Home2 = () => {

  const navigate = useNavigate();
  return (
    <>
      <div className="home2-hero-section">
        <div className="home2-hero-text">
          <h1>Ignite Your Learning Spark!!
          </h1>
          <h3 className="second">
            Discover a world of knowledge and growth, fueled by the collective
            wisdom of your peers.
          </h3>
          <button onClick={() => navigate("/academics/2022scheme")}>
            Get started
          </button>
        </div>
      </div>
    </>
  );
};

export default Home2;

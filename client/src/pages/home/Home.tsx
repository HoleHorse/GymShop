import LoginBtn from "../../components/buttons/LoginBtn";
import Header from "../../components/header/Header";
import SignUpBtn from "../../components/buttons/SignUpBtn";
import smile from "../../assets/smile.jpg";
import supplements from "../../assets/supplements.jpg";
import collage from "../../assets/gym-collage.png"
import "./home.style.scss";

function Home() {
  return (
    <>
      <Header>
        <LoginBtn />
      </Header>
      <div className="background-container" style={{ padding: 12 + "%" }}>
        <div className="main-content">
          <div className="columns">
            <div className="column is-full">
              <p className="main-text">
                Building confidence. Building fitness.
              </p>
            </div>
          </div>
          <div className="columns is-mobile is-multiline is-centered">
            <div className="field center">
              <div className="column is-narrow">
                <input
                  className="input"
                  type="email"
                  placeholder="Email Address"
                  style={{ minWidth: "275px" }}
                />
              </div>
              <div className="column is-narrow">
                <SignUpBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container is-fluid columns is-centered is-multiline center"
        style={{ margin: 0 }}
      >
        <div className="column">
          <p className="section-header">Lead healthy lifestyle</p>
          <p className="section-text">Stay happy and fit</p>
        </div>
        <div className="column">
          <img src={smile} alt="img" style={{ minWidth: 300 }} />
        </div>
      </div>
      <div
        className="container is-fluid columns is-centered is-multiline center"
        style={{ margin: 0 }}
      >
        <div className="column swap1">
          <img src={collage} alt="img" style={{ minWidth: 300 }} />
        </div>
        <div className="column swap2">
          <p className="section-header">Upgrade your gear</p>
          <p className="section-text">
            Have more versatility with more equipment
          </p>
        </div>
      </div>
      <div
        className="container is-fluid columns is-centered is-multiline center"
        style={{ margin: 0 }}
      >
        <div className="column">
          <p className="section-header">
            Fuel Your Strength
          </p>
          <p className="section-text">
            Unlock Your Potential with Gym Supplements.
          </p>
        </div>
        <div className="column">
          <img src={supplements} alt="img" style={{ minWidth: 300 }} />
        </div>
      </div>
    </>
  );
}

export default Home;

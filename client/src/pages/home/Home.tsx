import LoginBtn from "../../components/buttons/LoginBtn";
import Header from "../../components/header/Header";
import SignUpBtn from "../../components/buttons/SignUpBtn";
import smile from "../../assets/smile.jpg";
import supplements from "../../assets/supplements.jpg";
import collage from "../../assets/gym-collage.png";
import "./home.style.scss";
import Question from "./faq/Question";
import Footer from "../../components/footer/Footer";

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
      <div className="container is-fluid">
        <div
          className="columns is-centered is-multiline center"
          style={{ margin: 0 }}
        >
          <div className="column">
            <p className="section-header">Lead healthy lifestyle</p>
            <p className="section-text">
              Become happier and fitter with GymShop
            </p>
          </div>
          <div className="column">
            <img src={smile} alt="img" style={{ minWidth: 300 }} />
          </div>
        </div>
      </div>
      <div className="container is-fluid">
        <div
          className="columns is-centered is-multiline center"
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
      </div>
      <div className="container is-fluid">
        <div
          className="columns is-centered is-multiline center"
          style={{ margin: 0 }}
        >
          <div className="column">
            <p className="section-header">Fuel Your Strength</p>
            <p className="section-text">
              Unlock Your Potential with Gym Supplements
            </p>
          </div>
          <div className="column">
            <img src={supplements} alt="img" style={{ minWidth: 300 }} />
          </div>
        </div>
      </div>
      <div className="container is-fluid" style={{paddingBottom: 24}}>
        <div className="column">
          <p id="faq" className="main-text mt-5">
            Frequently Asked Questions
          </p>
        </div>
        <Question
          question="What is GymShop?"
          answer="GymShop is a chain of stores dedicated to selling everything that will help its customers exercise"
        />
        <Question
          question="How do I buy?"
          answer="To buy any product from oyr store you need to press button saying order and fill required data or add it to the cart and buy later"
        />
        <Question
          question="What equipment do you sell?"
          answer="GymShop has a very wide range of training equipment, from weights to supplements and exercise equipment."
        />
        <Question
          question="Can I try out the equipment before making a purchase?"
          answer="Yes, we have dedicated showrooms where you can try out the gym equipment before buying."
        />
        <Question
          question="What payment methods do you accept?"
          answer="We accept various payment methods, including credit/debit cards, cash, and online payment platforms."
        />
        <Question
          question="Do you provide warranties?"
          answer="Yes, all our gym equipment comes with warranties. The duration and coverage may vary depending on the specific product. Please check the product details or contact our customer service for more information."
        />
      </div>
      <Footer />
    </>
  );
}

export default Home;

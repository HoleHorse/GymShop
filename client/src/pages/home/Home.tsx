import RedBtn from "../../components/UI/buttons/RedBtn";
import Header from "../../components/header/Header";
import smile from "../../assets/smile.jpg";
import supplements from "../../assets/supplements.jpg";
import collage from "../../assets/gym-collage.png";
import "./home.style.scss";
import Question from "./faq/Question";
import Footer from "../../components/footer/Footer";
import { SetStateAction, useState } from "react";
import Input from "../../components/UI/input/Input";
import logout from "../../assets/logout.svg";
import NavbarLink from "../../components/header/navbar-link/NavbarLink";

function Home() {
  const [email, setEmail] = useState("");
  const onEmailChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };
  return (
    <>
      <Header>
        <NavbarLink text="Log In" href="/login" img={logout} />
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
                <Input
                  value={email}
                  onValueChange={onEmailChange}
                  type="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="column is-narrow">
                <RedBtn text="Get Started" href="/register" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container is-fluid">
        <div className="center section">
          <div className="w50">
            <p className="section-header">Lead healthy lifestyle</p>
            <p className="section-text">
              Become happier and fitter with GymShop
            </p>
          </div>
          <div className="w50">
            <img src={smile} alt="img" />
          </div>
        </div>
      </div>
      <div className="container is-fluid">
        <div className="center section-2">
          <div className="w50">
            <p className="section-header">Power Up Your Gear</p>
            <p className="section-text">Buy versatile Equipment at our store</p>
          </div>
          <div className="w50">
            <img src={collage} alt="img" />
          </div>
        </div>
      </div>
      <div className="container is-fluid">
        <div className="center section">
          <div className="w50">
            <p className="section-header">Unleash Your Potential</p>
            <p className="section-text">
              Achieve better results with supplements
            </p>
          </div>
          <div className="w50">
            <img src={supplements} alt="img" />
          </div>
        </div>
      </div>
      <div className="container is-fluid" style={{ paddingBottom: 24 }}>
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

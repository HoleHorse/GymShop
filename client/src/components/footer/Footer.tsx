import insta from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import youtube from "../../assets/movie.svg";
import twitter from "../../assets/connection.svg";
import facebook from "../../assets/connection-85.svg";
import "./footer.style.scss"

function Footer() {
  return (
    <footer className="footer center">
      <div className="content">
        <div style={{ marginBottom: 24 }}>
          <img src={linkedin} alt="Linkedin" />
          <img src={youtube} alt="Youtube" />
          <img src={insta} alt="Instagram" />
          <img src={twitter} alt="Twitter" />
          <img src={facebook} alt="Facebook" />
        </div>
        <p>
          <a href="/terms">Terms Of Use</a>
          <a href="/about">About</a>
          <a href="/help">Need Help?</a>
          <a href="/privacy">Privacy</a>
          <a href="/cookies">Cookies</a>
        </p>
      </div>
      <p>
        &#xA9; 2023 <span id="gymshop">GYMSHOP</span>
      </p>
    </footer>
  );
}

export default Footer;

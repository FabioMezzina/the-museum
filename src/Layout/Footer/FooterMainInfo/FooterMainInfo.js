import classes from "./FooterMainInfo.module.scss";
import logoFiat from "../../../assets/logo-fiat.png";

const FooterMainInfo = () => {
  return (
    <section className={classes["footer-main-info"]}>
      {/* left */}
      <div className={classes["footer-main-left"]}>
        <div className={classes["main-title"]}>
          <h3>THE MUSEUM</h3>
          <a href="/">Via Sant Ottavio, 44 - 10126 Torino</a>
        </div>
        <div className={classes["main-partner"]}>
          <img src={logoFiat} alt="fiat" />
          <h4>
            MAIN
            <br />
            PARTNER
          </h4>
        </div>
        <ul className={classes["footer-social"]}>
          <li>
            <a href="/">
              <i className="fab fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      {/* right */}
      <div className={classes["footer-main-right"]}>
        <ul className={classes["footer-main-links"]}>
          <li>
            <a href="/">STAMPA</a>
          </li>
          <li>
            <a href="/">STATUTO E CODICE ETICO</a>
          </li>
          <li>
            <a href="/">PRIVACY</a>
          </li>
        </ul>
        <div className={classes["footer-main-contact"]}>
          <i className="fas fa-phone"></i>
          <a href="/">011.0062713</a>
        </div>
        <div className={classes["footer-main-contact"]}>
          <i className="fas fa-envelope"></i>
          <a href="/">info@themuseum.it</a>
        </div>
      </div>
    </section>
  );
};

export default FooterMainInfo;

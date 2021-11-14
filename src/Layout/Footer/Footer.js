import React from "react";

import FooterMainInfo from "./FooterMainInfo/FooterMainInfo";
import Newsletter from "./Newsletter/Newsletter";

import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className={classes.footer}>
        <FooterMainInfo />
        <Newsletter />
      </footer>
      <section className={classes["bottom-footer"]}>
        <h5>2020 THE MUSEUM&reg;</h5>
        <p>Publicis Sapient</p>
      </section>
    </React.Fragment>
  );
};

export default Footer;

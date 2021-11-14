import classes from "./Social.module.scss";

const Social = () => {
  return (
    <section className={classes.social}>
      <div className={classes.lang}>
        <a href="/">ENG</a>
      </div>
      <ul>
        <li>
          <a href="/">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Social;

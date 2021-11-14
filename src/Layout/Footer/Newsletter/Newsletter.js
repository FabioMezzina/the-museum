import classes from './Newsletter.module.scss';

const Newsletter = () => {
  return (
    <section className={classes.newsletter}>
      <p>Resta sempre aggiornato<br />su mostre, workshop ed eventi</p>
      <div className={classes.email}>
        <input type="email" placeholder="email" name="email" />
      </div>
      <div className={classes.terms}>
        <input type="checkbox" id="terms" name="terms" />
        <label htmlFor="terms" className={classes.termschk}></label>
        <label htmlFor="terms">Accetto i termini e condizioni</label>
      </div>
      <div className={classes.register}>
        <a href="/">ISCRIVITI ALLA NEWSLETTER</a>
      </div>
    </section>
  );
}

export default Newsletter;
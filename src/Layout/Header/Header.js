import NavBar from './NavBar/NavBar';

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <NavBar />
      <section className={classes['hero-title']}>
        <h2>Archivio storico</h2>
        <p>Una raccolta di tutti i momenti più importanti nella storia del museo e dei suoi curatori.</p>
      </section>
    </header>
  );
};

export default Header;

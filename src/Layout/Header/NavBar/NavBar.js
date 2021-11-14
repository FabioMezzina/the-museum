import Social from './Social/Social';
import NavMenu from './NavMenu/NavMenu';
import classes from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={classes.navbar}>
      <h1>The<br />Museum</h1>
      <NavMenu />
      <Social />
    </nav>
  );
}

export default NavBar;
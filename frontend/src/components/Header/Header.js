import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__logo}>
        <Link to="/" className={classes.header__logo_link}>
          Gallery
        </Link>
      </div>
      <div className={classes.header__auth}>
        <Link to="" className={classes.header__auth_link}>
          Login
        </Link>
        <Link to="" className={classes.header__auth_link}>
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;

import { Link, NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return(
    <nav>
      <div className={styles.homeIco}>
        <Link to='/'><i className="fa fa-tasks"></i></Link>
      </div>
      <div className={styles.menu}>
        <ul>
          <li><NavLink className={ ({isActive}) => isActive ? styles.linkActive : undefined } to="/">Home</NavLink></li>
          <li><NavLink className={ ({isActive}) => isActive ? styles.linkActive : undefined } to="/favorite">Favorite</NavLink></li>
          <li><NavLink className={ ({isActive}) => isActive ? styles.linkActive : undefined } to="/about">About</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
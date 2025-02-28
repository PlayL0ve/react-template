import { NavLink } from 'react-router-dom';
import styles from './Navigation.css';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <NavLink to="/">Home </NavLink>
      <NavLink to="/books">Books </NavLink>
      <NavLink to="/games">Games </NavLink>
      <NavLink to="/form">Form </NavLink>
    </nav>
  );
}

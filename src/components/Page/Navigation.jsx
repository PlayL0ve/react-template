import styles from './Navigation.css';
import NavItem from './NavItem';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <NavItem to="/">Home </NavItem>
      <NavItem to="/books">Books </NavItem>
      <NavItem to="/games">Games </NavItem>
      <NavItem to="/form">Form </NavItem>
    </nav>
  );
}

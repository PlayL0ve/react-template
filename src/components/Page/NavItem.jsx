import { NavLink } from 'react-router-dom';
import styles from './NavItem.css';

export default function NavItem({ to, children }) {
  return (
    <div className={styles.NavItem}>
      <NavLink to={to}>
        {children}
      </NavLink>
    </div>
  );
}

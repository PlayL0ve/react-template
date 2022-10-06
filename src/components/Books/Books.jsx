import styles from './Books.css';
import { Link, Outlet } from 'react-router-dom';

export default function Books() {
  return (
    <div className={styles.Books}>
      <h1>Books</h1>
      <nav>
        <Link to="breathe">Breathe</Link>
        <Link to="born">Born</Link>
        <Link to="baghavad">Baghavad Gita</Link>
      </nav>
      <Outlet />
    </div>
  );
}

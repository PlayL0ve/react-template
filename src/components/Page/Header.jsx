import styles from './Header.css';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className={styles.Header}>
      <h1>Navigation</h1>
      <Navigation />
    </header>
  );
}

import Link from 'next/link';
import styles from './styles/header.module.scss';
import Navigation from '../navigation/Navigation';

export default function Header() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
  ];
  return (
    <header className={styles.header}>
      <Navigation navLinks={navItems} />
    </header>
  );
}

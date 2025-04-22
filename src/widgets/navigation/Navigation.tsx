'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './styles/nav.module.scss';

type NavLink = {
  label: string;
  href: string;
};
type Props = {
  navLinks?: NavLink[];
};

export default function Navigation({ navLinks }: Props) {
  const pathname = usePathname();
  return (
    <>
      {navLinks?.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={index}
            href={item.href}
            className={isActive ? styles.active : ''}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './nav-link.module.css';

export default function NavLink({ href, children }) {
  const path = usePathname();
  const isActive = path.startsWith(href);
  const className = isActive ? `${classes.link} ${classes.active}` : classes.link;

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

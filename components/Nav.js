import Link from 'next/link';
import styles from '@/styles/Nav.module.css';

export default function Nav() {
    return (
        <nav className={styles.nav}>

           
            <h1 className={styles.logo}>
                <Link className={styles.navLink} href="/">Tr_uly</Link>
            </h1>
            <ul className={styles.navList}>
                <li className={styles.navItem}><Link className={styles.navLink} href="/about">About</Link></li>
                <li className={styles.navItem}><Link className={styles.navLink} href="/contact">Contact</Link></li>
                <li className={styles.navItem}><Link className={styles.navLink} href="/privacy">Privacy</Link></li>

            </ul>
        </nav>
    )
}
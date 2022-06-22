import Link from "next/link";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
    return (
        <>
        <div className={styles.navMenu}>
            <Link href='/'>
                <a className={styles.navItem}>Home</a>           
            </Link>
            <Link href='/works'>
                <a className={styles.navItem}>Works</a>            
            </Link>
            <Link href='/blog/'>
                <a className={styles.navItem}>Blog</a>               
            </Link>
            <Link href='/books/'>
                <a className={styles.navItem}>Books</a>            
            </Link>
        </div>
        </>
    );
};

export default Navbar;
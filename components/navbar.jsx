import Link from "next/link";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
    return (
        <>
        <div className={styles.navMenu}>
            <Link href='/'>
                <a className={styles.navItem}>Home</a>           
            </Link>
            <Link href='/blog/blog'>
                <a className={styles.navItem}>Blog</a>               
            </Link>
            <Link href='/books/books'>
                <a className={styles.navItem}>Books</a>            
            </Link>
        </div>
        </>
    );
};

export default Navbar;
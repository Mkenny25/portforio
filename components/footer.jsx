import Link from "next/link";
import styles from "../styles/footer.module.css";

const Footer = () => {
    return (
        <>
            <Link href="/">
                <a className={styles.footer}>Ken Portfolio by Next.js ©︎2022</a>
            </Link>
        </>
    );
};

export default Footer;
import Navbar from "./navbar";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.navBar}>
        <Navbar />
      </div>
    </>
  );
};

export default Header;
import styles from '../styles/snslink.module.css'
import { 
  SiGithub,
  SiTwitter 
} from 'react-icons/si';

const Snslink = () => {
  return (
    <>
    <div className={styles.skillWrapper} >
      <a href="https://example.com/" target="_blank" rel="noopener noreferrer" className={styles.skillItem} >
        <SiGithub size={30} color={'#181717'} />
      </a>
      <a href="https://example.com/" target="_blank" rel="noopener noreferrer" className={styles.skillItem}>
        <SiTwitter size={30} color={'#1DA1F2'} />
      </a>
    </div>
    </>
  );
};
export default Snslink;
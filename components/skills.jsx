import styles from "../styles/skills.module.css";
import {
  SiHtml5,
  SiCss3,
  SiJava,
  SiReact,
  SiJavascript,
  SiGatsby
} from 'react-icons/si';

const Skills = () => {
  return (
    <>
      <div className={styles.skillWrapper}>
        {/* <SiHtml5 size={30} className={styles.skill}></SiHtml5> */}
        {/* <SiCss3 size={30} className={styles.skill}></SiCss3> */}
        {/* <SiJavascript size={30} className={styles.skill}> </SiJavascript>  */}
        <SiJava size={30} className={styles.skill}> </SiJava>
        <SiReact size={30} className={styles.skill}> </SiReact> 
        <SiGatsby size={30} className={styles.skill}> </SiGatsby> 
      </div>
    </>
  );
 };
export default Skills;
  
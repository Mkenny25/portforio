import styles from "../styles/profile.module.css";
import Image from "next/image";
import Skills from "./skills";
import History from '../components/history'
import profilePic from '../public/images/portfolioimg.png'


// export default function Profile() {
    const Profile = () => {
    return (
        <>
        <div className={styles.profile}>
            <div className={styles.leftSection}>
                <div>
                    <>
                        <Image 
                            className="profileimg"
                            src={profilePic} 
                            alt="Profileimg" 
                            width={200} 
                            height={200} 
                        />
                        <style jsx global>{`
                            .profileimg {
                                border-radius: 50%;
                            }
                        `}</style>
                    </>
                </div>

            </div>
            <div className={styles.rightSection}>
                <div className={styles.name}> Ken M</div>
                <ul className={styles.items}>
                    <li>出身：静岡県</li>
                    <li>誕生：1995/5/25</li>
                    <li>趣味：野球・筋トレ・絵を描く</li>
                    <br />
                    <li>個人学習の成果物を残していけたらと思います！</li>
                </ul>
                <Skills />
            </div>
        </div>
        <div>
            <History />
        </div>
    </>
    );
};

export default Profile;
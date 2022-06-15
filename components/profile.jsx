import styles from "../styles/profile.module.css";
import Image from "next/image";
import Snslink from "./snslink";
import profilePic from '../public/images/portfolioimg.png'
// import Skills from "./skills"

export default function Profile() {
    return (
        <div className={styles.profile}>
            <div className={styles.leftSection}>
                <div className={styles.image}>
                    <>
                        <Image 
                            className="profile"
                            src={profilePic} 
                            alt="Profileimg" 
                            width={200} 
                            height={200} 
                        />
                        <style jsx global>{`
                            .profile {
                                border-radius: 50%;
                            }
                        `}</style>
                    </>
                </div>
                {/* <Snslink /> */}

            </div>
            <div className={styles.rightSection}>
                <div className={styles.name}> Ken M</div>
                <ul className={styles.items}>
                    {/* <li>フロントエンドエンジニア</li> */}
                    <li>出身：静岡県</li>
                    <li>誕生：1995/5/25</li>
                    <li>趣味：野球・筋トレ・絵を描く</li>
                    <br />
                    <li>個人学習の成果物を残していけたらと思います！</li>
                    <Snslink />
                </ul>
            </div>
        </div>
    );
};
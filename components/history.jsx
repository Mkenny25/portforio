import styles from '../styles/history.module.css'
import { 
    SiReact,
    SiHtml5,
    SiJava
  } from 'react-icons/si';

const History = () => {
    return (
        <>
     
            <div className={styles.timeline}>
                <div className={styles.containerLeft}>
                    <div className={styles.dateLeft}>2021/11~</div>
                    <i className={styles.iconLeft} >
                        <SiReact size={40} color={'grey'} />
                    </i>
                    <div className={styles.contentLeft}>
                    <h2 className={styles.aboutTitle}>フロント開発（React+Redux）</h2>
                            <p className={styles.aboutDiscription}>
                                金融業社の開発に従事。主にReact+Reduxを用いてフロント側の開発に携わる。
                            </p>
                    </div>
                </div>
                <div className={styles.containerRight}>
                    <div className={styles.dateRight}>2021/05~</div>
                    <i className={styles.iconRight} >
                        <SiHtml5 size={40} color={'grey'} />
                    </i>
                    <div className={styles.contentRight}>
                        <h2 className={styles.aboutTitle}>ホームページ制作</h2>
                            <p className={styles.aboutDiscription}>
                                以下バック業務をやる一方で不動産ホームページに関する制作に携わる。主にページ作成/修正、バナー広告の作成。
                            </p>
                    </div>
                </div>
                <div className={styles.containerLeft}>
                    <div className={styles.dateLeft}>2020/10~</div>
                    <i className={styles.iconLeft} >
                        <SiJava size={40} color={'grey'} />
                    </i>
                    <div className={styles.contentLeft}>
                    <h2 className={styles.aboutTitle}>バック運用保守（Java）</h2>
                            <p className={styles.aboutDiscription}>
                                出版社のシステム運用保守に従事。Javaを用いて軽微なバグ修正、新規機能追加等の運用保守に携わる。
                            </p>
                    </div>
                </div>
                <div className={styles.containerRight}>
                    <div className={styles.dateRight}>2020/02~</div>
                    <i className={styles.iconRight} >
                        <SiJava size={40} color={'grey'} />
                    </i>
                    <div className={styles.contentRight}>
                        <h2 className={styles.aboutTitle}>バック開発（Java）</h2>
                            <p className={styles.aboutDiscription}>
                                金融業社の開発に従事。主にJavaを用いたバック側の製造。
                            </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default History;
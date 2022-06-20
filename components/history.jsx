import styles from '../styles/history.module.css'

const History = () => {
    return (
        <>
            <div className={styles.timeline}>
                <div className={styles.containerLeft}>
                    <div className={styles.dateLeft}>15 Dec</div>
                    <div className={styles.contentLeft}>
                    <h2 className={styles.aboutTitle}>Lorem ipsum dolor sit amet</h2>
                            <p className={styles.aboutDiscription}>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p>
                    </div>
                </div>
                <div className={styles.containerRight}>
                    <div className={styles.dateRight}>15 Dec</div>
                    <div className={styles.contentRight}>
                        <h2 className={styles.aboutTitle}>Lorem ipsum dolor sit amet</h2>
                            <p className={styles.aboutDiscription}>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p>
                    </div>
                </div>
                <div className={styles.containerLeft}>
                    <div className={styles.dateLeft}>15 Dec</div>
                    <div className={styles.contentLeft}>
                    <h2 className={styles.aboutTitle}>Lorem ipsum dolor sit amet</h2>
                            <p className={styles.aboutDiscription}>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default History;
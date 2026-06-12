import styles from './Skeleton.module.scss'

const Skeleton = () => {
    return (
        <>
            <p className={styles.select}>Please select a character to see information</p>
            <div className={`skeleton ${styles.skeleton}`}>
                <div className={`pulse ${styles.header}`}>
                    <div className={`pulse ${styles.circle}`}></div>
                    <div className={`pulse ${styles.mini}`}></div>
                </div>
                <div className={`pulse ${styles.block}`}></div>
                <div className={`pulse ${styles.block}`}></div>
                <div className={`pulse ${styles.block}`}></div>
            </div>
        </>
    )
}

export default Skeleton

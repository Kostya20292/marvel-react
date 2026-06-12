import abyss from '../../assets/abyss.jpg'
import buttonStyles from '../../style/button.module.scss'
import styles from './CharList.module.scss'

const CharList = () => {
    return (
        <div>
            <ul className={styles.grid}>
                <li className={styles.item}>
                    <img src={abyss} alt="abyss"/>
                    <div className={styles.name}>Abyss</div>
                </li>
                <li className={`${styles.item} ${styles.itemSelected}`}>
                    <img src={abyss} alt="abyss"/>
                    <div className={styles.name}>Abyss</div>
                </li>
                <li className={styles.item}>
                    <img src={abyss} alt="abyss"/>
                    <div className={styles.name}>Abyss</div>
                </li>
                <li className={styles.item}>
                    <img src={abyss} alt="abyss"/>
                    <div className={styles.name}>Abyss</div>
                </li>
                <li className={styles.item}>
                    <img src={abyss} alt="abyss"/>
                    <div className={styles.name}>Abyss</div>
                </li>
                <li className={styles.item}>
                    <img src={abyss} alt="abyss"/>
                    <div className={styles.name}>Abyss</div>
                </li>
                <li className={styles.item}>
                    <img src={abyss} alt="abyss"/>
                    <div className={styles.name}>Abyss</div>
                </li>
                <li className={styles.item}>
                    <img src={abyss} alt="abyss"/>
                    <div className={styles.name}>Abyss</div>
                </li>
                <li className={styles.item}>
                    <img src={abyss} alt="abyss"/>
                    <div className={styles.name}>Abyss</div>
                </li>
            </ul>
            <button className={`${buttonStyles.button} ${buttonStyles.main} ${buttonStyles.long}`}>
                <div className={buttonStyles.inner}>load more</div>
            </button>
        </div>
    )
}

export default CharList

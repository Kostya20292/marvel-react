import uw from '../../assets/UW.png'
import xMen from '../../assets/x-men.png'
import buttonStyles from '../../style/button.module.scss'
import styles from './ComicsList.module.scss'

const ComicsList = () => {
    return (
        <div className={styles.list}>
            <ul className={styles.grid}>
                <li className={styles.item}>
                    <a href="#">
                        <img src={uw} alt="ultimate war" className={styles.itemImg}/>
                        <div className={styles.itemName}>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className={styles.itemPrice}>9.99$</div>
                    </a>
                </li>
                <li className={styles.item}>
                    <a href="#">
                        <img src={xMen} alt="x-men" className={styles.itemImg}/>
                        <div className={styles.itemName}>X-Men: Days of Future Past</div>
                        <div className={styles.itemPrice}>NOT AVAILABLE</div>
                    </a>
                </li>
                <li className={styles.item}>
                    <a href="#">
                        <img src={uw} alt="ultimate war" className={styles.itemImg}/>
                        <div className={styles.itemName}>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className={styles.itemPrice}>9.99$</div>
                    </a>
                </li>
                <li className={styles.item}>
                    <a href="#">
                        <img src={xMen} alt="x-men" className={styles.itemImg}/>
                        <div className={styles.itemName}>X-Men: Days of Future Past</div>
                        <div className={styles.itemPrice}>NOT AVAILABLE</div>
                    </a>
                </li>
                <li className={styles.item}>
                    <a href="#">
                        <img src={uw} alt="ultimate war" className={styles.itemImg}/>
                        <div className={styles.itemName}>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className={styles.itemPrice}>9.99$</div>
                    </a>
                </li>
                <li className={styles.item}>
                    <a href="#">
                        <img src={xMen} alt="x-men" className={styles.itemImg}/>
                        <div className={styles.itemName}>X-Men: Days of Future Past</div>
                        <div className={styles.itemPrice}>NOT AVAILABLE</div>
                    </a>
                </li>
                <li className={styles.item}>
                    <a href="#">
                        <img src={uw} alt="ultimate war" className={styles.itemImg}/>
                        <div className={styles.itemName}>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className={styles.itemPrice}>9.99$</div>
                    </a>
                </li>
                <li className={styles.item}>
                    <a href="#">
                        <img src={xMen} alt="x-men" className={styles.itemImg}/>
                        <div className={styles.itemName}>X-Men: Days of Future Past</div>
                        <div className={styles.itemPrice}>NOT AVAILABLE</div>
                    </a>
                </li>
            </ul>
            <button className={`${buttonStyles.button} ${buttonStyles.main} ${buttonStyles.long}`}>
                <div className={buttonStyles.inner}>load more</div>
            </button>
        </div>
    )
}

export default ComicsList

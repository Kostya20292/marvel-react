import thor from '../../assets/thor.jpeg'
import mjolnir from '../../assets/mjolnir.png'
import buttonStyles from '../../style/button.module.scss'
import styles from './RandomChar.module.scss'

const RandomChar = () => {
    return (
        <div className={styles.randomChar}>
            <div className={styles.block}>
                <img src={thor} alt="Random character" className={styles.img}/>
                <div className={styles.info}>
                    <p className={styles.name}>Thor</p>
                    <p className={styles.descr}>
                        As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...
                    </p>
                    <div className={styles.btns}>
                        <a href="#" className={`${buttonStyles.button} ${buttonStyles.main}`}>
                            <div className={buttonStyles.inner}>homepage</div>
                        </a>
                        <a href="#" className={`${buttonStyles.button} ${buttonStyles.secondary}`}>
                            <div className={buttonStyles.inner}>Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.static}>
                <p className={styles.title}>
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className={styles.title}>
                    Or choose another one
                </p>
                <button className={`${buttonStyles.button} ${buttonStyles.main}`}>
                    <div className={buttonStyles.inner}>try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className={styles.decoration}/>
            </div>
        </div>
    )
}

export default RandomChar

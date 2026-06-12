import thor from '../../assets/thor.jpeg'
import buttonStyles from '../../style/button.module.scss'
import styles from './CharInfo.module.scss'

const CharInfo = () => {
    return (
        <div className={styles.info}>
            <div className={styles.basics}>
                <img src={thor} alt="abyss"/>
                <div>
                    <div className={styles.infoName}>thor</div>
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
            <div className={styles.descr}>
                In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
            </div>
            <div className={styles.comics}>Comics:</div>
            <ul className={styles.comicsList}>
                <li className={styles.comicsItem}>
                    All-Winners Squad: Band of Heroes (2011) #3
                </li>
                <li className={styles.comicsItem}>
                    Alpha Flight (1983) #50
                </li>
                <li className={styles.comicsItem}>
                    Amazing Spider-Man (1999) #503
                </li>
                <li className={styles.comicsItem}>
                    Amazing Spider-Man (1999) #504
                </li>
                <li className={styles.comicsItem}>
                    AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
                </li>
                <li className={styles.comicsItem}>
                    Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
                </li>
                <li className={styles.comicsItem}>
                    Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
                </li>
                <li className={styles.comicsItem}>
                    Vengeance (2011) #4
                </li>
                <li className={styles.comicsItem}>
                    Avengers (1963) #1
                </li>
                <li className={styles.comicsItem}>
                    Avengers (1996) #1
                </li>
            </ul>
        </div>
    )
}

export default CharInfo

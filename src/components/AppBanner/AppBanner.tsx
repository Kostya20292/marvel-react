import avengers from '../../assets/Avengers.png'
import avengersLogo from '../../assets/Avengers_logo.png'
import styles from './AppBanner.module.scss'

const AppBanner = () => {
    return (
        <div className={styles.banner}>
            <img src={avengers} alt="Avengers"/>
            <div className={styles.bannerText}>
                New comics every week!<br/>
                Stay tuned!
            </div>
            <img src={avengersLogo} alt="Avengers logo"/>
        </div>
    )
}

export default AppBanner

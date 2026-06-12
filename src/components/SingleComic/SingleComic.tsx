import xMen from '../../assets/x-men.png'
import styles from './SingleComic.module.scss'

const SingleComic = () => {
    return (
        <div className={styles.singleComic}>
            <img src={xMen} alt="x-men" className={styles.img}/>
            <div>
                <h2 className={styles.name}>X-Men: Days of Future Past</h2>
                <p className={styles.descr}>Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</p>
                <p className={styles.descr}>144 pages</p>
                <p className={styles.descr}>Language: en-us</p>
                <div className={styles.price}>9.99$</div>
            </div>
            <a href="#" className={styles.back}>Back to all</a>
        </div>
    )
}

export default SingleComic

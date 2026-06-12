import AppHeader from '../AppHeader/AppHeader'
import RandomChar from '../RandomChar/RandomChar'
import CharList from '../CharList/CharList'
import CharInfo from '../CharInfo/CharInfo'

import decoration from '../../assets/vision.png'
import styles from './App.module.scss'

const App = () => {
    return (
        <div className={styles.app}>
            <AppHeader/>
            <main>
                <RandomChar/>
                <div className={styles.charContent}>
                    <CharList/>
                    <CharInfo/>
                </div>
                <img className={styles.bgDecoration} src={decoration} alt="vision"/>
            </main>
        </div>
    )
}

export default App

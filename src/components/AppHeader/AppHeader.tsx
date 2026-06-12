import styles from './AppHeader.module.scss'

const AppHeader = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                <a href="#">
                    <span>Marvel</span> information portal
                </a>
            </h1>
            <nav className={styles.menu}>
                <ul>
                    <li><a href="#">Characters</a></li>
                    /
                    <li><a href="#">Comics</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader

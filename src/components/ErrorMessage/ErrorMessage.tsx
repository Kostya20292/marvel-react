import error from '../../assets/error.gif';
import styles from './ErrorMessage.module.scss';

export const ErrorMessage = () => <img src={error} alt="Error" className={styles.errorMessage} />;

import { useAppSelector } from '../../store/hooks';
import buttonStyles from '../../style/button.module.scss';
import styles from './CharInfo.module.scss';
import { Spinner } from '../Spinner/Spinner';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import Skeleton from '../Skeleton/Skeleton';

const CharInfo = () => {
  const { characterInfo, loading } = useAppSelector((state) => state.characterInfo);

  return (
    <div className={styles.info}>
      {loading === 'idle' && <Skeleton />}
      {loading === 'pending' && <Spinner />}
      {loading === 'failed' && <ErrorMessage />}
      {loading === 'succeeded' && characterInfo && (
        <>
          <div className={styles.basics}>
            <img src={characterInfo.imageUrl} alt={characterInfo.name} />
            <div>
              <div className={styles.infoName}>{characterInfo.name}</div>
              <div className={styles.btns}>
                {characterInfo.homepageUrl && (
                  <a
                    href={characterInfo.homepageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${buttonStyles.button} ${buttonStyles.main}`}
                  >
                    <div className={buttonStyles.inner}>homepage</div>
                  </a>
                )}
                {characterInfo.wikiUrl && (
                  <a
                    href={characterInfo.wikiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${buttonStyles.button} ${buttonStyles.secondary}`}
                  >
                    <div className={buttonStyles.inner}>Wiki</div>
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className={styles.descr}>{characterInfo.description}</div>
          <div className={styles.comics}>Comics:</div>
          <ul className={styles.comicsList}>
            {characterInfo.comics.length ? (
              characterInfo.comics.map((comic) => (
                <li key={comic} className={styles.comicsItem}>
                  {comic}
                </li>
              ))
            ) : (
              <li className={styles.comicsItem}>No comics for this character</li>
            )}
          </ul>
        </>
      )}
    </div>
  );
};

export default CharInfo;

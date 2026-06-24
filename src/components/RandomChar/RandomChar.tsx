import mjolnir from '../../assets/mjolnir.png';
import thor from '../../assets/thor.jpeg';
import buttonStyles from '../../style/button.module.scss';
import styles from './RandomChar.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getCharacter } from '../../store/characters/charactersThunk';
import { getRandomNumber } from '../../utils/getRandomNumber';
import { useEffect, useState } from 'react';
import { Spinner } from '../Spinner/Spinner';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

const RandomChar = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(getCharacter(getRandomNumber()));
  const { character, loading } = useAppSelector((state) => state.characters);
  const [erroredImageUrl, setErroredImageUrl] = useState<string | null>(null);
  const isImageBroken = !!character && erroredImageUrl === character.imageUrl;

  useEffect(() => {
    dispatch(getCharacter(getRandomNumber()));
  }, [dispatch]);

  return (
    <div className={styles.randomChar}>
      <div className={styles.block}>
        {loading === 'pending' && <Spinner />}
        {loading === 'failed' && <ErrorMessage />}
        {loading === 'succeeded' && character && (
          <>
            <img
              src={isImageBroken ? thor : character.imageUrl}
              alt="Random character"
              className={styles.img}
              onError={() => setErroredImageUrl(character.imageUrl)}
            />
            <div className={styles.info}>
              <p className={styles.name}>{character.name}</p>
              <p className={styles.descr}>{character.description}</p>
              <div className={styles.btns}>
                <a
                  href={character.homepageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonStyles.button} ${buttonStyles.main}`}
                >
                  <div className={buttonStyles.inner}>homepage</div>
                </a>
                <a
                  href={character.wikiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonStyles.button} ${buttonStyles.secondary}`}
                >
                  <div className={buttonStyles.inner}>Wiki</div>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
      <div className={styles.static}>
        <p className={styles.title}>
          Random character for today!
          <br />
          Do you want to get to know him better?
        </p>
        <p className={styles.title}>Or choose another one</p>
        <button className={`${buttonStyles.button} ${buttonStyles.main}`} onClick={handleClick}>
          <div className={buttonStyles.inner}>try it</div>
        </button>
        <img src={mjolnir} alt="mjolnir" className={styles.decoration} />
      </div>
    </div>
  );
};

export default RandomChar;

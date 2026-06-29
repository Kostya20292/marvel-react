import { useEffect } from 'react';
import buttonStyles from '../../style/button.module.scss';
import styles from './CharList.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getAllCharacters } from '../../store/characters/charactersThunk';
import { Spinner } from '../Spinner/Spinner';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

const CharList = () => {
  const dispatch = useAppDispatch();
  const { characters, loading } = useAppSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);

  return (
    <div>
      {loading === 'pending' && (
        <div className={styles.status}>
          <Spinner />
        </div>
      )}
      {loading === 'failed' && (
        <div className={styles.status}>
          <ErrorMessage />
        </div>
      )}
      {loading === 'succeeded' && characters && (
        <ul className={styles.grid}>
          {characters.map((character) => (
            <li key={character.id} className={styles.item}>
              <img src={character.imageUrl} alt={character.name} />
              <div className={styles.name}>{character.name}</div>
            </li>
          ))}
        </ul>
      )}
      <button className={`${buttonStyles.button} ${buttonStyles.main} ${buttonStyles.long}`}>
        <div className={buttonStyles.inner}>load more</div>
      </button>
    </div>
  );
};

export default CharList;

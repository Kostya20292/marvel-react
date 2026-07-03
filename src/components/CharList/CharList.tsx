import { useEffect } from 'react';
import clsx from 'clsx';
import buttonStyles from '../../style/button.module.scss';
import styles from './CharList.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getAllCharacters, getCharacterInfo } from '../../store/characters/charactersThunk';
import { Spinner } from '../Spinner/Spinner';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

const CharList = () => {
  const dispatch = useAppDispatch();
  const { characters, loading } = useAppSelector((state) => state.characters);
  const selectedId = useAppSelector((state) => state.characterInfo.selectedId);

  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);

  const handleClick = (id: number) => dispatch(getCharacterInfo(id));
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
            <li
              key={character.id}
              className={clsx(styles.item, { [styles.itemSelected]: character.id === selectedId })}
              onClick={() => handleClick(character.id)}
            >
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

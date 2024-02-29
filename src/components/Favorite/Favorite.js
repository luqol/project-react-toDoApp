import { useSelector } from 'react-redux';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import { getFavoriteCards } from '../../redux/cardsRedux';
import Card from '../Card/Card';
import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';

const Favorite = () => {
  const favoriteCards = useSelector( getFavoriteCards );
  if (Object.keys(favoriteCards).length !== 0){
    return(
      <div className={styles.favorite}>
        <PageTitle>Favorite</PageTitle>
        <ul className={styles.favoriteCards}>
          {favoriteCards.map(card => <Card key={card.id} id={card.id} title={card.title}  isFavorite={card.isFavorite}  />)}
        </ul>
    </div>
    );
  } else {
    return(
      <div className={styles.favorite}>
        <PageTitle>Favorite</PageTitle>
        <p className={styles.noCards}>No Cards...</p>
    </div>
    );
  }
  
};

export default Favorite;
import { useSelector } from 'react-redux';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import { getFavoriteCards } from '../../redux/store';
import Card from '../Card/Card';

const Favorite = () => {
  const favoriteCards = useSelector( getFavoriteCards );

  return(
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <ul className={styles.favoriteCards}>
        {favoriteCards.map(card => <Card key={card.id} id={card.id} title={card.title}  isFavorite={card.isFavorite}  />)}
      </ul>
  </div>
  );
};

export default Favorite;
import clsx from 'clsx';
import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { updateCardFavorite } from '../../redux/cardsRedux';



const Card = ({id, title, isFavorite}) => {
  const dispatch = useDispatch();
  const handleButton = e =>{
    e.preventDefault();
    dispatch( updateCardFavorite(id) );
  };

  return(
    <li className={styles.card} >{title} 
      <button onClick={handleButton} className={styles.btnStar}>
        <i className={clsx('fa fa-star-o', isFavorite && styles.isFavorite)}></i>
      </button> 
    </li>
  );
};

export default Card;


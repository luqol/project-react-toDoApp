import clsx from 'clsx';
import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { removeCard, updateCardFavorite } from '../../redux/cardsRedux';



const Card = ({id, title, isFavorite}) => {
  const dispatch = useDispatch();
  const handleStarButton = e =>{
    e.preventDefault();
    dispatch( updateCardFavorite(id) );
  };

  const handleTrashButton = e =>{
    e.preventDefault();
    dispatch( removeCard(id) );
  };

  return(
    <li className={styles.card} >{title} 
      <div>
        <button onClick={handleStarButton} className={styles.btn}>
          <i className={clsx('fa fa-star-o', isFavorite && styles.isFavorite)}></i>
        </button> 
        <button onClick={handleTrashButton} className={styles.btn}>
          <i className='fa fa-trash'></i>
        </button>
      </div>
    </li>
  );
};

export default Card;


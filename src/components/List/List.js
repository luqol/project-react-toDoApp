import Column from '../Column/Column';
import styles from './List.module.scss';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getAllCollumns, getListByID } from '../../redux/store';

const List = () => {

  const listData = useSelector(state => getListByID(state, 1));
  
  const columns = useSelector(state => getAllCollumns(state, listData.id));
  //console.log('getallcollumns');

  
 
  return (
    <div className={styles.list}>
      <header className={styles.header}>
          <h2 className={styles.title} >{listData.title}</h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <section className={styles.columns}>
      {columns.map(column => 
      <Column key={column.id} {...column} />
      )}
      </section>
       <ColumnForm />
    </div>
  );
};

export default List;